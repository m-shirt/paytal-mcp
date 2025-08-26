import { getAccessToken } from "../../lib/tokenStore.js";
import FormData from "form-data";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import axios from "axios";
import os from "os";
import { randomBytes } from "crypto";

/** Allowed file extensions */
const ALLOWED_EXTENSIONS = ["pdf", "jpg", "jpeg", "png", "gif", "svg", "webp", "bmp", "tiff"];

/**
 * Validate file extension against allowed list.
 */
function validateExtension(filePath) {
  const ext = path.extname(filePath).slice(1).toLowerCase();
  if (!ALLOWED_EXTENSIONS.includes(ext)) {
    throw new Error(
      `Invalid file type .${ext}. Allowed types: ${ALLOWED_EXTENSIONS.join(", ")}`
    );
  }
}

/**
 * Function to upload a file to the PayTal API.
 *
 * @param {Object} args - Arguments for the upload.
 * @param {string} args.file - The path (absolute, relative, file:// URI) OR base64 string of the file to be uploaded.
 * @returns {Promise<Object>} - The result of the file upload.
 */
const executeFunction = async ({ file }) => {
  const apiUrl = process.env.PAYTAL_API_URL;
  const access_token = getAccessToken();
  let tempPath = null;

  try {
    let absPath;

    // If it's base64 (naive detection: very long string or starts with data:)
    if (file.startsWith("data:") || /^[A-Za-z0-9+/=\n\r]+$/.test(file)) {
      const base64Data = file.replace(/^data:.*;base64,/, "");
      const buffer = Buffer.from(base64Data, "base64");

      // Try to guess extension from data URI, fallback to bin
      let ext = "bin";
      const match = file.match(/^data:(.+?);base64,/);
      if (match) {
        const mime = match[1];
        const found = ALLOWED_EXTENSIONS.find((e) => mime.includes(e));
        if (found) ext = found;
      }

      tempPath = path.join(
        os.tmpdir(),
        `upload-${randomBytes(6).toString("hex")}.${ext}`
      );
      fs.writeFileSync(tempPath, buffer);
      absPath = tempPath;
    } else {
      // Handle file:// URIs
      if (file.startsWith("file://")) {
        file = fileURLToPath(file);
      }
      absPath = path.resolve(file);
    }

    // Validate extension
    validateExtension(absPath);

    const formData = new FormData();
    formData.append("file", fs.createReadStream(absPath));

    const headers = {
      ...formData.getHeaders(),
      Authorization: `Bearer ${access_token}`,
      Accept: "application/json",
    };

    const response = await axios.post(`${apiUrl}/upload`, formData, {
      headers,
    });

    return response.data;
  } catch (error) {
    return {
      error: `An error occurred while uploading the file: ${
        error instanceof Error
          ? error.message
          : JSON.stringify(error.response?.data || error)
      }`,
    };
  } finally {
    // Clean up temp file if we created one
    if (tempPath) {
      try {
        fs.unlinkSync(tempPath);
      } catch (_) {}
    }
  }
};

/**
 * Tool configuration for uploading a file to the PayTal API.
 * @type {Object}
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: "function",
    function: {
      name: "upload_file",
      description:
        "Upload a file to the PayTal API. Input may be a file path (absolute, relative, file:// URI) or a base64 string. Allowed types: pdf, jpg, jpeg, png, gif, svg, webp, bmp, tiff.",
      parameters: {
        type: "object",
        properties: {
          file: {
            type: "string",
            description:
              "The file to be uploaded. Can be a path (absolute, relative, or file:// URI) or a base64-encoded string.",
          },
        },
        required: ["file"],
      },
    },
  },
};

export { apiTool };

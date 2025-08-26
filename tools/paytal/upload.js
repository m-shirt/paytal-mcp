import { getAccessToken } from "../../lib/tokenStore.js";
import FormData from "form-data";
import fs from "fs";
import axios from "axios";

/**
 * Function to upload a file to the PayTal API.
 *
 * @param {Object} args - Arguments for the upload.
 * @param {string} args.file - The absolute path to the file to be uploaded.
 * @returns {Promise<Object>} - The result of the file upload.
 */
const executeFunction = async ({ file }) => {
  const apiUrl = process.env.PAYTAL_API_URL;
  const access_token = getAccessToken();
  try {
    const formData = new FormData();
    formData.append('file', fs.createReadStream(file));

    const headers = {
      ...formData.getHeaders(),
      'Authorization': `Bearer ${access_token}`,
      'Accept': 'application/json'
    };

    const response = await axios.post(`${apiUrl}/upload`, formData, {
      headers
    });

    return response.data;
  } catch (error) {
    return {
      error: `An error occurred while uploading the file: ${error instanceof Error ? error.message : JSON.stringify(error.response?.data || error)}`
    };
  }
};

/**
 * Tool configuration for uploading a file to the PayTal API.
 * @type {Object}
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'upload_file',
      description: 'Upload a file to the PayTal API.',
      parameters: {
        type: 'object',
        properties: {
          file: {
            type: 'string',
            description: 'The absolute path to the file to be uploaded.'
          }
        },
        required: ['file']
      }
    }
  }
};

export { apiTool };
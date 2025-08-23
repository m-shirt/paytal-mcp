import { getAccessToken } from "../../lib/tokenStore.js";

/**
 * Function to upload a file to the PayTal API.
 *
 * @param {Object} args - Arguments for the upload.
 * @param {File} args.file - The file to be uploaded.
 * @returns {Promise<Object>} - The result of the file upload.
 */
const executeFunction = async ({ file }) => {
  const apiUrl = process.env.PAYTAL_API_URL ;
  const access_token = getAccessToken(); // will be get from data.access_token from login
console.error("Access token being sent:", access_token);

  try {
    const formData = new FormData();
    formData.append('file', file);

    // Perform the fetch request
    const response = await fetch(`${apiUrl}/upload`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${access_token}`
      },
      body: formData
    });

      const rawText = await response.text();
      // Check if response is JSON
    const contentType = response.headers.get("content-type");
    let res;
    if (contentType && contentType.includes("application/json")) {
      res = JSON.parse(rawText);
    } else {
      res = { raw: rawText };
    }
    // Check if the response was successful
    if (!response.ok) {
       throw new Error(
        `Status ${response.status}: ${JSON.stringify(res)}`
      );
    }

    return res;
  } catch (error) {
   // console.log('Error uploading file:', error);
    return {
      error: `An error occurred while uploading the file: ${error instanceof Error ? error.message : JSON.stringify(error)}`
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
            description: 'The file to be uploaded.'
          }
        },
        required: ['file']
      }
    }
  }
};

export { apiTool };
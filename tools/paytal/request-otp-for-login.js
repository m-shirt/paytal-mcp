/**
 * Function to request an OTP for login.
 *
 * @param {Object} args - Arguments for the OTP request.
 * @param {string} args.email - The email address to send the OTP to.
 * @returns {Promise<Object>} - The result of the OTP request.
 */
const executeFunction = async ({ email }) => {
  const apiUrl =  process.env.PAYTAL_API_URL;
  try {
    // Construct the URL for the OTP request
    const url = `${apiUrl}/auth/otp`;

    // Prepare the request body
    const body = JSON.stringify({ email });

    // Set up headers for the request
    const headers = {
      'Content-Type': 'application/json'
    };

    // Perform the fetch request
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body
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
   // console.log('Error requesting OTP:', error);
    return {
      error: `An error occurred while requesting OTP: ${error instanceof Error ? error.message : JSON.stringify(error)}`
    };
  }
};

/**
 * Tool configuration for requesting an OTP for login.
 * @type {Object}
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'request_otp',
      description: 'Request an OTP for login.',
      parameters: {
        type: 'object',
        properties: {
          email: {
            type: 'string',
            description: 'The email address to send the OTP to.'
          }
        },
        required: ['email']
      }
    }
  }
};

export { apiTool };
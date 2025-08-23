import { setAccessToken } from "../../lib/tokenStore.js";

/**
 * Function to log in using OTP.
 *
 * @param {Object} args - Arguments for the login request.
 * @param {string} args.email - The email of the user.
 * @param {string} args.otp - The OTP code sent to the user.
 * @returns {Promise<Object>} - The result of the login request store data.access_token for other apis.
 */




const executeFunction = async ({ email, otp }) => {
  const apiUrl =  process.env.PAYTAL_API_URL;
  try {
    // Construct the URL for the login request
    const url = `${apiUrl}/auth/login`;

    // Set up the request body
    const body = JSON.stringify({ email, otp });

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
  //  console.error('res:', res);

  // Ensure access_token exists before setting
    if (!res.data?.access_token) {
      throw new Error("No access_token in login response");
    }

    setAccessToken(res.data.access_token); // store for other tools
    return res;
  } catch (error) {
   // console.log('Error logging in:', error);
    return {
      error: `An error occurred while logging in: ${error instanceof Error ? error.message : JSON.stringify(error)}`
    };
  }
};

/**
 * Tool configuration for logging in using OTP.
 * @type {Object}
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'login_using_otp',
      description: 'Log in using OTP.',
      parameters: {
        type: 'object',
        properties: {
          email: {
            type: 'string',
            description: 'The email of the user.'
          },
          otp: {
            type: 'string',
            description: 'The OTP code sent to the user.'
          }
        },
        required: ['email', 'otp']
      }
    }
  }
};

export { apiTool };
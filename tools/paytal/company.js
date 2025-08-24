import { getAccessToken } from "../../lib/tokenStore.js";

/**
 * Function to retrieve company information from the PayTal API.
 *
 * @returns {Promise<Object>} - The result of the company information retrieval.
 */
const executeFunction = async () => {
  const apiUrl = process.env.PAYTAL_API_URL ;
  const access_token = getAccessToken(); // will be get from data.access_token from login
  try {
    // Construct the URL for the request
    const url = `${apiUrl}/company`;

    // Perform the fetch request
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${access_token}`
      }
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
   // console.log('Error retrieving company information:', error);
    return {
      error: `An error occurred while retrieving company information: ${error instanceof Error ? error.message : JSON.stringify(error)}`
    };
  }
};

/**
 * Tool configuration for retrieving company information from the PayTal API.
 * @type {Object}
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'get_company_info',
      description: 'Retrieve company information from the PayTal API. IMPORTANT: Do NOT call get-company-info or create-company until the user is fully authenticated',
      parameters: {
        type: 'object',
        properties: {},
        required: []
      }
    }
  }
};

export { apiTool };
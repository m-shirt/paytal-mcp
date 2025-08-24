import { getAccessToken } from "../../lib/tokenStore.js";

/**
 * Function to create company details in the PayTal system.
 *
 * @param {Object} companyDetails - The details of the company to be created.
 * @param {string} companyDetails.legal_name - The legal name of the company.
 * @param {string} companyDetails.commercial_name - The commercial name of the company.
 * @param {string} companyDetails.type - The type of the company.
 * @param {string} companyDetails.registration_number - The registration number of the company.
 * @param {string} companyDetails.vat_number - The VAT number of the company.
 * @param {string} companyDetails.currency - The currency used by the company.
 * @param {string} companyDetails.address - The address of the company.
 * @param {string} companyDetails.country_code - The country code of the company.
 * @param {string} companyDetails.city - The city where the company is located.
 * @param {string} companyDetails.zip_code - The zip code of the company.
 * @param {string} companyDetails.logo - The URL of the company's logo.
 * @param {string} companyDetails.registeration_proof - The URL of the registration proof.
 * @param {string} companyDetails.vat_proof - The URL of the VAT proof.
 * @param {string} companyDetails.tax_compliance_proof - The URL of the tax compliance proof.
 * @param {string} companyDetails.bank_statement_proof - The URL of the bank statement proof.
 * @param {string} companyDetails.address_proof - The URL of the address proof.
 * @param {string} companyDetails.passport_proof - The URL of the passport proof.
 * @returns {Promise<Object>} - The result of the company creation.
 */
const executeFunction = async (companyDetails) => {
  const apiUrl = process.env.PAYTAL_API_URL;
  const access_token = getAccessToken(); // will be get from data.access_token from login
  try {
    const url = `${apiUrl}/company`;

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json',
        Authorization: `Bearer ${access_token}`,
      },
      body: JSON.stringify(companyDetails),
    };
    // 🔎 Log exactly what you're about to send
    // console.log("Request:", {
    //   url,
    //   ...options,
    //   body: companyDetails, // prettier than stringified JSON
    // });

    // Now actually send it
    const response = await fetch(url, options);

    const rawText = await response.text();
    // Check if response is JSON
    const contentType = response.headers.get("content-type");
    let res;
    if (contentType && contentType.includes("application/json")) {
      res = JSON.parse(rawText);
    } else {
      res = { raw: rawText };
      throw new Error(`contentType ${contentType}: Response is not JSON Try again with Vaild Data`);

    }
    // Check if the response was successful
    if (!response.ok) {
      throw new Error(`status ${response.status}: ${JSON.stringify(res)}`);
    }

    return res;
  } catch (error) {
    // console.error('Error creating company details:', error);
    return {
      error: `An error occurred while creating company details: ${
        error instanceof Error ? error.message : JSON.stringify(error)
      }`,
    };
  }
};

/**
 * Tool configuration for creating company details in the PayTal system.
 * @type {Object}
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: "function",
    function: {
      name: "create_company",
      description:
        "Create company details in the PayTal system. IMPORTANT: Do NOT call get-company-info or create-company until the user is fully authenticated",
      parameters: {
        type: "object",
        properties: {
          legal_name: {
            type: "string",
            description: "The legal name of the company.",
          },
          commercial_name: {
            type: "string",
            description: "The commercial name of the company.",
          },
          type: {
            type: "string",
            description: "The type of the company.",
          },
          registration_number: {
            type: "string",
            description: "The registration number of the company.",
          },
          vat_number: {
            type: "string",
            description: "The VAT number of the company.",
          },
          currency: {
            type: "string",
            description: "The currency used by the company.",
          },
          address: {
            type: "string",
            description: "The address of the company.",
          },
          country_code: {
            type: "string",
            description: "The country code of the company.",
          },
          city: {
            type: "string",
            description: "The city where the company is located.",
          },
          zip_code: {
            type: "string",
            description: "The zip code of the company.",
          },
          logo: {
            type: "string",
            description: "The URL of the company's logo.",
          },
          registeration_proof: {
            type: "string",
            description: "The URL of the registration proof.",
          },
          vat_proof: {
            type: "string",
            description: "The URL of the VAT proof.",
          },
          tax_compliance_proof: {
            type: "string",
            description: "The URL of the tax compliance proof.",
          },
          bank_statement_proof: {
            type: "string",
            description: "The URL of the bank statement proof.",
          },
          address_proof: {
            type: "string",
            description: "The URL of the address proof.",
          },
          passport_proof: {
            type: "string",
            description: "The URL of the passport proof.",
          },
        },
        required: [
          "legal_name",
          "commercial_name",
          "type",
          "registration_number",
          "vat_number",
          "currency",
          "address",
          "country_code",
          "city",
          "zip_code",
        ],
      },
    },
  },
};

export { apiTool };

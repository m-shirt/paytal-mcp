
const paytalInstructions = `
PayTal MCP Server Usage Instructions:

- IMPORTANT: Do NOT call get-company-info or create-company until the user is fully authenticated.
- Ensure the user is logged in before attempting any company-related operations.

AUTHENTICATION FLOW:
1. Ask user for their email address
2. Call request-otp-for-login function with the email
3. Ask user for the OTP code they received via email
4. Call login-using-otp function with email and OTP
5. Display login success and user details

COMPANY MANAGEMENT FLOW:
1. After successful login, call get-company-info to fetch current company data
2. Display current company information to user
3. For company updates, call create-company with new company details
4. All required fields must be provided: legal_name, commercial_name, type, registration_number, vat_number, currency, address, country_code, city, zip_code
5. For file URLs (logo, proofs), ask user for the full URLs like "https://example.com/logo.png"
6. Optional fields can be set to empty values if not provided by user

ERROR HANDLING:
- Always check for authentication errors and guide user through login again
- Handle invalid OTP by requesting new one
- Inform user of any missing required fields

FUNCTION NAMES TO USE:
- request-otp-for-login
- login-using-otp  
- get-company-info
- create-company
`;

const loginFlowInfoPrompt = {
  id: "login-flow-info",
  metadata: {
    title: "Login & Company Flow and Instructions",
    description: "Explains the flow for login and company management",
    argsSchema: [] // no input required
  },
  handler: () => ({
    messages: [
      {
        role: "assistant",
        content: {
          type: "text",
          text: paytalInstructions
        }
      }
    ]
  })
};

export default loginFlowInfoPrompt;
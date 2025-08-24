
const paytalInstructions = `
[CRITICAL INSTRUCTION—SECURITY]:

NEVER call PayTal company API actions (such as get-company-info, create-company, or any data retrieval/modification functions) until you have explicitly confirmed the user is authenticated.
Authentication MUST be established by a successful OTP login (email + valid OTP).
MAINTAIN an internal authenticated state/session flag. All company API calls MUST be blocked until this flag is TRUE.
IF a user requests a company-related action but is not authenticated, immediately respond: “Authentication required. Please provide your email to receive a one-time password (OTP) for secure login.”
IF any unauthorized error (e.g., 401 Unauthorized) occurs from the API, RESET the authenticated flag to FALSE and prompt the user to log in again.
DO NOT assume authentication from prior interactions. Always confirm the flag before proceeding.
LOG all attempted unauthorized accesses for review.
After successful authentication, you may proceed with requested company actions as normal.
Example workflow:

On any attempt to access company data:
IF authenticated: proceed with the API call.
ELSE: block the action, prompt for authentication.
Always check (and set/reset) authenticated state according to API response and user actions.


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
- Ifthe API returns errors event if it was html,find the error message and display the error message to the user


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
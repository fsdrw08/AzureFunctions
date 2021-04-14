const config = require('dotenv').config;
// https://docs.microsoft.com/en-us/graph/tutorials/azure-functions?tutorial-step=3
const msalConfig = {
    auth: {
      clientId: provess.env.YOUR_TEST_APP_APP_ID_HERE,
      authority: "https://login.microsoftonline.com/" + provess.env.YOUR_TENANT_ID_HERE
    }
  };
  
const msalRequest = {
  // Scope of the Azure Function
  scopes: [
    provess.env.YOUR_AZURE_FUNCTION_APP_ID_HERE+'/.default'
  ]
}
// Create the main MSAL instance
// configuration parameters are located in config.js
const msalClient = new msal.PublicClientApplication(msalConfig);

async function signIn() {
  // Login
  try {
    // Use MSAL to login
    const authResult = await msalClient.loginPopup(msalRequest);
    // Save the account username, needed for token acquisition
    sessionStorage.setItem('msal-userName', authResult.account.username);
    // Refresh home page
    updatePage(Views.home);
  } catch (error) {
    console.log(error);
    updatePage(Views.error, {
      message: 'Error logging in',
      debug: error
    });
  }
}

function signOut() {
  account = null;
  sessionStorage.removeItem('msal-userName');
  msalClient.logout();
}
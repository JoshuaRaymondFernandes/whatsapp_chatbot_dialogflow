const {firebase} = require('./DBconfig')();

// Function to get Idtoken
const getIdToken = async (sessionId) => {
    try{
        console.log(`Creating new Token ${sessionId}`)
        console.time(`ID token generation ${sessionId}`);
        const idToken = await firebase.auth().currentUser.getIdToken(false);
        if(idToken){
        console.timeEnd(`ID token generation ${sessionId}`);
          // Format for sending data in CF
          const headerData = {
            headers: {
              'Authorization': `Bearer ${idToken}`
            }
          };
          console.log(idToken);
          return headerData;
        }
    }
    catch(error){
      // Error Handling
      console.timeEnd(`ID token generation ${sessionId}`);
      console.log(`Error Creating Token ${error}`);
      return null;
    }
}

module.exports = getIdToken;
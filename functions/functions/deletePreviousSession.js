const
{
  db
} = require('./DBconfig')();
  
// Deleting previous sessions of user with sessionID
const deletePreviousSession = async (sessionId) => {
    console.time(`Deleting Previous Session ${sessionId}`);
    try{
        await db.collection(`customerOrderSession`).doc(sessionId).delete();
        console.log("User Session Deleted");
        console.timeEnd(`Deleting Previous Session ${sessionId}`);
    }
    catch(error){
        console.log(`Error while deleting user session ${sessionId} : ${error}`);
        console.timeEnd(`Deleting Previous Session ${sessionId}`);
    }   
}

  module.exports = deletePreviousSession;
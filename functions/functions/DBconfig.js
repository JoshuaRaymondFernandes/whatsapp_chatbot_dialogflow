//static data to don't have to generate the conf_adata 2 times
const config = require(`../config`)();

let firebase = null;
let db = null;

const DBconfig = () => {

    // console.log(`From config file ${info}`);

    // If the firebase constants were already initialized, return them
    if(firebase != null && db != null) {
        console.log(`DB connection already Present`);
        // Before returning, just check if user is signed in or not
        // const loggedInUser = firebase.auth().currentUser;
        // if(!loggedInUser){
        //   // If not signed in, sign in User
        //   console.log(`Firebase not logged in, logging in now`);
        //   await firebase.auth().signInWithEmailAndPassword(config.botEmailAuth.email, config.botEmailAuth.password);
        // }
        return {firebase, db};
    }

    // If not initialized, initialize and return constants
    console.log(`STARTING INITIALIZION FIREBASE CONSTANTS`);
    console.time(`INITIALIZING FIREBASE CONSTANTS`);
    firebase = require(`firebase`);
    require("firebase/auth");
    require("firebase/firestore");
    firebase.initializeApp(config.firebaseConfig);
    firebase.auth().signInWithEmailAndPassword(config.botEmailAuth.email, config.botEmailAuth.password);
    db = firebase.firestore();
    console.timeEnd(`INITIALIZING FIREBASE CONSTANTS`);
    return {firebase, db}
}

module.exports = DBconfig;
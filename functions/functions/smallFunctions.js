const {firebase, db} = require('./DBconfig')();


const isSessionValid = (createdAtTimestamp) => {

  if(createdAtTimestamp){
    // if session already exists, just add the new order to the orders list
    let oldDate = new Date();
    // Setting Time of 1 Hour before
    // oldDate.setHours( oldDate.getHours() - 1 );
    oldDate.setMinutes(oldDate.getMinutes() - 60);

    let deleteTimeThreshold = firebase.firestore.Timestamp.fromDate(oldDate);

    return deleteTimeThreshold < createdAtTimestamp? true : false;
  }
  else
  {
    // If createdAtTimestamp is undefined, it means there is no session present, hence can return true.
    return true;
  }
}

// round off float numbers
const roundToTwoDecimals = (val) => {
  return val.toFixed(2)*1;
}

const generateRandomNumber = (length) => {
  let result = "";
  const characters = "0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
      result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
      );
  }
  return result;
};

const camelize = (str) => {
  // Split the string at all space characters
  return str.split(' ')
     // get rid of any extra spaces using trim
     .map(a => a.trim())
     // Convert first char to upper case for each word
     .map(a => a[0].toUpperCase() + a.substring(1))
     // Join all the strings back together
     .join(" ")
}



module.exports = {
      isSessionValid,
      roundToTwoDecimals,
      generateRandomNumber,
      camelize
};
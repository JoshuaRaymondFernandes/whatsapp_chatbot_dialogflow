/* jshint esversion: 8 */
`use strict`;

console.log(`PROGRAM RESTARTS`);
const {WebhookClient} = require(`dialogflow-fulfillment`);
const functions = require(`firebase-functions`);
process.env.DEBUG = `dialogflow:debug`;

// Welcome Functions
const {
  defaultWelcome,
  mainMenuFallback
} = require(`./intents/mainMenu`);

const cancelOrder = require(`./intents/cancelOrder`);
const contactUs = require(`./intents/contactUs`);


// Rest file names are removed for copyright purposes.
const {
  intent_name,
  intent_name
} = require(`./intents/addItems/filename`);

const {
  intent_name,
  intent_name,
  intent_name,
  intent_name
} = require(`./intents/addItems/filename`);


const {
  intent_name,
  intent_name
} = require(`./intents/addItems/filename`);

const addOrderToDb = require(`./intents/addItems/filename`);

const {
  intent_name,
  intent_name,
  intent_name
} = require(`./intents/orderSummary/filename`);

const {
  selectOrderToModify,
  selectOrderToModifyFallback,
  changeQuantityOrDelete
} = require(`./intents/editItems/filename`);


const {
  intent_name,
  intent_name,
  intent_name
} = require(`./intents/orderCreation/filename`);

const {
  intent_name,
  intent_name
} = require(`./intents/orderCreation/filename`);

const orderCreation = require(`./intents/orderCreation/filename`);

const {
  intent_name,
  intent_name
} = require(`./intents/filename`);


exports.dialogflowFirebaseFulfillment = functions.https.onRequest((request, response) => {
  const agent = new WebhookClient({request,response});
  // console.log(`Dialogflow Request headers: ` + JSON.stringify(request.headers));
  console.log(`Dialogflow Request body: ` + JSON.stringify(request.body));

  let intentMap = new Map();

  // Start #### WELCOME MESSAGE AND MAIN MENU ####

  // Display catch of the day
  intentMap.set(`DefaultWelcomeIntent`, defaultWelcome);
  // If user enters a number other than select to order, cancel order, contact us
  intentMap.set(`mainMenuFallback`, mainMenuFallback);
  
  // End #### WELCOME MESSAGE AND MAIN MENU ####


  // START ####### FETCH / ADD CUSTOMER DETAILS FLOW ######## (First message after Hi)

  intentMap.set(`intent_name`, intent_name);
  intentMap.set(`intent_name`, intent_name);
  
  // END ####### FETCH / ADD CUSTOMER DETAILS FLOW ######## (First message after Hi)

  // START #### STOP CONVERSATION BY GOING TO MAIN MENU OR EXIT CONVERSATION ######

  // Ask user y or n to confirm to go to main menu, if Y show menu else take to order summary
  intentMap.set(`intent_name`, intent_name);
  // Ask user y or n to confirm to end conversation, if Y show menu else take to order summary
  intentMap.set(`intent_name`, intent_name);
  // END #### STOP CONVERSATION BY GOING TO MAIN MENU OR EXIT CONVERSATION ######



  // Start ### Cancel Order Flow ###
  intentMap.set(`CancelOrder`, cancelOrder);
  intentMap.set(`intent_name`, intent_name);
  intentMap.set(`intent_name`, intent_name);
  // End ### Cancel Order Flow ###

  // Start ### ContactUs Order Flow ###
  intentMap.set(`ContactUs`, contactUs);
  intentMap.set(`intent_name`, intent_name);
  intentMap.set(`intent_name`, intent_name);
  // End ### ContactUs Order Flow ###

  // Start #### User Selects to Order ######

  

  // START ######## ADDING ITEMS TO CART #############

  // Start #### OrderSelection FLow #####
  
  intentMap.set(`intent_name`, intent_name);
  intentMap.set(`intent_name`, intent_name);
  intentMap.set(`intent_name`, intent_name);
  intentMap.set(`intent_name`, intent_name);
  
  // End #### OrderSelection FLow #####
  
  // Start #### quantitySelection FLow #####

  intentMap.set(`intent_name`, intent_name);
  intentMap.set(`intent_name`, intent_name);
  intentMap.set(`intent_name`, intent_name);
  intentMap.set(`intent_name`, intent_name);

  // End #### quantitySelection FLow #####

  // Start ##### Confirm Item selected ###########
  // Display details of item selected with quantity and cost and ask confirmation
  intentMap.set(`intent_name`, intent_name);
  intentMap.set(`intent_name`, intent_name);

  // End ##### Confirm Item selected ###########

  // Add item to DB
  intentMap.set(`intent_name`, intent_name);

  // END ######## ADDING ITEMS TO CART #############

  // Start ######## DISPLAYING ITEMS AND CONFIRMATION #############

  // Fetch and display items in cart
  intentMap.set(`intent_name`, intent_name);
  intentMap.set(`intent_name`, intent_name);
  intentMap.set(`intent_name`, intent_name);


  // END ######## DISPLAYING ITEMS AND CONFIRMATION #############
    
  // Start ######## EDIT ITEMS IN CART #############
  // Selecting which item to edit
  intentMap.set(`intent_name`, intent_name);
  intentMap.set(`intent_name`, intent_name);

  // Choosing to change quantity or delete
  intentMap.set(`intent_name`, intent_name);
  intentMap.set(`intent_name`, intent_name);


  // NEW QUANTITY FLOW
  // Ask new quantity
  intentMap.set(`intent_name`, intent_name);

  // Validate new quantity and ask confimation
  intentMap.set(`intent_name`, intent_name);

  // Make changes in DB if required
  intentMap.set(`intent_name`, intent_name);

  // User selected to not make the change so just display cart
  intentMap.set(`intent_name`, intent_name);

  
  // DELETE ITEMS FROM CART
  // Asking confimation to delete item
  intentMap.set(`intent_name`, intent_name);

  // Delete item from cart
  intentMap.set(`intent_name`, intent_name);

  // User selected to not make the change so just display cart
  intentMap.set(`intent_name`, intent_name);


  // END ######## EDIT ITEMS IN CART #############

  // START ###### FLOW FOR SELECTING, ADDING OR EDITING DELIVERY ADDRESS #########

  intentMap.set(`intent_name`, intent_name);
  intentMap.set(`intent_name`, intent_name);
  intentMap.set(`intent_name`, intent_name);
  intentMap.set(`intent_name`, intent_name);

  // END ###### FLOW FOR SELECTING, ADDING OR EDITING DELIVERY ADDRESS #########

  // START #### ORDER VALIDATION : CHECKING IF ITEMS SELECTED ARE IN STOCK ####


  // ## ORDER VALIDATION ##
  /* Calls cloud Function to validate orders and display appropriate message if 
  stock available, partially available or out of stock */
  intentMap.set(`intent_name`, intent_name);
  intentMap.set(`intent_name`, intent_name);
  intentMap.set(`intent_name`, intent_name);
  intentMap.set(`intent_name`, intent_name);

  // END #### ORDER VALIDATION : CHECKING IF ITEMS SELECTED ARE IN STOCK ####

  // START #### PAYMENT DETAILS #######

  // Display payment options to user and ask them to select
  intentMap.set(`intent_name`, intent_name);
  // Display details of the payment option selected (Called after order creation)
  intentMap.set(`intent_name`, intent_name);

  // END #### PAYMENT DETAILS #######

  // START ##### ORDER CREATION #####

  // Calls Cloud Function to create order, displays order details and then payment details
  intentMap.set(`intent_name`, intent_name);

  // END ##### ORDER CREATION #####


  agent.handleRequest(intentMap);
});
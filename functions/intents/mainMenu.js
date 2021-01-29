const displayMenu = require(`../functions/displayMenu`);
const backToOrdering = require(`../functions/backToOrdering`);
const {checkOrderingTimeAvailability} = require(`../functions/smallFunctions`);

/*
INTENT DefaultWelcomeIntent
Display main menu with catch of the day
Event : welcome-intent 
Input Context : none
Output Context from dialogflow: defaultwelcomeintent-followup
Output Context from function: (from checkTime) orderIntakeAvailable, orderingstatus
                              (no stock or error while fetching) orderingUnavailable-followup
*/
const defaultWelcome = async (agent) =>
{
    const sessionId = agent.session.split(`/`).reverse()[0];

    console.time(`defaultWelcome ${sessionId}`);
    console.log(`Default Welcome Intent Start : ${sessionId}`);

    // context after fetching/creating customer profile
    const context = agent.context.get(`customer-details`);
    const customerId = context.parameters.customerId;
    const customerName = context.parameters.customerName;
    const isNewCustomer = context.parameters.isNewCustomer;

    let response1;
    // Boolean to display catch of the day or no
    let displayCatch = true;

    // Introductory message
    if (isNewCustomer)
    {
        response1 = `Thanks, ${customerName}. Buying fish has just got much easier and safer for you 😊`
    }
    else
    {
        response1 = `Hi, ${customerName}! 😇. \nWe're delighted to have you back !`;
    }
    // Function to display main menu
    await displayMenu(agent, sessionId, customerId, customerName, response1, displayCatch);
}
 
/*
  INTENT mainMenuFallback
  When user enters anything other than 1,2,3 after main menu
  Input Context : defaultwelcomeintent-followup
  Output Context from dialogflow : defaultwelcomeintent-followup
  Output Context from function: (from checkTime) orderIntakeAvailable
*/
const mainMenuFallback = (agent) =>
{

  const sessionId = agent.session.split(`/`).reverse()[0];
  try
  {
    console.log(`mainMenuFallback Intent Start : ${sessionId}`);
    console.time(`mainMenuFallback ${sessionId}`);

    agent.add(`*Please re-enter a valid selection from the above list*.\n\nEg. If you want to see the catch of the day and order fish, Type *1*.`);
    
    console.timeEnd(`mainMenuFallback ${sessionId}`);
    console.log(`mainMenuFallback Intent End : ${sessionId}`);
  }
  catch (e)
  {
    console.timeEnd(`mainMenuFallback ${sessionId}`);
    console.log(`mainMenuFallback Intent End : ${sessionId}`);
    console.log(`entering catch block : ${sessionId}`);
    console.log(e);
    console.log(`leaving catch block : ${sessionId}`);
  }
};


module.exports = {
  defaultWelcome,
  mainMenuFallback
};
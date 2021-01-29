const deletePreviousSession = require(`../functions/deletePreviousSession`);
const backToOrdering = require(`../functions/backToOrdering`);

/*
Intent exitConversation_without_confirmation
When user types X, exit the conversation

Input Context : None
Output Context from dialogflow: None
Output Context from function: None
*/
 async function exitConversation_without_confirmation(agent){
    const sessionId = agent.session.split(`/`).reverse()[0];
    console.log(`exitConversation_without_confirmation Intent Start : ${sessionId}`);
    console.time(`exitConversation_without_confirmation ${sessionId}`);

    const response1 = 
`Happy to serve you. We hope you get to enjoy our fresh, local, traceable and sustainable seafood soon! 

Stay safe and be well!`;
    agent.add(response1);

    // Removing context containing details of products, timing, etc
    agent.contexts.forEach(e => {
      agent.context.delete(e.name);
    });
    
    // Deleting previous session if exists of user
    await deletePreviousSession(sessionId);
  
    console.timeEnd(`exitConversation_without_confirmation ${sessionId}`);
    console.log(`exitConversation_without_confirmation Intent End : ${sessionId}`);
}

/*
Intent exitConversation
When user types X anywhere in the conversation, ask the user whether they want to exit and then exit
Else go back to order

Input Context : None
Output Context from dialogflow: 
Output Context from function: 
*/
async function exitConversation_with_confirmation(agent){
    const sessionId = agent.session.split(`/`).reverse()[0];
    console.log(`exitConversation Intent Start : ${sessionId}`);
    console.time(`exitConversation ${sessionId}`);

    const orderingstatus = agent.context.get(`orderingstatus`);
    const customerId = orderingstatus.parameters.customerId;
    const customerName = orderingstatus.parameters.customerName;

    // Asking user confirmation to exit conversation
    const confirmExit = agent.parameters.confirmExit;
    let response1;

    if(confirmExit == 'Y'){
      response1 = 
`Your order is cancelled. We hope you get to enjoy our fresh, local, traceable and sustainable food soon! 

Stay safe and be well!`;

      agent.add(response1);
      
      await deletePreviousSession(sessionId);

      // Removing context containing details of products, timing, etc
      agent.contexts.forEach(e => {
        agent.context.delete(e.name);
      });

      console.timeEnd(`exitConversation ${sessionId}`);
      console.log(`exitConversation Intent End : ${sessionId}`);
    }
    else
    {
        await backToOrdering(agent, sessionId, customerId, customerName);
    }
}


module.exports = {
    exitConversation_with_confirmation,
    exitConversation_without_confirmation
}
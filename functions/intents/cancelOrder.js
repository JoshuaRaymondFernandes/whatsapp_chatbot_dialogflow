/*
  INTENTS CancelOrder, orderingUnavailable - cancelOrder
  When user selects to talk to cancel order
  Input Context : defaultwelcomeintent-followup(contactUS), orderingUnavailable-followup(orderingUnavailable - cancelOrder)
  Output Context from dialogflow: CancelOrder-followup 
  Output Context from function: None
  */
const cancelOrder = (agent) => {
    const sessionId = agent.session.split(`/`).reverse()[0];
    console.log(`cancelOrder Intent Start : ${sessionId}`);
    console.time(`cancelOrder ${sessionId}`);

    const response = 
`Please call us with your name and order details. Our team will assist you further.

_Type *M* to go to main menu_
_Type *X* to exit conversation_`;
    agent.add(response);
    console.timeEnd(`cancelOrder ${sessionId}`);
    console.log(`cancelOrder Intent End : ${sessionId}`);
}

module.exports = cancelOrder;

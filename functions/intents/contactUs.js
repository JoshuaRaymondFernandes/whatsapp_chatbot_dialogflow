/*
  INTENTS ContactUs, orderingUnavailable - contactUs
  When user selects to talk to contact us regarding any queries
  Input Context : defaultwelcomeintent-followup(contactUS), orderingUnavailable-followup(orderingUnavailable - contactUs)
  Output Context from dialogflow: ContactUs-followup 
  Output Context from function: None
  */
 const contactUs = (agent) => {
    const sessionId = agent.session.split(`/`).reverse()[0];
    console.log(`contactUs Intent Start : ${sessionId}`);
    console.time(`contactUs ${sessionId}`);

    const response = 
`We are more than welcome to get in touch with you. We would love to resolve any queries or grievances you have.

_Type *M* to go to main menu_
_Type *X* to exit conversation_`;
    agent.add(response);
    console.timeEnd(`contactUs ${sessionId}`);
    console.log(`contactUs Intent End : ${sessionId}`);
};

module.exports = contactUs;

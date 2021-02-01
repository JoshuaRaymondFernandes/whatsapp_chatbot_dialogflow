<h1>Whatsapp Chatbot using Google Dialogflow and Google Cloud Functions</h1>

Built a Whatsapp chatbot using Google Dialogflow, Google Cloud functions. 

The bot conversation flow is built in dialogflow using Intents.The chatbot works on a request response format. Some responses are static and wont change, thus they can be hardcoded in dialogflow. But for messages that change conversation to conversation, need some computation, thus such logic is hosted on a server called "Dialogflow Fulfillment", which in this case I used Google Cloud functions.


<img src=https://github.com/JoshuaRaymondFernandes/whatsapp_chatbot_dialogflow/blob/master/Pics/architecture.png />
<b>Dialogflow Architecture</b>

The zip file named "dialogflow-agent.zip" has the dialogflow agent which has the entire structure of the conversation. The Dialogflow Fulfilment code which is hosted via cloud functions is inside functions directory. The backend is written in Nodejs.*

We need to store some data during the course of the conversation such as items selected by user, User's address, pincode, etc which we call as user session data. This data needs to be store somewhere, for this purpose I have used Google Firestore as the backend database. 

There are some constants that will be specific to the bot's usecase and environment (dev, test, prod) such as bot whatsapp number, payment details, different APIs called, login credentials, firebase credentials. This data is stored in directory "config" which has 3 different files for development, testing and production. When hosting the nodejs application, set an environment variable "NODE_ENV" to "development","testing","production" which directs the application to use which configuration in config folder.

Dialoglow and its fulfillment backend is one part of the entire flow to build a whatsapp chatbot which is not covered in this repository. We need to setup a whatsapp business api with a whatsapp client such as gupshup, twilio, etc. For this project I have used Gupshup. Gupshup needs to connect to dialogflow to send and recieve HTTP requests. For this, I used a 3rd party client "quickwork" to connect between dialogflow and gupshup.

<img src=https://github.com/JoshuaRaymondFernandes/whatsapp_chatbot_dialogflow/blob/master/Pics/Bot%20Architecture.jpg />



<br><br>
<i>* This code is copywrited and hence only placeholder code has been publicly hosted to demonstrate the bot's overall working.</i>


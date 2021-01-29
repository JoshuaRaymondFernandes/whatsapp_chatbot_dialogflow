var config = {};

// Initialize firebase config
config.firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
}

// Firebase login
config.botEmailAuth = {
    "email" : '',
    "password" : ''
}

// Links of CF
config.API_1 = "";

config.API_2 = "";

config.API_3 = "";

// Details to send payment details from bot
config.botWhatsappNumber = "1234567890";

config.whatsappApiKey = "";

config.paymentDetails = {
    "upiPaymentImage" : "https://www.buildquickbots.com/whatsapp/media/sample/jpg/sample01.jpg",
    "bankDetails" : bankDetails
}
module.exports = config;
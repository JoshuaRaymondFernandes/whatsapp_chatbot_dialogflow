//static data to don't have to generate the conf_adata 2 times
let config_data = null

const config = () => {

    // console.log(`From config file ${info}`);

    // if the static data was already set. return it
    if(config_data != null) {
        console.log(`CONFIG DATA ALREADY PRESENT`);
        return config_data
    }
    console.log(`Fetching Config Data`);
    config_data = {}
    //LOAD JSON
    //process.env.NODE_ENV === undefined || process.env.NODE_ENV == null || process.env.NODE_ENV == 'development'
    if(process.env.NODE_ENV === undefined || process.env.NODE_ENV == null || process.env.NODE_ENV == 'development') {
        console.log(`Loading Development Environment Configuration`); 
        config_data = require('./config/development.js');
    } 
    else if(process.env.NODE_ENV == 'testing')
    {
        console.log(`Loading Testing Environment Configuration`); 
        config_data = require('./config/testing.js');
    }
    else{
        console.log(`Loading Production Environment Configuration`); 
        config_data = require('./config/production.js');
    }

    return config_data
}

module.exports = config;
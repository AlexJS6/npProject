//const flight = require('../models/flight');

const axios = require('axios');

let country  = US;//req.body.country;
let currency = USD;//req.body.currency;
let locale = en-US;//req.body.locale;
let depart = SFO-sky;//req.body.origin;
let destination = JFK-sky;//req.body.destination;
let outbound_date = 2019-09-01;//req.body.outbound_date;
let inbound_date = 2019-12-01;//req.body.inbound_date;

//https://medium.com/rakuten-rapidapi/skyscanner-api-tutorial-on-rakuten-rapidapi-5b89acb8be1




var options = {
  method: 'GET',
  url: `https://rapidapi.p.rapidapi.com/apiservices/browsequotes/v1.0/${country}/${currency}/${locale}/${depart}/${destination}/${outbound_date}`,
  params: {inboundpartialdate: `${inbound_date}`},
  headers: {
    'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
    'x-rapidapi-key': '089d02225bmshefa31c6ca5f2456p154c11jsnebd679e760b4'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

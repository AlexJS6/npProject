const axios = require('axios');
//https://blog.api.rakuten.net/skyscanner-api-tutorial/


let country  = req.body.country;
let currency = req.body.currency;
let locale = req.body.locale;
let depart = req.body.origin;
let destination = req.body.destination;
let partial_date = req.body.date;


var options = {
  method: 'GET',
  url: `https://rapidapi.p.rapidapi.com/apiservices/browsequotes/v1.0/${country}/${currency}/${locale}/${depart}/${destination}/${partial_date}`,
  params: {inboundpartialdate: '2019-12-01'},
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

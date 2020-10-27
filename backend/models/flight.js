const axios = require('axios');
//https://medium.com/rakuten-rapidapi/skyscanner-api-tutorial-on-rakuten-rapidapi-5b89acb8be1
// Will do it in another way: https://www.youtube.com/watch?v=ZtLVbJk7KcM&t=730s&ab_channel=TheCodingTrain



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

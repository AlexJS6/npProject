const axios = require('axios');


const BASE_URL = `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com`
module.exports = {
    getCompatibility: (place, currency, locale, origin, destination, partial_date) => axios({
        method:"GET",
        url : BASE_URL + `/zodiac_compatibility/result`,
        headers: {
            "content-type":"application/x-www-form-urlencoded",
            "x-rapidapi-host":"astrology-horoscope.p.rapidapi.com",
            "x-rapidapi-key": "yourapikey"
        },
        params: {
            mystic_dob: yourBirthday,
            mystic_dob2: theirBirthday,
            mystic_name: yourName,
            mystic_name2: theirName
        }
    })
}
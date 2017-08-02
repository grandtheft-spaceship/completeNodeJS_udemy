const request = require('request')

var getWeather = (lat, lng, callback) => {
  request({
    url: `https://api.darksky.net/forecast/9cca6cf3019502dcb187dedc3509bdfc/${lat},${lng}`,
    json: true
  },
  (error, response, body) => {
    if (!error && response.statusCode === 200) {
      console.log(body.currently.temperature);
      // console.log('SUCCESSFUL REQUEST')
    } else {
      console.log('Unable to fetch weather data...');
    }
  })
}

module.exports.getWeather = getWeather;

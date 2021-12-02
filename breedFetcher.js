const request = require('request');
const breedArg = process.argv.slice(2);

request(`https://api.thecatapi.com/v1/breeds/search?q=${breedArg}`, function(error, response, body) {
  if (!error) {
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    const data = JSON.parse(body);
    if (!data[0]) {
      return console.log('Breed not found!');
    }
    console.log('Description:', data[0].description);
    // console.log('typeof body: ', typeof data);
  } else {
    console.error('error:', error); // Print the error if one occurred
  }
});
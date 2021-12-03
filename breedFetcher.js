const request = require('request');

// breedName is being brought in from index.js command line arguments
const fetchBreedDescription = function(breedName, callback) {
  // requests API with arguments, callback function consisting of... other shit??
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, function(error, response, body) {
    if (!error) {
      // if no error, parse the returned body (returns an object)
      const data = JSON.parse(body);
      // checks if there's anything returned inside the object
      if (!data[0]) {
        // if not, run the callback returning a string for the error message and null for the description
        callback('Breed not found!', null);
        return;
      }
      // otherwise return no error, and returns the description key from the data[0] element of the object
      callback(null, data[0].description);
    } else {
      // if all else fails, chuck an error at it and return no body
      callback(error, null);
    }
  });
};

module.exports = {
  fetchBreedDescription,
};
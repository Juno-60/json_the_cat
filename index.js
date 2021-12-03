const { fetchBreedDescription } = require('./breedFetcher');
// takes in argument from command line
const breedName = process.argv[2];

// command line argument + callback function in breedFetcher.js
fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});
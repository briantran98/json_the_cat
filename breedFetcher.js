const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (err, response, body) => {
    if (err) {
      callback(err);
    }
    const data = JSON.parse(body);
    
    if (data[0]) {
      callback(null, data[0].description);
    } else {
      callback(err);
    }
  });
}

module.exports = fetchBreedDescription;
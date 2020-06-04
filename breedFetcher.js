const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (err, response, body) => {
    if (err) {
      let error = "No breed found or no breed entered";
      callback(error, null);
    }

    const data = JSON.parse(body);
    if (data[0]) {
      callback(null, data[0].description);
    } else {
      let error = "No breed found or no breed entered";
      callback(error, null);
    }
  });
};

module.exports = { fetchBreedDescription };
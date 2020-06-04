const request = require('request');
const arg = process.argv.slice(2);

const breedFetch = (breed) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (err, response, body) => {
    if (err) {
      throw `Error looking for breed: ${err}`;
    }
    const data = JSON.parse(body);

    if (data[0]) {
      console.log(data[0].description);
    } else {
      throw `Error no breed inputted: ${err}\nPlease input a breed to fetch.`;
    }
  });
};

breedFetch(arg[0]);

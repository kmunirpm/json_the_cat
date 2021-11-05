const request = require('request')
const https = require('https')
const arg = process.argv.slice(2)



const fetchBreedDescription = name => {
  request('https://api.thecatapi.com/v1/breeds/search?q=' + name, (error, response, body) => {
    if (error) {
      console.log('error:', error); // Print the error if one occurred
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      console.error(error)
      return
    }
    //console.log('body:', body); // Print the HTML for the Google homepage.
    console.log(typeof body)
    //const data = JSON.parse(body);
    console.log(body);
    //console.log(data);
    console.log(typeof body);
    });
  };
fetchBreedDescription(arg[0])

console.log('I should run 1st.')

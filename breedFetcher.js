const request = require('request')
const https = require('https')
const arg = process.argv.slice(2)



const data = request('https://api.thecatapi.com/v1/breeds/search?q=' + arg[0], (error, response, body) => {
    if (error) {
      console.log('error:', error); // Print the error if one occurred
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      console.error(error)
      return
    }
  console.log('body:', body); // Print the HTML for the Google homepage.
  console.log(typeof body)
  const data = JSON.parse(body);
  console.log(data);
  console.log(typeof data);
});

console.log('I should run 1st.')







// const req = https.request(options, res => {
//   console.log(`statusCode: ${res.statusCode}`)

//   res.on('data', d => {
//     process.stdout.write(d)
//   })
// })

// req.on('error', error => {
//   console.error(error)
// })

// req.end()
// console.log(typeof body)
// const data = JSON.parse(body);
// console.log(data);
// console.log(typeof data);





// const https = require('https')

// const data = new TextEncoder().encode(
//   JSON.stringify({
//     todo: 'Buy the milk 🍼'
//   })
// )

// const options = {
//   hostname: 'whatever.com',
//   port: 443,
//   path: '/todos',
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//     'Content-Length': data.length
//   }
// }

// const req = https.request(options, res => {
//   console.log(`statusCode: ${res.statusCode}`)

//   res.on('data', d => {
//     process.stdout.write(d)
//   })
// })

// req.on('error', error => {
//   console.error(error)
// })

// req.write(data)
// req.end()

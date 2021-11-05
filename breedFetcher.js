const request = require('request');
let commandArguments = process.argv.splice(2);

request(`https://api.thecatapi.com/v1/breeds/search?q=${commandArguments}`, function(error, response, body) {
  if (error) {
    console.log('Request failed');
    return; // Print the error if one occurred
  }
  
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log(typeof body);
  
  //console.log('body:', body); // Print the HTML for the Google homepage.
  
  const data = JSON.parse(body);
  console.log(data);
  console.log(typeof data);
  
  for (let item of data) {
    console.log(item["description"]);
  }

  if (!data.length) {
    console.log("Breed not found");
  }

});



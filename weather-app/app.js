// const yargs = require('yargs');
// const geocode = require('./geocode/geocode');
// const argv = yargs
//             .options({
//               a: {
//                 demand: true,
//                 alias: 'address',
//                 describe: 'Address to fetch weather for',
//                 string: true
//               }
//             })
//             .help()
//             .alias('help', 'h')
//             .argv;

// geocode.geocodeAddress(argv.address, (errorMessage, results) => {
//   if(errorMessage){
//     console.log(errorMessage);
//   }else {
//     console.log(JSON.stringify(results, undefined, 2));
//   }
// });

//5de1cbb10a93c1ac055d9b65d4f98a14
//https://api.darksky.net/forecast/5de1cbb10a93c1ac055d9b65d4f98a14/37.8267,-122.4233
const request = require('request');

request({
  url: 'https://api.darksky.net/forecast/5de1cbb10a93c1ac055d9b65d4f98a14/37.8267,-122.4233',
  json: true
},(error,response, body) => {
  console.log(body.currently.temperature);
})
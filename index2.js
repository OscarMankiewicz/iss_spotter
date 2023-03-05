//const { fetchISSFlyOverTimes } = require('./iss_promised')
//const { fetchCoordsByIp } = require('./iss_promised')
//const { fetchMyIP } = require('./iss_promised')
const {nextISSTimesForMyLocation, printPassTimes} = require('./iss_promised')

nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
});

;

//fetchMyIP()
    //.then(fetchCoordsByIp)
    //.then(fetchISSFlyOverTimes)
    //.then(body => console.log(body))

    

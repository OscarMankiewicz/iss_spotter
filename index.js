const {nextISSTimesForMyLocation} = require('./iss')

const printPassTimes = function(passTimes) {
    for (const pass of passTimes) {
      const datetime = new Date(0);
      datetime.setUTCSeconds(pass.risetime);
      const duration = pass.duration;
      console.log(`Next pass at ${datetime} for ${duration} seconds!`);
    }
  };



nextISSTimesForMyLocation((error, passTimes) => {
    if (error) {
        return console.log("Did not work", error)
    }

    printPassTimes(passTimes)
})




/*
const { fetchISSFlyOverTimes } = require('./iss');

const exampleCoords = { latitude: '49.27670', longitude: '-123.13000' };

fetchISSFlyOverTimes(exampleCoords, (error, passTimes) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned flyover times:' , passTimes);
});
*/



/*
const {fetchCoordsByIp} = require('./iss')

fetchCoordsByIp('50.101.84.197', (error, coords) => {
    if (error) {
        console.log("Did not work", error)
        return
    }

    console.log("It worked! Returned coords:", coords)
})
*/



/*
const { fetchMyIP } = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned IP:' , ip);
});
*/
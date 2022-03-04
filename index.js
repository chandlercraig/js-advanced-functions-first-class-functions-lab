// Code your solution in this file!
  const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2)
  };

  const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2)
  };

  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

  function createFareMultiplier(num) {
    return function(fare) {
      return fare * num
    }
  };

  function fareDoubler(fare) {
    const fareMult = createFareMultiplier(2)
    return fareMult(fare)
  };

  function fareTripler(fare) {
    const fareMult = createFareMultiplier(3)
    return fareMult(fare)
  };

  function selectDifferentDrivers(arrayOfDrivers, retDrivFunc) {
    return retDrivFunc(arrayOfDrivers)
  } 
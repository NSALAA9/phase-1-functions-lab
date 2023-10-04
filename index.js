// Code your solution in this file!
// helpers.js

// Calculate the distance in blocks from the provided location to the headquarters (location 42)
function distanceFromHqInBlocks(location) {
    return Math.abs(location - 42);
  }
  
  // Calculate the distance in feet from the provided location to the headquarters (location 42)
  function distanceFromHqInFeet(location) {
    const blocks = distanceFromHqInBlocks(location);
    return blocks * 264; // 1 block = 264 feet
  }
  
  // Calculate the distance in feet between two locations
  function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * 264; // 1 block = 264 feet
  }
  
  // Calculate the fare price based on the total distance travelled in feet
  function calculatesFarePrice(start, destination) {
    const distanceInFeet = distanceTravelledInFeet(start, destination);
    
    if (distanceInFeet <= 400) {
      return 0; // Free sample
    } else if (distanceInFeet <= 2000) {
      // 2 cents per foot after the first 400 feet (400 feet are free)
      return (distanceInFeet - 400) * 0.02;
    } else if (distanceInFeet <= 2500) {
      return 25; // Flat rate for distances over 2000 feet
    } else {
      return 'cannot travel that far'; // Cannot travel more than 2500 feet
    }
  }
  
  module.exports = {
    distanceFromHqInBlocks,
    distanceFromHqInFeet,
    distanceTravelledInFeet,
    calculatesFarePrice,
  };
  
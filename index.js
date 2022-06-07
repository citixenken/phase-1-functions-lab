// Code your solution in this file!

//1. Distance from HQ in blocks
function distanceFromHqInBlocks(pickUpStreet) {
  const hqStreet = 42;
  return Math.abs(pickUpStreet - hqStreet);
}

//2. Distance from HQ in feet
function distanceFromHqInFeet(pickUpStreet) {
  const blockLengthInFeet = 264;
  return distanceFromHqInBlocks(pickUpStreet) * blockLengthInFeet;
}

//3. Distance travelled in feet
function distanceTravelledInFeet(start, end) {
  const blockLengthInFeet = 264;
  return Math.abs(start - end) * blockLengthInFeet;
}

//4. Calculating fare price
function calculatesFarePrice(start, end) {
  //   const blockLengthInFeet = 264;
  //   let distance = Math.abs(start - end) * blockLengthInFeet;

  const distance = distanceTravelledInFeet(start, end);

  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02;
  } else if (distance > 2000 && distance <= 2500) {
    return 25.0;
  } else {
    return "cannot travel that far";
  }

  //   switch (distance) {
  //     case distance < 400:
  //       return 0;
  //     case distance > 400 && distance <= 2000:
  //       return (distance - 400) * 0.02;
  //     case distance > 2000 && distance <= 2500:
  //       return 25.0;
  //     default:
  //       return "cannot travel that far";
  //   }
}

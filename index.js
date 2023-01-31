// Code your solution in this file!
function distanceFromHqInBlocks(block) {
  if (block >= 42) {
    return block % 42;
  } else if (block < 42){
    return 42 % block;
  }
}

function distanceFromHqInFeet(block) {
    if (block >= 42) {
        return (block % 42) * 264;
      } else if (block < 42){
        return (42 % block) * 264;
      }
}

function distanceTravelledInFeet(start, end) {
    let dif = end - start;
    if (dif >= 0) {
        return dif * 264;
      } else if (dif < 0){
        return (dif) * -264;
      }
}

function calculatesFarePrice(start, end){
let dif = distanceTravelledInFeet(start, end);
if (dif >= 0 && dif <= 400) {
    return 0;
} else if (dif > 400 && dif <= 2000){
 return (dif-400) * 0.02;
} else if (dif > 2000 && dif <= 2500){
 return 25;
} else{
    return 'cannot travel that far';
}
}
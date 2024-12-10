// return the mood of number in an array
// The mood of an array refers to the number that appears
// most frequently
function returnMoodOfNum(array) {
  let frequent = {};
  let maxFre = 0;
  let mood = [];
  // first count the frequency of each number
  for (let num of array) {
    frequent[num] = (frequent[num] || 0) + 1;
    if (frequent[num] > maxFre) {
      maxFre = frequent[num];
    }
  }
  // find all numbers with the maximum frequency
  for (let key in frequent) {
    if (frequent[key] === maxFre) {
      mood.push(Number(key));
    }
  }
  return mood;
}

console.log(returnMoodOfNum([2, 3, 4, 5, 2, 3, 4, 5, 2, 3, 4]));

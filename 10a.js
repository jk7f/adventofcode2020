// in devtools at https://adventofcode.com/2020/day/10/input

let jolts = document
  .querySelector('pre')
  .innerText.split('\n')
  .filter((n) => n)
  .map((n) => Number(n))
  .sort((a, b) => a - b);

// let jolts = `28
// 33
// 18
// 42
// 31
// 14
// 46
// 20
// 48
// 47
// 24
// 23
// 49
// 45
// 19
// 38
// 39
// 11
// 1
// 32
// 25
// 35
// 8
// 17
// 7
// 9
// 4
// 2
// 34
// 10
// 3`.split('\n').filter(n => n).map(n => Number(n)).sort((a, b) => a- b)

let stepsOf1 = 0;
let stepsOf3 = 0;

const step = (currentJoltage = 0) => {
  const closestIndex = jolts.findIndex((jolt) => jolt <= currentJoltage + 3);
  if (jolts[closestIndex] - currentJoltage === 1) {
    stepsOf1 += 1;
  } else if (jolts[closestIndex] - currentJoltage === 3) {
    stepsOf3 += 1;
  } else {
    console.log('this should not happen');
    console.log(jolts);
    console.log(jolts[closestIndex], currentJoltage);
  }
  currentJoltage = jolts[closestIndex];
  jolts = [...jolts.slice(0, closestIndex), ...jolts.slice(closestIndex + 1)];
  if (jolts.length) {
    step(currentJoltage);
  } else {
    stepsOf3 += 1;
  }
};
step();
console.log(stepsOf1);
console.log(stepsOf3);
console.log(stepsOf1 * stepsOf3);

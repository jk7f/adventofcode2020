// in devtools at https://adventofcode.com/2020/day/9/input

const numbers = document
  .querySelector('pre')
  .innerText.split('\n')
  .filter((i) => i)
  .map((i) => Number(i));

// const numbers = `35
// 20
// 15
// 25
// 47
// 40
// 62
// 55
// 65
// 95
// 102
// 117
// 150
// 182
// 127
// 219
// 299
// 277
// 309
// 576`
//   .split('\n')
//   .filter((i) => i)
//   .map((i) => Number(i));

const START = 25;
// const START = 5;

const step = (index) => {
  let valid = false;
  for (let i = index - START; i < index; i++) {
    for (let i2 = index - START; i2 < index; i2++) {
      if (i !== i2) {
        if (numbers[i] + numbers[i2] === numbers[index]) {
          valid = true;
        }
      }
    }
  }

  if (valid) {
    return step(index + 1);
  } else {
    return index;
  }
};

const findRange = (targetIndex) => {
  const target = numbers[targetIndex];
  let startIndex = 0;
  let sum = 0;
  const sumArr = [];

  while (startIndex < targetIndex) {
    for (let index = startIndex; index < targetIndex; index++) {
      sum += numbers[index];
      sumArr.push(numbers[index]);

      if (sum === target) {
        startIndex = Infinity;
        break;
      } else if (sum > target) {
        sumArr.length = 0;
        sum = 0;
        startIndex += 1;
        break;
      }
    }
  }
  sumArr.sort();
  console.log(sumArr[0] + sumArr.pop());
};

findRange(step(START));

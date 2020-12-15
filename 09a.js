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

const step = (index) => {
  let valid = false;
  for (let i = index - START; i < index; i++) {
    for (let i2 = index - START; i2 < index; i2++) {
      if (i !== i2) {
        // console.log(numbers[index], numbers[i] + numbers[i2]);
        if (numbers[i] + numbers[i2] === numbers[index]) {
          valid = true;
        }
      }
    }
  }

  if (valid) {
    step(index + 1);
  } else {
    console.log(numbers[index]);
  }
};
step(START);

// in devtools at https://adventofcode.com/2020/day/6/input

console.log(
  document
    .querySelector('pre')
    .innerText.split('\n\n')
    .map((item) => item.split('\n').join(''))
    .reduce((a, c) => {
      return a + [...new Set(c.split(''))].length;
    }, 0)
);

// in devtools at https://adventofcode.com/2020/day/2/input

const items = document.querySelector('pre').innerText.split('\n');
// const items = ['1-3 a: abcde', '1-3 b: cdefg', '2-9 c: ccccccccc'];

let matches = 0;
items.forEach((item) => {
  if (!item) {
    return;
  }
  const range = item.split(' ')[0].split('-');
  const letter = item[item.indexOf(':') - 1];
  const letters = item.split(':')[1].trim();
  if (
    (letters[parseInt(range[0], 10) - 1] === letter &&
      letters[parseInt(range[1], 10) - 1] !== letter) ||
    (letters[parseInt(range[0], 10) - 1] !== letter &&
      letters[parseInt(range[1], 10) - 1] === letter)
  ) {
    matches++;
  }
});
console.log(matches);

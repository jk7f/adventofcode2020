// in devtools at https://adventofcode.com/2020/day/2/input

const items = document.querySelector('pre').innerText.split('\n');

let matches = 0;
items.forEach((item) => {
  if (!item) {
    return;
  }
  const range = item.split(' ')[0].split('-');
  const letter = item[item.indexOf(':') - 1];
  const letters = item.split(':')[1].trim();
  const letterCount = [...letters].filter((letterItem) => letterItem === letter)
    .length;
  if (
    letterCount >= parseInt(range[0], 10) &&
    letterCount <= parseInt(range[1], 10)
  ) {
    matches++;
  }
});
console.log(matches);

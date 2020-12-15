// in devtools from https://adventofcode.com/2020/day/1/input

const items = document
  .querySelector('pre')
  .innerText.split('\n')
  .map((item) => parseInt(item, 10));

items.forEach((item, index) => {
  items.forEach((itemCheck, itemCheckIndex) => {
    if (index !== itemCheckIndex) {
      if (item + itemCheck === 2020) {
        console.log(item * itemCheck);
      }
    }
  });
});

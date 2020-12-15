// in devtools from https://adventofcode.com/2020/day/1/input

const items = document
  .querySelector('pre')
  .innerText.split('\n')
  .map((item) => parseInt(item, 10));

const findMatch = (input, indexes, match = 2020) => {
  let result = null;
  items.forEach((item, index) => {
    if (!indexes.includes(index)) {
      if (input + item === match) {
        result = item;
      }
    }
  });
  return result;
};

items.forEach((item, index) => {
  items.forEach((itemCheck, itemCheckIndex) => {
    if (index !== itemCheckIndex) {
      const match = findMatch(item + itemCheck, [index, itemCheckIndex]);
      if (match) {
        console.log(match * item * itemCheck);
      }
    }
  });
});

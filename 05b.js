// in devtools at https://adventofcode.com/2020/day/5/input

const items = document.querySelector('pre').innerText.split('\n');

const step = (letters, lower, upper) => {
  if (!letters) {
    return lower;
  }
  const half = (upper - lower) / 2;
  if (letters[0] === 'B' || letters[0] === 'R') {
    // upper
    return step(letters.slice(1), Math.ceil(lower + half), upper);
  } else {
    // lower
    return step(letters.slice(1), lower, Math.floor(lower + half));
  }
};

const ids = [];
items.forEach((item) => {
  const result = step(item.slice(0, 7), 0, 127) * 8 + step(item.slice(7), 0, 7);
  ids.push(result);
});
ids.sort((a, b) => a - b);
console.log(ids);
ids.forEach((id, index) => {
  if (ids[index + 1] !== id + 1) {
    console.log(id + 1);
  }
});

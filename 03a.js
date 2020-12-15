// in devtools at https://adventofcode.com/2020/day/3/input

const items = document
  .querySelector('pre')
  .innerText.split('\n')
  .filter((n) => n);

const map = items.map((item) => {
  const result = [];
  for (let index = 0; index < items.length / item.length + 1000; index++) {
    result.push(...item);
  }
  return result;
});

const step = (x = 0, y = 0) => {
  if (y < map.length) {
    const tile = map[y][x];
    if (tile === '.') {
      map[y][x] = 'O';
    } else if (tile === '#') {
      map[y][x] = 'X';
    }
    step(x + 3, y + 1);
  } else {
    let count = 0;
    [...JSON.stringify(map)].forEach((char) => {
      if (char === 'X') {
        count++;
      }
    });
    console.log(count);
  }
};

step();

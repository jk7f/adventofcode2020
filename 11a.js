// in devtools at https://adventofcode.com/2020/day/11/input

// let grid = `L.LL.LL.LL
// LLLLLLL.LL
// L.L.L..L..
// LLLL.LL.LL
// L.LL.LL.LL
// L.LLLLL.LL
// ..L.L.....
// LLLLLLLLLL
// L.LLLLLL.L
// L.LLLLL.LL`
// .split('\n')
// .filter((n) => n)
// .map((item) => item.split(''));

let grid = document
  .querySelector('pre')
  .innerText.split('\n')
  .filter((n) => n)
  .map((item) => item.split(''));

const TYPES = {
  EMPTY: 'L',
  FULL: '#',
  FLOOR: '.',
};

const checkSeatsAround = (y, x, type) => {
  let count = 0;
  //top
  if (y > 0 && grid[y - 1][x] === type) {
    count += 1;
  }
  //bottom
  if (y < grid.length - 1 && grid[y + 1][x] === type) {
    count += 1;
  }
  //left
  if (x > 0 && grid[y][x - 1] === type) {
    count += 1;
  }
  //right
  if (x < grid[y].length - 1 && grid[y][x + 1] === type) {
    count += 1;
  }

  // bottom right
  if (
    x < grid[y].length - 1 &&
    y < grid.length - 1 &&
    grid[y + 1][x + 1] === type
  ) {
    count += 1;
  }
  // bottom left
  if (x > 0 && y < grid.length - 1 && grid[y + 1][x - 1] === type) {
    count += 1;
  }
  // top right
  if (x < grid[y].length - 1 && y > 0 && grid[y - 1][x + 1] === type) {
    count += 1;
  }
  // top left
  if (x > 0 && y > 0 && grid[y - 1][x - 1] === type) {
    count += 1;
  }

  return count;
};

const update = () => {
  const newGrid = JSON.parse(JSON.stringify(grid));

  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      const seat = grid[y][x];

      // take seat
      if (seat === TYPES.EMPTY) {
        if (!checkSeatsAround(y, x, TYPES.FULL)) {
          newGrid[y][x] = TYPES.FULL;
        }
      }

      // leave seat
      if (seat === TYPES.FULL) {
        if (checkSeatsAround(y, x, TYPES.FULL) >= 4) {
          newGrid[y][x] = TYPES.EMPTY;
        }
      }
    }
  }
  grid = newGrid;
};

let lastGrid;
let cont = true;
while (cont) {
  update();
  if (JSON.stringify(grid) !== lastGrid) {
    lastGrid = JSON.stringify(grid);
  } else {
    cont = false;
  }
}

console.table(grid);
console.log(grid.flat().filter((i) => i === TYPES.FULL).length);

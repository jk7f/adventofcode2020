// in devtools at https://adventofcode.com/2020/day/3/input

const items = document
  .querySelector('pre')
  .innerText.split('\n')
  .filter((n) => n);

// const items = [
//   '..##.......',
//   '#...#...#..',
//   '.#....#..#.',
//   '..#.#...#.#',
//   '.#...##..#.',
//   '..#.##.....',
//   '.#.#.#....#',
//   '.#........#',
//   '#.##...#...',
//   '#...##....#',
//   '.#..#...#.#',
// ];

const step = (stepX, stepY, x = 0, y = 0, trees = 0) => {
  if (y < items.length) {
    const row = items[y];
    const tile = row[x % row.length];
    if (tile === '#') {
      trees++;
    }
    return step(stepX, stepY, x + stepX, y + stepY, trees);
  } else {
    return trees;
  }
};

const jobs = [step(1, 1), step(3, 1), step(5, 1), step(7, 1), step(1, 2)];
console.log(jobs);
console.log(jobs.reduce((a, c) => a * c));

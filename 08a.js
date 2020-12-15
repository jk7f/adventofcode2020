// in devtools at https://adventofcode.com/2020/day/8/input

const lines = document
  .querySelector('pre')
  .innerText.split('\n')
  .filter((i) => i);
const linesVisited = [];

const step = (to, acc = 0) => {
  if (!linesVisited.includes(to)) {
    linesVisited.push(to);
    const line = lines[to];
    const [instruction, value] = line.split(' ');
    switch (instruction) {
      case 'nop':
        step(to + 1, acc);
        break;
      case 'acc':
        step(to + 1, acc + Number(value));
        break;
      case 'jmp':
        step(to + Number(value), acc);
        break;
      default:
        console.error('this should not happen');
        break;
    }
  } else {
    console.log('end reached:');
    console.log(acc);
  }
};

step(0);

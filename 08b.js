// in devtools at https://adventofcode.com/2020/day/8/input

const lines = document
  .querySelector('pre')
  .innerText.split('\n')
  .filter((i) => i);

// const lines = `nop +0
// acc +1
// jmp +4
// acc +3
// jmp -3
// acc -99
// acc +1
// jmp -4
// acc +6`
//   .split('\n')
//   .filter((i) => i);

const linesVisited = [];
let valid = false;

const step = (lineArr, to, acc = 0) => {
  if (!linesVisited.includes(to)) {
    if (to === lines.length) {
      valid = true;
      console.log('end reached');
      console.log(acc);
      return;
    }
    linesVisited.push(to);
    const line = lineArr[to];
    const [instruction, value] = line.split(' ');
    switch (instruction) {
      case 'nop':
        step(lineArr, to + 1, acc);
        break;
      case 'acc':
        step(lineArr, to + 1, acc + Number(value));
        break;
      case 'jmp':
        step(lineArr, to + Number(value), acc);
        break;
      default:
        console.error('this should not happen');
        break;
    }
  } else {
    // console.log('loop');
    // console.log(to, acc);
  }
};

let lineCount = 0;
while (!valid && lineCount < lines.length - 1) {
  console.log('try ' + lineCount);
  linesVisited.length = 0;
  const lineArr = [...lines];
  if (lines[lineCount].includes('nop')) {
    lineArr[lineCount] = lineArr[lineCount].replace('nop', 'jmp');
  } else if (lines[lineCount].includes('jmp')) {
    lineArr[lineCount] = lineArr[lineCount].replace('jmp', 'nop');
  }
  lineCount++;
  step(lineArr, 0);
}

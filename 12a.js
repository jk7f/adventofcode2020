// in devtools at https://adventofcode.com/2020/day/12/input

// let instructions = `F10
// N3
// F7
// R90
// F11`.split('\n');

let instructions = document.querySelector('pre').innerText.split('\n');

const state = {
  x: 0,
  y: 0,
  dir: 'E',
};

function rotate(deg) {
  const dirs = ['N', 'E', 'S', 'W'];
  const current = dirs.indexOf(state.dir);
  const advanceBy = deg / 90;
  state.dir = dirs[(current + advanceBy) % dirs.length];
  console.log(state.dir);
}

function move(inst) {
  if (!inst) {
    return;
  }
  const letter = inst[0];
  const amount = Number(inst.slice(1));

  switch (letter) {
    case 'N':
      state.y += amount;
      break;
    case 'E':
      state.x += amount;

      break;
    case 'S':
      state.y -= amount;

      break;
    case 'W':
      state.x -= amount;

      break;
    case 'F':
      move(state.dir + amount);
      break;
    case 'L':
      rotate(360 - amount);
      break;
    case 'R':
      rotate(amount);
      break;

    default:
      break;
  }
}

instructions.forEach((inst) => {
  move(inst);
});

console.log(state);
console.log(Math.abs(state.y) + Math.abs(state.x));

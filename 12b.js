// in devtools at https://adventofcode.com/2020/day/12/input

// let instructions = `F10
// N3
// F7
// R90
// F11`.split('\n');

let instructions = document.querySelector('pre').innerText.split('\n');

const shipState = {
  x: 0,
  y: 0,
};

const wayPointState = {
  x: 10,
  y: 1,
};

function rotate(deg) {
  const stateCopy = { ...wayPointState };
  switch (deg) {
    case 90:
      wayPointState.x = stateCopy.y;
      wayPointState.y = -stateCopy.x;
      break;
    case 180:
      rotate(90);
      rotate(90);
      break;
    case 270:
      rotate(90);
      rotate(90);
      rotate(90);
      break;
  }
}

function move(inst) {
  console.log(wayPointState, shipState);
  if (!inst) {
    return;
  }
  const letter = inst[0];
  const amount = Number(inst.slice(1));

  switch (letter) {
    case 'N':
      wayPointState.y += amount;
      break;
    case 'E':
      wayPointState.x += amount;
      break;
    case 'S':
      wayPointState.y -= amount;
      break;
    case 'W':
      wayPointState.x -= amount;
      break;
    case 'F':
      for (let index = 0; index < amount; index++) {
        shipState.x += wayPointState.x;
        shipState.y += wayPointState.y;
      }
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

console.log(shipState);
console.log(Math.abs(shipState.y) + Math.abs(shipState.x));

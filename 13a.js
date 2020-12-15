// in devtools at https://adventofcode.com/2020/day/13/input

let [timestamp, buses] = document.querySelector('pre').innerText.split('\n');
// let [timestamp, buses] = `939
// 7,13,x,x,59,x,31,19`.split('\n');

let schedule = {};
timestamp = Number(timestamp);
buses
  .split(',')
  .filter((b) => b !== 'x')
  .forEach((b) => {
    schedule[b] = [0];
    const time = Number(b);
    while (schedule[b][schedule[b].length - 1] < timestamp) {
      schedule[b].push(schedule[b][schedule[b].length - 1] + time);
    }
  });

console.log(schedule);
let closest = Object.keys(schedule).reduce(
  (a, c) => {
    let currentSchedule = schedule[c];
    currentSchedule.forEach((sched) => {
      let difference = sched - timestamp;
      if (difference > 0 && difference < a[1]) {
        a = [c, difference];
      }
    });
    return a;
  },
  [null, Infinity]
);
console.log(Number(closest[0] * closest[1]));

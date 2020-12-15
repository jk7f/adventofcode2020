// in devtools at https://adventofcode.com/2020/day/6/input

console.log(
  document
    .querySelector('pre')
    .innerText.split('\n\n')
    .map((item) => item.trim().split('\n'))
    .reduce((a, c) => {
      const letters = [...'abcdefghijklmnopqrstuvwxyz'];
      let count = 0;
      letters.forEach((letter) => {
        let match = true;
        c.forEach((item) => {
          if (!item.includes(letter)) {
            match = false;
          }
        });
        if (match) {
          count++;
        }
      });
      return a + count;
    }, 0)
);

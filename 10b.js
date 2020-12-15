// in devtools at https://adventofcode.com/2020/day/10/input

let jolts = document
  .querySelector('pre')
  .innerText.split('\n')
  .filter((n) => n)
  .map((n) => Number(n))
  .sort((a, b) => a - b);

// let jolts = `28
// 33
// 18
// 42
// 31
// 14
// 46
// 20
// 48
// 47
// 24
// 23
// 49
// 45
// 19
// 38
// 39
// 11
// 1
// 32
// 25
// 35
// 8
// 17
// 7
// 9
// 4
// 2
// 34
// 10
// 3`.split('\n').filter(n => n).map(n => Number(n)).sort((a, b) => a - b)

console.log(
  jolts
    .reduce(
      (a, c) => {
        let total = 0;
        [1, 2, 3].forEach((index) => {
          total += a[c - index] || 0;
        });
        a[c] = total;
        return a;
      },
      [1]
    )
    .pop()
);

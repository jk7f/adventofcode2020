// in devtools at https://adventofcode.com/2020/day/4/input

console.log(
  document
    .querySelector('pre')
    .innerText.split('\n\n')
    .map((item) => item.replaceAll('\n', ' ').split(' '))
    .map((item) => {
      const obj = {};
      item.forEach((part) => {
        const parts = part.split(':');
        obj[parts[0]] = parts[1];
      });
      return obj;
    })
    .reduce((a, c) => {
      if (c.byr && c.iyr && c.eyr && c.hgt && c.hcl && c.ecl && c.pid) a++;
      return a;
    }, 0)
);

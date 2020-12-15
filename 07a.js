// in devtools at https://adventofcode.com/2020/day/7/input

const items = document
  .querySelector('pre')
  .innerText.split('\n')
  .filter((item) => item);

// const items = `light red bags contain 1 bright white bag, 2 muted yellow bags.
// dark orange bags contain 3 bright white bags, 4 muted yellow bags.
// bright white bags contain 1 shiny gold bag.
// muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.
// shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.
// dark olive bags contain 3 faded blue bags, 4 dotted black bags.
// vibrant plum bags contain 5 faded blue bags, 6 dotted black bags.
// faded blue bags contain no other bags.
// dotted black bags contain no other bags.`
//   .split('\n')
//   .filter((item) => item);

const rules = {};
items.forEach((item) => {
  const container = item.split('bags contain')[0].trim();
  const contents = item
    .split('bags contain')[1]
    .replace('.', '')
    .trim()
    .split(',')
    .map((contentItem) =>
      contentItem
        .replace(/[\d]/, '')
        .replace('bags', '')
        .replace('bag', '')
        .trim()
    );
  rules[container] = contents;
});

const search = (type = 'shiny gold') => {
  let resultArr = [];
  for (const key in rules) {
    if (rules.hasOwnProperty(key) && type !== key) {
      if (rules[key].includes(type)) {
        resultArr.push(key);
        resultArr = [...new Set([...resultArr, ...search(key)])];
      }
    }
  }
  return resultArr;
};

console.log(search().length);

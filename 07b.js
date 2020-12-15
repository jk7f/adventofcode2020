// in devtools at https://adventofcode.com/2020/day/7/input

const items = document
  .querySelector('pre')
  .innerText.split('\n')
  .filter((item) => item);

// const items = `shiny gold bags contain 2 dark red bags.
// dark red bags contain 2 dark orange bags.
// dark orange bags contain 2 dark yellow bags.
// dark yellow bags contain 2 dark green bags.
// dark green bags contain 2 dark blue bags.
// dark blue bags contain 2 dark violet bags.
// dark violet bags contain no other bags.`
//   .split('\n')
//   .filter((item) => item);

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
    .map((contentItem) => {
      const amount = Number(contentItem.trim().split(' ')[0]) || 0;
      const name = contentItem
        .replace(/[\d]/, '')
        .replace('bags', '')
        .replace('bag', '')
        .trim();
      return { amount, name };
    });
  rules[container] = contents;
});

const search = (type = 'shiny gold') => {
  let total = 1;
  rules[type].forEach((rule) => {
    if (rule.name !== 'no other') {
      const result = search(rule.name);
      const amount = rule.amount || 1;
      total += amount * result || 1;
    }
  });
  return total;
};

console.log(search() - 1);

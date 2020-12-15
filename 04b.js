// in devtools at https://adventofcode.com/2020/day/4/input

const validateByr = (input) => {
  if (!input) return false;
  return input >= 1920 && input <= 2002;
};

const validateIyr = (input) => {
  if (!input) return false;
  return input >= 2010 && input <= 2020;
};

const validateEyr = (input) => {
  if (!input) return false;
  return input >= 2020 && input <= 2030;
};

const validateHgt = (input) => {
  if (!input) return false;
  const isCm = input.includes('cm');
  const inputSansUnit = input.slice(0, input.length - 2);
  if (isCm) {
    return inputSansUnit >= 150 && inputSansUnit <= 193;
  } else {
    return inputSansUnit >= 59 && inputSansUnit <= 76;
  }
};

const validateHcl = (input) => {
  if (!input) return false;
  return /#[a-f\d]{6}/.test(input);
};

const validateEcl = (input) => {
  if (!input) return false;
  let valid = false;
  ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].forEach((color) => {
    if (input === color) {
      valid = true;
    }
  });
  return valid;
};

const validatePid = (input) => {
  if (!input) return false;
  return input.length === 9 && Number(input);
};

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
      if (
        validateByr(c.byr) &&
        validateIyr(c.iyr) &&
        validateEyr(c.eyr) &&
        validateHgt(c.hgt) &&
        validateHcl(c.hcl) &&
        validateEcl(c.ecl) &&
        validatePid(c.pid)
      )
        a++;
      return a;
    }, 0)
);

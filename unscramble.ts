const words = 'asfg xweXtx!rl pgxlwmt pgxlwmt zgl glzr. xw sgmlg bs tll bnlh ftl asfg tzeexwltt zwm exqsg, bzol z qzwmlg !lnxwm bnl u`t zwm asf`rr !l glyzgmlm !xwq !swq lwtflt...';
console.log(words.split('').sort());
const map: {
  [x:string]: number
} = {};

// eslint-disable-next-line no-restricted-syntax
for (const letter of words.split('')) {
  if (map[letter] === undefined) {
    map[letter] = 0;
  }

  map[letter] += 1;
}
console.log(map);

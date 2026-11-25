'use strict';

const sum = (...args) => {
  if (args.length === 0) return 0;
  let res = 0;
  let i = 0;
  do {
    res += args[i++];
  } while (i < args.length);
  return res;
};

console.log(sum(1, 2, 3));
console.log(sum(0));
console.log(sum());
console.log(sum(1, -1, 1));
console.log(sum(10, -1, -1, -1));

'use strict';

const seq = (f) => {
  const fns = [f];

  const chain = (g) => {
    if (typeof g === 'number') {
      let result = g;
      for (let i = fns.length - 1; i >= 0; i--) {
        result = fns[i](result);
      }
      return result;
    }
    fns.push(g);
    return chain;
  };

  return chain;
};

console.log(seq((x) => x + 7)((x) => x * 2)(5));
console.log(seq((x) => x * 2)((x) => x + 7)(5));
console.log(
  seq((x) => x + 1)(
    (x) => x * 2
  )(
    (x) => x / 3
  )(
    (x) => x - 4
  )(7)
);

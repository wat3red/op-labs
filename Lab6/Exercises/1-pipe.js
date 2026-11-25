'use strict';

const pipe = (...fns) => {
  for (const f of fns) {
    if (typeof f !== 'function') {
      throw new Error('All arguments should be functions');
    }
  }
  return (x) => fns.reduce((v, f) => f(v), x);
};

const inc = (x) => ++x;
const twice = (x) => x * 2;
const cube = (x) => x ** 3;

const f = pipe(inc, twice, cube);
console.log('pipe(inc, twice, cube)(5) =', f(5));

const g = pipe(inc, inc);
console.log('pipe(inc, inc)(7) =', g(7));

try {
  pipe(inc, 7, cube);
} catch (err) {
  console.log('Caught error for non-function:', err.message);
}

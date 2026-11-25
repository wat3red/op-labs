'use strict';

const compose = (...fns) => {
  const handlers = [];
  const composed = (x) => {
    if (fns.length === 0) return x;
    let res = x;
    try {
      for (let i = fns.length - 1; i >= 0; i--) {
        res = fns[i](res);
      }
      return res;
    } catch (error) {
      for (const handler of handlers) {
        handler(error);
      }
      return undefined;
    }
  };
  composed.on = (name, handler) => {
    if (name === 'error') handlers.push(handler);
  };
  return composed;
};

const inc = (x) => ++x;
const twice = (x) => x * 2;
const cube = (x) => x ** 3;

const f = compose(inc, twice, cube);
console.log('compose(inc, twice, cube)(5) =', f(5));

const fail = (x) => {
  throw new Error(`Failed on ${x}`);
};

const f2 = compose(inc, twice, fail, cube);
f2.on('error', (err) => {
  console.log('Handled error event:', err.message);
});
console.log('Result on error:', f2(5));

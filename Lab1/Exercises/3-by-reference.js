'use strict';

const inc = (num) => {
  if (num) num.n++;
};

const obj = { n: 5 };
inc(obj);
console.log(obj);

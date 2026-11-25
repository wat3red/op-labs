'use strict';

const difference = (array1, array2) => {
  const res = [];
  for (const item of array1) {
    if (!array2.includes(item)) {
      res.push(item);
    }
  }
  return res;
};

console.log(difference([7, -2, 10, 5, 0], [0, 10]));
console.log(
  difference(['Beijing', 'Kiev'], ['Kiev', 'London', 'Baghdad'])
);

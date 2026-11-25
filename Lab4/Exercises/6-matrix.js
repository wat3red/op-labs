'use strict';

const max = (matrix) => {
  let val = -Infinity;
  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i];
    for (let j = 0; j < row.length; j++) {
      const item = row[j];
      if (item > val) {
        val = item;
      }
    }
  }
  return val;
};

const m = max([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
console.log('Max element:', m);

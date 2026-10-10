'use strict';

const countTypesInArray = (arr) => {
  const counts = {};
  for (const item of arr) {
    const type = typeof item;
    counts[type] = (counts[type] || 0) + 1;
  }
  return counts;
};

const types = [true, 'hello', 5, 12, -200, false, false, 'word'];
console.log(countTypesInArray(types));

module.exports = { countTypesInArray };

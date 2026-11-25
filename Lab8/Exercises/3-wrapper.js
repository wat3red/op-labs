'use strict';

const contract = (fn, ...types) => (...args) => {
  for (let i = 0; i < args.length; i++) {
    const type = types[i];
    const name = type.name.toLowerCase();
    if (typeof args[i] !== name) {
      throw new TypeError(`Argument ${i} must be of type ${name}`);
    }
  }
  const res = fn(...args);
  const returnType = types[types.length - 1];
  const returnName = returnType.name.toLowerCase();
  if (typeof res !== returnName) {
    throw new TypeError(`Result must be of type ${returnName}`);
  }
  return res;
};

const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number);
console.log('addNumbers(2, 3) =', addNumbers(2, 3));

const concat = (s1, s2) => s1 + s2;
const concatStrings = contract(concat, String, String, String);
console.log(
  'concatStrings("Hello ", "world!") =',
  concatStrings('Hello ', 'world!')
);

try {
  addNumbers(2, '3');
} catch (err) {
  console.log('Caught type error in arguments:', err.message);
}

const badAdd = (a, b) => a + b + '';
const badContract = contract(badAdd, Number, Number, Number);
try {
  badContract(2, 3);
} catch (err) {
  console.log('Caught type error in result:', err.message);
}

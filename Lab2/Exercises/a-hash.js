'use strict';

const phonebook = {
  'Marcus Aurelius': '+380445554433',
  'Antoninus Pius': '+380445554434',
};

const findPhoneByName = (name) => phonebook[name];

console.log(findPhoneByName('Marcus Aurelius'));
console.log(findPhoneByName('Unknown'));

module.exports = { phonebook, findPhoneByName };

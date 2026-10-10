'use strict';

const phonebook = [
  { name: 'Marcus Aurelius', phone: '+380445554433' },
  { name: 'Antoninus Pius', phone: '+380445554434' },
];

const findPhoneByName = (name) => {
  for (const obj of phonebook) {
    if (obj.name === name) return obj.phone;
  }
};

console.log(findPhoneByName('Marcus Aurelius'));
console.log(findPhoneByName('Unknown'));

'use strict';

const ipToInt = (ip = '127.0.0.1') =>
  ip
    .split('.')
    .map(Number)
    .reduce((acc, byte) => (acc << 8) + byte, 0);

console.log('127.0.0.1 ->', ipToInt('127.0.0.1'));
console.log('10.0.0.1  ->', ipToInt('10.0.0.1'));
console.log('192.168.1.10 ->', ipToInt('192.168.1.10'));

module.exports = { ipToInt };

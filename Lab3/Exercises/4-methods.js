'use strict';

const methods = (iface) => {
  const names = [];
  for (const name in iface) {
    const fn = iface[name];
    if (typeof fn === 'function') {
      names.push([name, fn.length]);
    }
  }
  return names;
};

const iface = {
  m1(x) {},
  m2(x, y) {},
  m3(x, y, z) {},
};

console.log(methods(iface));

'use strict';

const fn = () => {
  const obj1 = { name: 'Marcus' };
  let obj2 = { name: 'Marcus' };

  obj1.name = 'Aurelius';
  obj2.name = 'Aurelius';

  // obj1 = { name: 'Antoninus' }; // TypeError: Assignment to constant variable
  obj2 = { name: 'Antoninus' };

  console.log({ obj1, obj2 });
};

fn();

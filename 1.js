const generateRandomArray = randSeed => length =>
  Array.from({ length }, (v, i) => Math.round(Math.random() * randSeed));

const timeIt = (label, fn) => {
  console.time(label);
  fn();
  console.timeEnd(label);
};

const arrThousand = generateRandomArray(100)(1000);
const arrMillion = generateRandomArray(100)(1e6);

const tripleIt = val => val * 3;
const isEven = val => val % 2 === 0;

timeIt('Thousand - map', () => {
  const result = arrThousand.map(tripleIt);
});
timeIt('Thousand - map & filter', () => {
  const result = arrThousand.map(tripleIt).filter(isEven);
});
timeIt('Million - map', () => {
  const result = arrMillion.map(tripleIt);
});
timeIt('Million - map & filter', () => {
  const result = arrMillion.map(tripleIt).filter(isEven);
});

"use strict";

const arr = [
  [1, "first"],
  [3, "third"],
];

const map = new Map();

map.set(1, "first").set(3, "third");
for (let key of map.keys()) {
  console.log("key :>> ", key);
}

for (let value of map.values()) {
  console.log("value :>> ", value);
}

console.log("map.size :>> ", map.size);

map.set(2, "second");
map.delete(2);
console.log(
  "map.has(1) :>> ",
  map.has(1)
);

const s = new Set();
s.add(1);
s.add(2);
s.add(3);
console.log("s.has(3) :>> ", s.has(3));
console.log("s.has(4) :>> ", s.has(4));
s.add(5);
s.add(6);

for (let value of s) {
  console.log(value);
}
let sum = 0;
for (let value of s) {
  sum += value;
}
console.log("sum :>> ", sum);
s.delete([2]);

s.clear();

const arr1 = [1, 6, 9, 4, 9, 1, 5, 6];

const setForArr1 = [...new Set(arr1)];

const arr2 = [1, 6, 9, 4, 9, 1, 5, 6];
const arr3 = [5, 10, 11];

const setForArr2 = [...new Set(arr2)];
const setForArr3 = [...new Set(arr3)];
const UniqueArr = new Set([
  ...setForArr2,
  ...setForArr3,
]);
const UniqueArr1 = [
  ...new Set(UniqueArr),
];

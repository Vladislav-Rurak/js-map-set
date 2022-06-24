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

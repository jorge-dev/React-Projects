import fruits from "./fruit";
import { choice, remove } from "./helpers";

let fruit = choice(fruits);

console.log(`i'd like one ${fruit}, please`);

console.log(`Here you go: ${fruit}`);

console.log(`Delicious, may I have another please`);

let remaining = remove(fruits, fruit);

console.log(
  `I'm sorry, we're all out. we have ${remaining.length} other fruits left`
);

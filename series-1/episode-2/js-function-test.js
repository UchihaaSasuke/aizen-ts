// in order to require a "ts file" into a "js file", we need to compile the "ts file"
// npx tsc functions.ts
const { getName } = require("./functions");

console.log(getName({ first: "from", last: "js" }));
console.log(getName({ first: "from" }));

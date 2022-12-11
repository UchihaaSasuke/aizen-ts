type ThreeDCoordinate = [x: number, y: number, z: number];

function add3DCoordinate(
  c1: ThreeDCoordinate,
  c2: ThreeDCoordinate
): ThreeDCoordinate {
  return [c1[0] + c2[0], c1[1] + c2[1], c1[2] + c2[2]];
}

console.log(add3DCoordinate([1, 2, 3], [4, 5, 6]));

function simpleStringState(
  initial: string
): [() => string, (v: string) => void] {
  // param1 : is a function that returns a string. param2: is a setter
  let str: string = initial;
  return [
    () => str,
    (v: string) => {
      str = v; // setting the str value from v parameter. Otherwise, it's call a setter
    },
  ];
}

const [str1getter, str1setter] = simpleStringState("hello");
const [str2getter, str2setter] = simpleStringState("Aizen");
console.log(str1getter());
console.log(str2getter());
str1setter("good");
console.log(str1getter());
console.log(str2getter());

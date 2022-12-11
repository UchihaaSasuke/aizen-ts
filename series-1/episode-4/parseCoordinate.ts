//?No BS TS #4 - Function Overloading in Typescript

interface Coordinate {
  x: number;
  y: number;
}

// function parseCoordinateFromObject(obj: Coordinate): Coordinate {
//   return {
//     ...obj,
//   };
// }

// function parseCoordinateFromNumbers(x: number, y: number): Coordinate {
//   return {
//     x,
//     y,
//   };
// }

function parseCoordinate(str: string): Coordinate;
function parseCoordinate(obj: Coordinate): Coordinate;
function parseCoordinate(x: number, y: number): Coordinate;

//Now we'll implement a function that will handle the function signature
//? the type "unknown" is the same as the type "any" but we have to cast it
function parseCoordinate(arg1: unknown, arg2?: unknown): Coordinate {
  let coord: Coordinate = {
    x: 0,
    y: 0,
  };

  if (typeof arg1 === "object") {
    // this check will be executed at runtime, not at compling time
    coord = {
      ...(arg1 as Coordinate),
    };
  } else if (typeof arg1 === "string") {
    (arg1 as string).split(",").forEach((str) => {
      const [key, value] = str.split(":");
      coord[key as "x" | "y"] = parseInt(value, 10);
    });
  } else {
    coord = {
      x: arg1 as number,
      y: arg2 as number,
    };
  }

  return coord;
}

console.log(parseCoordinate(8, 2));
console.log(parseCoordinate({ x: 4, y: 63 }));
console.log(parseCoordinate("x:471,y:613"));

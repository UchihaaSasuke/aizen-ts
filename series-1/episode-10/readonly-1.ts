// ? Readonly fields
interface Cat {
  //   readonly name: string;
  name: string;
  breed: string;
}

function makeCat(name: string, breed: string): Readonly<Cat> {
  return {
    name,
    breed,
  };
}

const usul = makeCat("Usul", "Tabby");
// usul.name = "Piter";

// ? Readonly tuples
function makeCoordinate(
  x: number,
  y: number,
  z: number
): readonly [number, number, number] {
  return [x, y, z];
}

const c1 = makeCoordinate(10, 20, 30);
// c1[0] = 50;

// ? Immutable Arrays
const reallyConst = [1, 2, 3] as const; // as const in this way makes the array immutable
// reallyConst[0] = 15;

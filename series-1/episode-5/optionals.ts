//?No BS TS #5 - Optionals in Typescript

// Optional parameters
function printIngredient(quantity: string, ingredient: string, extra?: string) {
  console.log(`${quantity} ${ingredient} ${extra ?? ""}`);
}

printIngredient("1C", "Flour");
printIngredient("1C", "Flour", "something more");

//Optional fields
interface User {
  id: string;
  info?: {
    email?: string;
  };
}

function getEmailEasy(user: User): string {
  return user?.info?.email ?? "";
}

//Optional function calls
function addWithCallback(x: number, y: number, callback: () => void) {
  console.log([x, y]);
  callback?.(); // the equivalent of : if(callback) { callback(); }
}

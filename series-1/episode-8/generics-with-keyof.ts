//? Example #1 - Pluck
function pluck<DataType, KeyType extends keyof DataType>(
  items: DataType[],
  key: KeyType
): DataType[KeyType][] {
  return items.map((item) => item[key]);
}

const dogs = [
  { name: "D1", age: "12" },
  { name: "LG", age: "13" },
];

console.log(pluck(dogs, "name"));
console.log(pluck(dogs, "age"));

//? Example #2 - Event Map
interface BaseEvent {
  time: number;
  user: string;
}

interface EventMap {
  addToCart: BaseEvent & { quantity: number; productID: string };
  checkout: BaseEvent;
}

//? "name" has to be "addToCart" or "checkout".
//? "data" has to be "BaseEvent & { quantity: number; productID: string }" or "BaseEvent".
function sendEvent<Name extends keyof EventMap>(
  name: Name,
  data: EventMap[Name]
): void {
  console.log([name, data]);
}

sendEvent("addToCart", {
  productID: "foo",
  user: "baz",
  quantity: 1,
  time: 10,
});
sendEvent("checkout", { time: 20, user: "me" });

//The idea to create the interfaces and generic types with extending the keyof is that we can't mess up

type MyFlexibleDogInfo = {
  name: string;
  [key: string]: string | number; // means: we can add any "key" has type "string" with a value of "string" or "number"
};
// } & Record<string, string>;

const dog: MyFlexibleDogInfo = {
  name: "LG",
  breed: "Mutt",
  age: 25,
};

interface DogInfo {
  name: string;
  age: number;
}

type OptionsFlags<Type> = {
  [Property in keyof Type]: null;
};

type DogInfoOptions = OptionsFlags<DogInfo>; // here all keys in "DogInfoOptions" become "null"

type Listeners<Type> = {
  [Property in keyof Type as `on${Capitalize<string & Property>}Change`]?: (
    newValue: Type[Property]
  ) => void;
} & {
  [Property in keyof Type as `on${Capitalize<
    string & Property
  >}Delete`]?: () => void;
};

function listenToObject<T>(obj: T, listeners: Listeners<T>): void {
  throw "Needs to be implemented";
}

const lg: DogInfo = {
  name: "LG",
  age: 4,
};

type DogInfoListeners = Listeners<DogInfo>;

listenToObject(lg, {
  onNameChange: (v: string) => {},
  onAgeChange: (v: number) => {},
  onAgeDelete: () => {},
});

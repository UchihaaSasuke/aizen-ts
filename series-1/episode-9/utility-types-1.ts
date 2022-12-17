// ? Typescript Utility Types : the idea is to create a new types based on existing types
// ----------------------------------------
// ?Summary :
// Utility types page
// Project setup
// Partial
// Required
// Pick
// Record
// Omit
// Types from fields
// -----------------------------------------

interface MyUser {
  name: string;
  id: number;
  email?: string;
}

//? Partial
type MyUserOptionals = Partial<MyUser>;

const merge = (user: MyUser, overrides: MyUserOptionals): MyUser => {
  return {
    ...user,
    ...overrides,
  };
};

console.log(merge({ name: "me", id: 1, email: "a@z.uk" }, { email: "b@z.uk" }));

//? Required
type RequiredMyUser = Required<MyUser>; // we note that "email" is no longer optional

//? Pick
type JustEmailAndName = Pick<MyUser, "email" | "name">;

//? Record, Omit and Types from fields
type UserWithoutID = Omit<MyUser, "id">;

// Types from fields : MyUser["id"]
const mapById = (users: MyUser[]): Record<MyUser["id"], UserWithoutID> => {
  return users.reduce((a, v) => {
    const { id, ...other } = v;
    return {
      ...a,
      [id]: other,
    };
  }, {});
};

console.log(
  mapById([
    {
      id: 1,
      name: "Mr. Foo",
    },
    {
      id: 2,
      name: "Mrs Baz",
    },
  ])
);

// Specifying types
let userName:string = "Aizen";
let hasLoggedIn: boolean = true;

userName += " Sosuke"; 

console.log(userName);

let myNumber: number = 10;

let myRegex: RegExp = /foo/;

// Typing arrays
const names: string[] = userName.split(" ")
const myValues: Array<number> = [1, 2, 3]

// Typing objects
interface Person {
    first: string;
    last: string;
}

const myPerson: Person = {
    first: "Aizen",
    last:"Sosuke",
}

// Records
const ids: Record<number, string> = {
    10:"a",
    20:"b"
}

ids[30] = "c";

// Conditionals and expressions
if(ids[30] === "D"){
}

// Loops
for( let i=0; i < 5; i++){
    console.log(i)
}

[1,2,3].forEach((v)=> console.log(v));
const out: number[] = [4,5,6].map((v)=> v*10)
import { message, moduleSum as MS } from "./library.js";

// Global function
import * as lib from "./library.js";

// Default function
// import {default as df} from "./library.js";
import df from "./library.js";

// document.write("hello");

// console.log(message);
// // console.log(moduleSum(50,50));
// console.log(MS(50,50), message);

console.log(lib.message);
// console.log(lib.moduleSum(50, 50));

let moduleObj1 = new lib.moduleClass("Dk");
console.log(moduleObj1);

console.log(df(10, 5));

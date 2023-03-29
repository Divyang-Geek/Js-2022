// ===== Let & Const Variable ===== //
document.write("<h2>let & const variable</h2>");

var a = 10;
let b = 20;
const c = 30;

document.write("<h3>var</h3>");
// Var
if (1 == 1) {
    var a = 15;
    document.write("Inside of block : " + a);
    document.write("<br>");
}
document.write("Outside of block : " + a);

document.write("<br>");

document.write("<h3>let</h3>");
// Let
if (5 == 5) {
    let b = 25;
    document.write("Inside of block : " + b);
    document.write("<br>");
}
document.write("Outside of block : " + b);
document.write("<br>");

document.write("<h3>const</h3>");
// Const
if (2 == 2) {
    const c = 35;
    document.write("Inside of block : " + c);
    document.write("<br>");
}
document.write("Outside of block : " + c);
document.write("<br>");

// variable using with function and checking scope

function modJs(love) {
    // var
    // if (love) {
    //     var fName = "Divyang";
    //     var lName = "Kakadiya";
    //     document.write(`${fName} ${lName}`)
    // }
    // document.write(`${fName} ${lName}`)
    // let
    // if (love) {
    //     let fName = "Divyang";
    //     let lName = "Kakadiya";
    //     document.write(`${fName} ${lName}`);
    // }
    // document.write(`${fName} ${lName}`);
    // const
    // if (love) {
    //     const fName = "Divyang";
    //     const lName = "Kakadiya";
    //     document.write(`${fName} ${lName}`);
    // }
    // document.write(`${fName} ${lName}`);
}

modJs(true);

// ===== Template String (literals)  ===== //
document.write("<h2>Template String (literals)</h2>");

var myFirstName = "Divyang";
var myLastName = "Kakadiya";
var myDesignation = "Frontend Developer";

// document.write(`Hello My Name is ${myFirstName} ${myLastName}.`)
// document.write("<br>");

function designationFun(A) {
    return `${A}`;
}
document.write(`Hello My Name is ${myFirstName} ${myLastName}. I'm a ${designationFun(myDesignation)}`);
document.write("<br>");

function myFullName(A, B) {
    return `${A} ${B}`;
}
document.write(`Hello My Name is ${myFullName(myFirstName, myLastName)}. I'm a ${designationFun(myDesignation)}`);
document.write("<br>");

// ===== Arrow Function ===== //
document.write("<h2>Arrow Function</h2>");

// Function
let fName1 = "Divyang";
let lName1 = "kakadiya";

let myFunc1 = function (name, age) {
    let myInfo = `My name is ${name} and my age is ${age}`;
    return myInfo;
};

document.write(`${typeof myFunc1}, ${myFunc1(fName1, 25)}`);
document.write("<br>");

// Arrow Function
// 1. Example
let fName2 = "Dk";
let lName2 = "kakadiya";

let myFunc2 = (name, age) => {
    let myInfo = `My name is ${name} and my age is ${age}`;
    return myInfo;
};

document.write(`${typeof myFunc2}, ${myFunc2(fName2, 25)}`);
document.write("<br>");

// 2. Example
let arwA = 10;
let arwB = 28;

let arwSum = () => arwA + arwB;
document.write(arwSum());
document.write("<br>");

// 3. Example
// ! using ternary operator
let arwAge = 50;
let arwWelcome = arwAge < 18 ? () => "Baby" : () => "Adult";
document.write(arwWelcome());

// ===== Default Parameters ===== //
document.write("<h2>Default Parameters</h2>");

// 1. Example
// function es5
function defMltFun(a, b = 10) {
    return a * b;
}

document.write(defMltFun(10));
document.write("<br>");

// arrow function
const defMltArwFun = (x, y = 10) => {
    return x * y;
};
document.write(typeof defMltArwFun, defMltArwFun(50));

// ===== Rest Parameter ===== //
document.write("<h2>Rest Parameter</h2>");

// ! in old functions, we only set number or string
// ! arguments is default parameter, it's return object
// Old Arguments
function SumFun() {
    // console.log(typeof arguments, arguments);
    let sum = 0;
    for (let key in arguments) {
        sum += arguments[key];
    }
    return sum;
}

document.write(SumFun(10, 15));
document.write("<br>");
document.write(SumFun(50, 15, 80));
document.write("<br>");

// ! with rest operator functions, we set number and string, same like below
// New Arguments with Rest Operator
function restSumFun(name, designation, ...argumts) {
    // console.log(arguments);
    // console.log(argumts);
    // console.log(...argumts);

    let restName = `Hello ${name}`;
    let restDesignation = `I'm a ${designation}`;
    let restSum = 0;
    for (let key in argumts) {
        restSum += argumts[key];
    }
    let restNameDesSum = `${restName}, ${restDesignation} and ${restSum}`;
    return restNameDesSum;
}

document.write(restSumFun("Dk", "Frontend Developer", 10, 15, 10));
document.write("<br>");
document.write(restSumFun("Roshan", "Frontend Developer", 50, 30, 60, 50, 40));
document.write("<br>");

function restOp1(a, b, ...c) {
    document.write(`${a} ${b}`);
    document.write(c);
    document.write(c[0]);
    document.write(c.length);
    document.write(c.indexOf("Edan"));
}

restOp1("Ronaldo", "Neymar", "Messi ", "Edan");
document.write("<br>");

// ===== Spread Operator ===== //
document.write("<h2>Spread Operator</h2>");

// 1.Example
let spreadArr1 = [10, 20, 30, 40, 50];
document.write(restSumFun("Dk", "Frontend Developer", spreadArr1));
document.write("<br>");
document.write(restSumFun("Dk", "Frontend Developer", ...spreadArr1));
document.write("<br>");

// 2. Example
let spreadArr2 = [...spreadArr1];
document.write(spreadArr1);
spreadArr1.push(60);
document.write("<br>");
document.write(spreadArr1);
document.write("<br>");
document.write(spreadArr2);
document.write("<br>");

// 3. Example
// let spreadArr3 = spreadArr1.concat(spreadArr2);
let spreadArr3 = [...spreadArr1, ...spreadArr2];
document.write(Array.isArray(spreadArr3));

// with Object
let spreadTableObj1 = {
    sTableName: "Table",
    sTablePrice: 25000,
    sTableColor: "Black",
};

let spreadTableObj2 = {
    sTableLength: 25,
    sTableHeight: 6,
};

let spreadTableObj3 = { ...spreadTableObj1, ...spreadTableObj2 };

// console.log(spreadTableObj3);

// ===== Object Literals ===== //
document.write("<h2>Object Literals</h2>");

// Old Object
let oldObjName = "Dk";
let oldObjCourse = "B.com";

let oldObj1 = {
    name: oldObjName,
    course: oldObjCourse,
};

// console.log(oldObj1);

// ! here used variable as a key
let oldObj2 = {
    oldObjName,
    oldObjCourse,
};

// console.log(oldObj2, oldObj2.oldObjName);

// 1. Method
let myName = "Divyang";

let obj3 = {
    name: myName,
    [myName + "Position"]: "Frontend Developer",
    [myName + "Age"]: 25,
    fullDetail: function () {
        return `My Name is ${this.name}, age is ${this.DivyangAge}, position is ${this.DivyangPosition}`;
    },
};

document.write(obj3.fullDetail());
document.write("<br>");

// 2. Method
let obj4 = {
    name: myName,
    [myName + "Position"]: "Frontend Developer",
    [myName + "Age"]: 25,
    "fullDetail show"() {
        //if need multiple name for function
        return `My Name is ${this.name}, age is ${this.DivyangAge}, position is ${this.DivyangPosition}`;
    },
};

document.write(obj4["fullDetail show"]()); //object function call
document.write("<br>");

// 3. create function and return object suing new method
// 3.1 Example
let devFName1 = "Roshan";
let devLName1 = "Bichve";
let devCourse1 = "B.com";

function developerFun(devFName1, devLName1, devCourse1) {
    return { devFName1, devLName1, devCourse1 };
}

let devCheckIt1 = developerFun(devFName1, devLName1, devCourse1);

// console.log(devCheckIt1);

// 3.2 Example
let devFName2 = "Roshan";
let devLName2 = "Bichve";
let devCourse2 = "B.com";

function developerFun2(devFName2, devLName2, devCourse2) {
    let devFullName = `${devFName2} ${devLName2}`;
    return { devFullName, devCourse2 };
}

let devCheckIt2 = developerFun2(devFName2, devLName2, devCourse2);

// console.log(devCheckIt2);
document.write(devCheckIt2.devFullName);
document.write("<br>");
document.write(devCheckIt2.devCourse2);

// ===== Destructuring Array ===== //
document.write("<h2>Destructuring Array</h2>");

// 1. Example
let myInfo11 = ["Divyang", "Kakadiya", "Developer", 25];

let [fName11, lName11, designation11, age11] = myInfo11;

document.write(fName11);
document.write("<br>");

// 2. Example
let myInfo12 = ["Divyang", "Kakadiya", "Developer", 25];

let [fName12, ...args] = myInfo12;

document.write(fName12, args); //args return array
document.write("<br>");

// 3. Example
function user1([fullName, designation, age]) {
    document.write(fullName);
    document.write(designation);
    document.write(age);
}

user1(["Dk", "Dev", 20]);
document.write("<br>");

// 4. Example
function user2() {
    return ["Dk", "Dev", 20];
}

let [userName, userDesignation, userAge] = user2();

// 5. Example
// !JavaScript Program to Swap Two Numbers without using Third Variable
let swapVal1 = 20;
let swapVal2 = 40;

document.write(`swapVal1 value is ${swapVal1} and swapVal2 value is ${swapVal2}`);
[swapVal1, swapVal2] = [swapVal2, swapVal1];
document.write("<br>");
document.write(`swapVal1 value is ${swapVal1} and swapVal2 value is ${swapVal2}`);

// ===== Destructuring Object ===== //
document.write("<h2>Destructuring Object</h2>");

// 1. Example
let userObj1 = {
    Uname1: "Dk",
    Udesigntn1: "Dev",
    Uage1: 25,
};

let { Uname1, Udesigntn1: UD, Uage1 } = userObj1;
// ! we can set small name, same like above
document.write(Uname1, UD, Uage1);
document.write("<br>");

// 2. Example
let userObj2 = {
    Uname2: "Roshan",
    Udesigntn2: "Dev",
    Uage2: 22,
};

let Uname2, Udesigntn2, Uage2;
({ Uname2, Udesigntn2, Uage2 } = userObj2); // () necessary
document.write(Uname2, Udesigntn2, Uage2);
document.write("<br>");

// 3. Example
const userBio = {
    name: "Divyang",
    age: 25,
    deg: "Developer",
    hobby: {
        first: "coding",
        second: "learning",
        third: "traveling",
    },
};

let { name: userBioName, hobby } = userBio;
document.write(userBioName, hobby.first);

// ===== New String Method ===== //
document.write("<h2>New String Method</h2>");

let newStrng1 = "Divyang";

document.write(`${newStrng1}`.startsWith("D"));
document.write("<br>");
document.write(`${newStrng1}`.endsWith("g"));
document.write("<br>");
document.write(`${newStrng1}`.includes("Div"));
document.write("<br>");
document.write(`${newStrng1} `.repeat(5));

// ===== Math Object ===== //
document.write("<h2>Math Object</h2>");
// 1.sign
let mathSign1 = 5.5;
document.write(Math.sign(mathSign1)); //return positive, negative and null

// 2.trunc
let mathTrunc1 = 5.556; //not 5.56
document.write(Math.trunc(mathTrunc1));

// ===== Exponentiation Operator ===== //
document.write("<h2>Exponentiation Operator</h2>");

let exOp1 = 2;
let exOp2 = 3;
document.write(exOp1 ** exOp2);
document.write("<br>");

// ===== New Numbers & Global Methods ===== //
document.write("<h2>New Numbers & Global Methods</h2>");

let newNumGlo1 = 5;

document.write("<h3>isFinite (global & number method)</h3>");
// 1. isFinite()
// generate by chatgpt
document.write(isFinite(5)); // true
document.write("<br>");
document.write(isFinite(-2.5)); // true
document.write("<br>");
document.write(isFinite(0)); // true
document.write("<br>");
document.write(isFinite(NaN)); // false
document.write("<br>");
document.write(isFinite(Infinity)); // false
document.write("<br>");
document.write(isFinite(-Infinity)); // false
document.write("<br>");
document.write(isFinite("foo")); // false (not a number)
document.write("<br>");
document.write(isFinite(null)); // true (converted to 0)
document.write("<br>");
document.write(isFinite("")); // true (converted to 0)
document.write("<br>");
document.write(isFinite(true)); // true (converted to 1)
document.write("<br>");
document.write(isFinite(false)); // true (converted to 0)
document.write("<br>");
document.write(Number.isFinite(newNumGlo1));

// 2. isNaN()
document.write("<h3>isNaN (global & number method)</h3>");
let isNa = "Dk";
document.write(isNaN(isNa)); //global method
document.write("<br>");
document.write(Number.isNaN(isNa)); //number method
document.write("<br>");
document.write("<br>");

// generate by chatgpt
document.write(isNaN(NaN)); // true
document.write("<br>");
document.write(isNaN(5)); // false
document.write("<br>");
document.write(isNaN(-2.5)); // false
document.write("<br>");
document.write(isNaN(0)); // false
document.write("<br>");
document.write(isNaN("foo")); // true (not a number)
document.write("<br>");
document.write(isNaN("10")); // false (converted to number 10)
document.write("<br>");
document.write(isNaN("10.2")); // false (converted to number 10.2)
document.write("<br>");
document.write(isNaN("")); // false (converted to number 0)
document.write("<br>");
document.write(isNaN(null)); // false (converted to number 0)
document.write("<br>");
document.write(isNaN(undefined)); // true (not a number)
document.write("<br>");
document.write(isNaN(true)); // false (converted to number 1)
document.write("<br>");
document.write(isNaN(false)); // false (converted to number 0)
document.write("<br>");

// 2. isInteger()
document.write("<h3>isInteger (number method)</h3>");
let isintgr1 = 5;
let isintgr2 = -5;
let isintgr3 = "5";
let isintgr4 = "sds";
let isintgr5 = 5.5;
document.write(Number.isInteger(isintgr1));
document.write("<br>");
document.write(Number.isInteger(isintgr2));
document.write("<br>");
document.write(Number.isInteger(isintgr3));
document.write("<br>");
document.write(Number.isInteger(isintgr4));
document.write("<br>");
document.write(Number.isInteger(isintgr5));

// ===== Classes, Object & Inheritance in OOP ===== //
document.write("<h2>Classes, Object & Inheritance in OOP (Object Oriented Programming)</h2>");

document.write(`<h3>Constructor Function Method, Prototype Method and Static Method</h3>`);

// 1. Example
class studCons {
    // 1.Constructor Function Method
    constructor(name) {
        this.myName = name;
    }
    // 2.Prototype Method
    hello() {
        return `Hello, This is a ${this.myName}`;
    }
    // 3.Static Method
    static staticMethod() {
        return `Hello, This is a Static Method`;
    }
}

let studConsvar = new studCons("Constructor Function Method");
document.write(studConsvar.myName);
document.write("<br>");
document.write(studConsvar.hello());
document.write("<br>");
document.write(studCons.staticMethod());
document.write("<br>");
document.write("<br>");

// 2.Example
document.write(`<h3>Class Inheritance</h3>`);

class Employee {
    constructor(name) {
        this.empName = name;
    }

    Info() {
        return `Employee Name: ${this.empName}`;
    }
}

let employeeVar = new Employee("DkEmplo");
document.write(employeeVar.Info());
document.write("<br>");

class Manager extends Employee {
    constructor(name) {
        super(name);
        this.mangName = name;
    }
    Info() {
        return `Manager Name: ${this.mangName}`;
    }
}

let manageVar = new Manager("DkManager");

document.write(manageVar.Info());

document.write("<br>");
document.write("<br>");

// 3. Example
class Students {
    constructor(name, age, cls) {
        this.myName = name;
        this.myAge = age;
        this.myCls = cls;
    }
    // instance method
    Info() {
        return `Hello, My Name is ${this.myName}, Age is ${this.myAge} and class is ${this.myCls}`;
    }
}
// console.log(new Students()); //This is a Object
let studentObj1 = new Students("Divyang", 25, "B.com"); //This is Object
let studentObj2 = new Students("Roshan", 22, "B.com"); //This is Object
// console.log(studentObj1); //object
// console.log(studentObj2); //object
document.write(studentObj1.Info());
document.write("<br>");
document.write(studentObj2.Info());
document.write("<br>");

class Players extends Students {
    constructor(name, age, cls, game) {
        super(name, age, cls); //allow to access main constructor 'super'
        this.myGame = game;
    }
    playerBio() {
        return `${super.Info()}, I'm a Good ${this.myGame} player.`;
    }
}

let playerObj1 = new Players("Niranjan", 25, "B.com", "Cricket");
document.write(playerObj1.playerBio());

// ===== Modules ===== //
document.write("<h2>Modules</h2>");

// ! please check this code in root folder "AdvanceModule"

// ===== Promise ===== //
document.write("<h2>Promise</h2>");

// 1. Example
let prom1Com = true;
let prom1 = new Promise(function (resolve, reject) {
    if (prom1Com) {
        resolve("I'm Successful.");
    } else {
        reject("You're Rejected");
    }
});
// console.log(prom1);

// 2. Example
function prom2(A) {
    return new Promise(function (resolve, reject) {
        // console.log(`Fetching Data, Please Wait`);
        setTimeout(() => {
            if (A) {
                // resolve("I'm Successful.");
            } else {
                // reject("You're Rejected");
            }
        }, 5000);
    });
}

// let onfullfilment = (result) => {
//     console.log(result);
// };

// let onRejection = (error) => {
//     console.log(error);
// };

// prom2(true).then(onfullfilment);
// prom2(true).catch(onRejection);

prom2(true)
    .then((result) => {
        // console.log(result);
    })
    .catch((error) => {
        // console.log(error);
    });

// ===== Promise.all ===== //
document.write("<h2>Promise.all</h2>");

// 1. Example
let proAll1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // console.log(`first promise resolved `);
        resolve(10);
    }, 1000);
});

let proAll2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // console.log(`second promise resolved `);
        resolve(20);
    }, 2000);
});

let proAll3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // console.log(`third promise resolved `);
        resolve(30);
    }, 3000);
});

let total1 = 0;

Promise.all([proAll1, proAll2, proAll3])
    .then((result) => {
        for (let i = 0; i < result.length; i++) {
            total1 += result[i];
        }
        // console.log(total1);
        // console.log(`Results: ${result}`);
    })
    .catch((error) => {
        // console.log(`Error: ${error}`);
    });

// 2. Example
let promCall = (returnDta, returnMsg) => {
    return (resolve, reject) => {
        setTimeout(() => {
            // console.log(`${returnMsg} promise resolved `);
            resolve(returnDta);
        }, returnDta * 100);
    };
};

let proAll4 = new Promise(promCall(10, "first"));
let proAll5 = new Promise(promCall(20, "second"));
let proAll6 = new Promise(promCall(30, "third"));

let total2 = 0;

Promise.all([proAll4, proAll5, proAll6])
    .then((result) => {
        for (let i = 0; i < result.length; i++) {
            total2 += result[i];
        }
        // console.log(`Total ${total2}`);
        // console.log(`Results: ${result}`);
    })
    .catch((error) => {
        // console.log(`Error: ${error}`);
    });

// ===== Ajax ===== //
document.write("<h2>Ajax</h2>");
document.write("<button id='ajaxBtn1' onclick='loadData1()'>Ajax Btn1</button><div id='ajaxResult1'></div><button id='ajaxBtn2' onclick='loadData2()'>Ajax Btn2</button><div id='ajaxResult2'></div>");

// ReadyState
// 1. An event occurs in a web page (the page is loaded, a button is clicked)
// 2. An XMLHttpRequest object is created by JavaScript
// 3. The XMLHttpRequest object sends a request to a web server
// 4. The server processes the request
// 5. The server sends a response back to the web page
// 6. The response is read by JavaScript
// 7. Proper action (like page update) is performed by JavaScript

// 1.Example
function loadData1() {
    let xhttp1 = new XMLHttpRequest();
    // console.log(typeof xhttp1);
    let ajxResultGt = document.getElementById("ajaxResult1");
    // console.log(ajxResultGt);

    xhttp1.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            ajxResultGt.innerHTML = this.responseText;
        } else if (this.readyState == 4 && this.status == 404) {
            ajxResultGt.innerHTML = "File Not Found";
        }
    };

    xhttp1.open("GET", "assets/text/readme.txt", true);
    xhttp1.send();
}

// 2.Example
function loadData2() {
    let xhttp2 = new XMLHttpRequest();

    xhttp2.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
        } else if (this.readyState == 4 && this.status == 400) {
            console.log(`Bad Request`);
        }
    };

    xhttp2.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
    xhttp2.send();
}

// ===== Fetch API ===== //
document.write("<h2>Fetch API</h2>");

// 1. Example
fetch("assets/text/readme.txt")
    // .then((res) => {
    //     // console.log(res);
    //     // console.log(res.text());
    //     return res.text();
    // })

    .then((res) => res.text());
// .then((data) => console.log(data));

// 2.Example
fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    // .then((data) => console.log(data))
    // .then((data) => console.log(data1))
    .catch((err) => console.log("Can't Fetch Data"));

// 3.Example
fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
        return response.json();
    })
    .then((Data) => {
        // console.log(Data);
        for (let key1 in Data) {
            // console.log(`first key: ${Data[key1]}`);
            for (let key2 in Data[key1]) {
                // console.log(`${Data[key1].id} - ${Data[key1].address.city}`);
                // console.log(`second key: ${Data[key1].name}`);
                // console.log([key2]);
            }
        }
    })
    .catch((err) => console.log("Can't fetch data"));

// 4.Example
fetch("https://dummyjson.com/carts")
    .then((response) => response.json())
    .then((data) => {
        // console.log(data);
        for (let key in data) {
            // console.log(data[key]);
            for (let y in data[key]) {
                // console.log(data[key][y].total);
            }
        }
    })
    .catch((err) => console.log("Can't Fetch Data"));

// 5.Example
// fetch("assets/json/devData.json")
//     .then((rsp) => rsp.json())
//     .then((data) => {
//         // console.log(data);
//         document.write(`<table>`);
//         for (let x in data) {
//             document.write(`<tr>`);
//             for (let y in data[x]) {
//                 document.write(`<td>${data[x][y]}</td>`);
//             }
//             document.write(`</tr>`);
//         }
//         document.write(`</table>`);
//     })
//     .catch((err) => console.log("Can't Fetch Data"));

document.write(`<h3>Creating a resource data in server (database)</h3>`);

// 1.Example
let obj1 = {
    title: "foo",
    body: "bar",
    userId: 1,
};

fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    // body: JSON.stringify({
    //     title: "foo",
    //     body: "bar",
    //     userId: 1,
    // }),
    body: JSON.stringify(obj1), //object convert to json
    headers: {
        "Content-type": "application/json; charset=UTF-8",
    },
}).then((response) => response.json());
// .then((json) => console.log(json));

document.write(`<h3>update Data in server (database)</h3>`);

// 1.Example
fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PUT",
    body: JSON.stringify({
        id: 1,
        title: "foo",
        body: "bar",
        userId: 1,
    }),
    headers: {
        "Content-type": "application/json; charset=UTF-8",
    },
}).then((response) => response.json());
// .then((json) => console.log(json));

document.write(`<h3>delete Data in server (database)</h3>`);

// 1.Example
fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "DELETE",
});

document.write(`<h3>Insert Data in the server from the form (database)</h3>`);

document.write('<form id="myForm"><input type="text" id="title" placeholder="Title"> <input type="text" id="body" placeholder="Body"> <input type="text" id="userId" placeholder="userId"> <button type="submit" id="saveForm" style="padding: 10px 20px;">Save</button> </form>');

// 1.Example
// ! here convert object in to json and insert data in server
document.getElementById("saveForm").addEventListener("click", function (event) {
    event.preventDefault();

    let obj2 = {
        title: document.getElementById("title").value,
        body: document.getElementById("body").value,
        userId: document.getElementById("userId").value,
    };

    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(obj2),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    })
        .then((response) => response.json())
        .then((data) => console.log(data));
});

// ! here direct insert form data in server
// 2. Example
// document.getElementById("saveForm").addEventListener("click", function (event) {
//     event.preventDefault();

//     fetch("https://jsonplaceholder.typicode.com/posts", {
//         method: "POST",
//         body: new FormData(document.getElementById("myForm")),
//         headers: {
//             "Content-type": "application/x-www-form-urlencoded",
//         },
//     })
//         .then((response) => response.json())
//         .then((data) => console.log(data));
// });

// ===== Async & Await ===== //
document.write("<h2>Async & Await</h2>");

// Async
// 1.Example
async function async1() {
    return `async1 is working`;
}

async1().then((response) => {
    // console.log(response);
});

// 2.Example
let async2 = async () => `async2 is working`;

async2().then((response) => {
    // console.log(response);
});

// Await
// 1.Example
// let await1 = async () => {
//     console.log(`2. await1 is working`);
//     await console.log(`3. await1 is working`);
//     console.log(`4. await1 is working`);
// };

// console.log(`1. await1 is working`);
// await1();
// console.log(`5. await1 is working`);

// 2.Example
// let await2 = async () => {
//     console.log(`2. await2 is working`);
//     let response = await fetch("assets/json/devData.json");
//     let devData = await response.json();
//     // console.log(response);
//     // console.log(devData);

//     // return (await fetch("assets/json/devData.json")).json(); //Shortcut return

//     console.log(`3. await2 is working`);
//     return devData;
// };

// console.log(`1. await2 is working`);
// // console.log(await2());
// await2()
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });
// console.log(`4. await2 is working`);
// console.log(`5. await2 is working`);

// 3.Example
// let await3 = async () => {
//     console.log(`2. await3 is working`);
//     try {
//         let response = await fetch("assets/json/devData.json");
//         let devData = await response.json();

//         console.log(`3. await3 is working`);
//         return devData;
//     } catch (error) {
//         console.log("Can't Fetch Data");
//     }
// };

// console.log(`1. await3 is working`);
// await3().then((res) => {
//     console.log(res);
// });
// console.log(`4. await3 is working`);
// console.log(`5. await3 is working`);

// ===== Symbol ===== //
document.write("<h2>Symbol (Data Type)</h2>");

// 1.Example
let symb1 = Symbol("This is a symbol");
let symb2 = Symbol("This is a symbol");
// console.log(symb1);
// console.log(symb2);
// console.log(symb1 == symb2);
document.write(symb1.toString());
document.write(`<br>`);

// 2.Example
let symb3 = Symbol("This is a symbol");
document.write(symb3.description);

// 3.Example
let symb4 = Symbol("age");
let symb4Obj = {
    fname: "Dk",
    lname: "Geek",
    [symb4]: 25,
};

// console.log(symb4Obj);
// console.log(symb4Obj.fname);
// console.log(symb4Obj[symb4]);

for (let key in symb4Obj) {
    // console.log(key);
}

// ! loops and object convert to json skip the symbols above and below both example

// 4.Example
let symb5 = Symbol("City");
let symb5User = {
    fname: "Dk",
    lname: "Geek",
};
symb5User[symb5] = "Surat";
symb5User["gender"] = "Male";
// console.log(symb5User);
// console.log(JSON.stringify(symb5User));

// ===== Iterators ===== //
document.write("<h2>Iterators</h2>");

// 1.Example
let iterNum1 = [10, 20, 30, 40, 50];

// 1.Example
let iteNum1 = [10, 20, 30];

let iteNumTypeOf = typeof iteNum1[Symbol.iterator];
// console.log(iteNumTypeOf);

let iteNum2 = iteNum1[Symbol.iterator]();

// ! "()" use this, because this is a function, like above

iteNum2.next();
// console.log(iteNum2.next());
// console.log(iteNum2.next().value);
// console.log(iteNum2.next());
// console.log(iteNum2.next().done);

// 2. Example
let iteNum3 = [200, 400, 600, 800, 1000];

let iteNum4 = iteNum3[Symbol.iterator]();

let iteNum3Res = iteNum4.next();

// while (!iteNum3Res.done) {
//   console.log(iteNum3Res.value);
//   iteNum3Res = iteNum4.next();
// }

// 3.Example
let iteStr1 = "Divyang Kakadiya";

let iteStr2 = iteStr1[Symbol.iterator]();

let iteStr2Res = iteStr2.next();

// while (!iteStr2Res.done) {
//     console.log(iteStr2Res.value);
//     iteStr2Res = iteStr2.next();
// }

// 4.Example
let itrNum1 = [10, 20, 30, 40, 50, 60];

let itrNum2 = numberIter(itrNum1);

function numberIter(arr) {
    let itrNextNum = 0;
    return {
        next() {
            if (itrNextNum < arr.length) {
                return {
                    value: arr[itrNextNum++],
                    done: false,
                };
            } else {
                return {
                    done: true,
                };
            }
        },
    };
}

// console.log(itrNum2.next());
// console.log(itrNum2.next());
// console.log(itrNum2.next());
// console.log(itrNum2.next());
// console.log(itrNum2.next());
// console.log(itrNum2.next());
// console.log(itrNum2.next());

// ===== generators ===== //
document.write("<h2>generators</h2>");

// 1.Example
function* geneateIt1() {
    console.log("First Message");
    yield "Yield No.1";
    console.log("Second Message");
    yield "Yield No.2";
}

let ganIt1 = geneateIt1();
// console.log(ganIt1);
// document.write(ganIt1.next());
// document.write(ganIt1.next());

document.write(`<br>`);

// 2.Example
function* geneateIt2() {
    yield "Yield No.1";
    yield "Yield No.2";
    yield "Yield No.3";
}

let ganIt2 = geneateIt2();
// console.log(ganIt2.next());
// ganIt2.next();
// console.log(ganIt2.next());

// for (const val of ganIt2) {
//     console.log(val);
// }

// 3.Example
function* geneateIt3() {
    // let geneNextit = 0;
    let geneNextit = 300;

    while (true) {
        yield geneNextit++;
    }
}

let ganIt3 = geneateIt3();
// // console.log(ganIt3.next().value);
// console.log(ganIt3.next());
// console.log(ganIt3.next());
// console.log(ganIt3.next());

// 4.Example
function* geneateIt4() {
    let geneNextit = 300;

    while (true) {
        yield geneNextit++;
    }
}

let ganIt4 = geneateIt4();

for (const val of ganIt4) {
    if (val > 310) break;
    // console.log(val);
}

// 5.Example
function* geneateIt5() {
    let geneNextResult = yield;
    // console.log(geneNextResult);
}

let ganIt5 = geneateIt5();

ganIt5.next();
ganIt5.next(100);

// 6.Example
function* geneateIt6() {
    let geneNextResult = [yield, yield, yield];
    // console.log(geneNextResult);
    // console.log(geneNextResult[2]);
}

let ganIt6 = geneateIt6();

ganIt6.next();
ganIt6.next(100);
ganIt6.next(1000);
ganIt6.next(10000);

// 7.Example
function* geneateIt7() {
    yield 45;
    // yield ["A", "B", "c"];
    yield* ["A", "B", "c"]; //! yield* return single single value
}

let ganIt7 = geneateIt7();

// console.log(ganIt7.next());
// console.log(ganIt7.next());
// console.log(ganIt7.next());
// console.log(ganIt7.next());

// 8.Example
function* geneateIt8() {
    yield "php";
    yield "node";
    yield "react";
}

let ganIt8 = geneateIt8();
// console.log(ganIt8.next().value);
// console.log([...ganIt8]);

// 9.Example
function* geneateIt9() {
    yield "php";
    yield "node";
    yield "react";
}

let ganIt9 = geneateIt9();
// console.log(ganIt9.next().value);
// console.log(ganIt9.return('Ending Now'));
// console.log(ganIt9.next().value);

// ===== Strict Mode ===== //
document.write("<h2>Strict Mode</h2>");

("use strict");

// ===== Error Handling ===== //
document.write("<h2>Error Handling</h2>");

// 1.Example
// try {
//     console.log(`start of try`);
//     blabla();
//     console.log(`end of try`);
// } catch (error) {
//     // console.log(`Error`);
//     console.log(error);
// }

// Types of Javascript Errors
// 1.EvalError
// 2.RangeError
// 3.ReferenceError
// 4.SyntaxError
// 5.TypeError
// 6.URIError
// 7.AggregateError
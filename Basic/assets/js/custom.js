/**===== Implementation =====*/
document.write("Hello World!<br>");

/** ===== Html tags in js =====*/
document.write("Hello world!<br>");
document.write("<b><i>Hello again!</i></b><br><hr>");

/**===== Variables =====*/
document.write("<h3>Variables</h3>");

// 1.var
var a = "Add variable value Here...<br>";
var b = "Add variable value again...<br>";
document.write(a);
document.write(b);

var c = 10;
var d = 20;
var e = 30;
document.write(c + d + e, "<br>");

var f = 10;
var g = 12;
f = 14;
document.write(f, "<br>");

var h = 100;
var i = 120;
var i = 140;
document.write(i);
// ! we can declare/define the same variable again and also we can change the value

// 2.let
let firstname = "let";
document.write("<br>", firstname);

let companyname = "geek";
companyname = "geekwebsolution";
document.write("<br>", companyname);
// ! we can't declare/define the same variable again but we can change the value

// 3.constant
const secondname = "Hii";
document.write("<br>", secondname);
// ! we can't declare/define the same variable again and also value

/**===== Data types =====*/
document.write("<hr><h3>Data types</h3>");

var Data_Type_1 = "Hii"; //String
var Data_Type_2 = 10; //Number
var Data_Type_3 = true; //Boolean
var Data_Type_4 = ["HTML", "CSS", "JS"]; //Array
var Data_Type_5 = { first: "Geek", second: "Web", third: "Solution" }; //Object
var Data_Type_6 = null; //Null
var Data_Type_7; //Undefined

document.write(typeof Data_Type_1); //string
document.write("<br>", typeof Data_Type_2); //number
document.write("<br>", typeof Data_Type_3); //boolean
document.write("<br>", typeof Data_Type_4); //object --> This is array but his type "object" in js
document.write("<br>", typeof Data_Type_5); //object
document.write("<br>", typeof Data_Type_6); //object
document.write("<br>", typeof Data_Type_7, "<br>"); //undefined

/**===== Arithmetic Operators =====*/
document.write("<hr><h3>Arithmetic Operators</h3>");
// 1.Addition
var addition1 = 10;
var addition2 = 20;
var addition_total = addition1 + addition2;
document.write("Addition 10 + 20 Is: ", addition_total);
// document.write(`<br> Addition ${addition1} + ${addition2} Is: ${addition_total}`);
// ! This is for dynamic variable value in description

// 2.Subtraction
var subtraction1 = 20;
var subtraction2 = 10;
var subtraction_total = subtraction1 - subtraction2;
document.write("<br> Subtraction 20 - 10 Is: ", subtraction_total);

// 3.Multiplication
var multiplication1 = 10;
var multiplication2 = 20;
var multiplication_total = multiplication1 * multiplication2;
document.write("<br> Multiplication 10 * 20 Is: ", multiplication_total);

// 4.Division
var division1 = 50;
var division2 = 2;
var division_total = division1 / division2;
document.write("<br> Division 50 / 2 Is: ", division_total);

// 5.Modulus
var modulus1 = 14;
var modulus2 = 20;
var modulus_total = modulus1 % modulus2;
document.write("<br> Modulus 14 % 20 Is: ", modulus_total);

// 6.Exponentiation
var exponentiation1 = 10;
var exponentiation2 = 3;
var exponentiation_total = exponentiation1 ** exponentiation2;
document.write("<br> Exponentiation 10 ** 3(10*10*10) Is: ", exponentiation_total);

// 7.Increment
var increment1 = 10;
document.write("<br> Increment 10 Is: ", increment1); //10
increment1++;
document.write("<br> Increment 10 Is: ", increment1); //11

// 8.Decrement
var decrement1 = 10;
document.write("<br> decrement 10 Is: ", decrement1); //10
decrement1--;
document.write("<br> decrement 10 Is: ", decrement1); //9

/**===== Assignment Operators =====*/
document.write("<hr><h3>Assignment Operators</h3>");

// 1.Addition
var Assignment_A = 30;
var Assignment_B = 10;
Assignment_A += Assignment_B; // Assignment_A = Assignment_A + Assignment_B
document.write("Assignment Addition 30 += 10 Is: ", Assignment_A);

// 2.Subtraction
var Assignment_C = 30;
var Assignment_D = 10;
Assignment_C -= Assignment_D; // Assignment_C = Assignment_C - Assignment_D
document.write("<br> Assignment Subtraction 30 -= 10 Is: ", Assignment_C);

// 3.Multiplication
var Assignment_E = 30;
var Assignment_F = 10;
Assignment_E *= Assignment_F; // Assignment_E = Assignment_E * Assignment_F
document.write("<br> Assignment Multiplication 30 *= 10 Is: ", Assignment_E);

// 4.Division
var Assignment_G = 30;
var Assignment_H = 10;
Assignment_G /= Assignment_H; // Assignment_G = Assignment_G / Assignment_H
document.write("<br> Assignment Division 30 /= 10 Is: ", Assignment_G);

// 5.Modulus
var Assignment_I = 30;
var Assignment_J = 11;
Assignment_I %= Assignment_J; // Assignment_I = Assignment_I % Assignment_J
document.write("<br> Assignment Modulus 30 %= 11 Is: ", Assignment_I);

// 6.Exponentiation
var Assignment_K = 30;
var Assignment_L = 10;
Assignment_K **= Assignment_L; // Assignment_K = Assignment_K ** Assignment_L
document.write("<br> Assignment Exponentiation 30 **= 10 Is: ", Assignment_K);

/**===== Console =====*/
// var consol = "Hello !";

// console.time("Demo");

// console.log("Hii");

// console.log(consol);

// console.log([1, 2, 3]);

// console.table([1, 2, 3]);

// console.error("Something went wrong.");

// console.warn("this is just warning..");

// // console.clear();

// console.timeEnd("Demo");

/**===== Comparison Operators =====*/
document.write("<hr><h3>Comparison Operators</h3>");

var Comparison_A = 10;
var Comparison_B = 20;
var Comparison_AB = Comparison_A == Comparison_B;
document.write("If 10 == 20 then value Is: ", Comparison_AB);

var Comparison_CD = Comparison_A === Comparison_B;
document.write("<br> If 10 === 20 then value Is: ", Comparison_CD);

var Comparison_EF = Comparison_A != Comparison_B;
document.write("<br> If 10 != 20 then value Is: ", Comparison_EF);

var Comparison_GH = Comparison_A !== Comparison_B;
document.write("<br> If 10 !== 20 then value Is: ", Comparison_GH);

var Comparison_IJ = Comparison_A > Comparison_B;
document.write("<br> If 10 > 20 then value Is: ", Comparison_IJ);

var Comparison_KL = Comparison_A >= Comparison_B;
document.write("<br> If 10 >= 20 then value Is: ", Comparison_KL);

var Comparison_MN = Comparison_A < Comparison_B;
document.write("<br> If 10 < 20 then value Is: ", Comparison_MN);

var Comparison_OP = Comparison_A <= Comparison_B;
document.write("<br> If 10 <= 20 then value Is: ", Comparison_OP);

var Comparison_Q = null;
var Comparison_R; //undefined
var Comparison_QR = Comparison_Q == Comparison_R;
document.write("<br> If null == undefined then value Is: ", Comparison_QR);

var Comparison_S = null;
var Comparison_T; //undefined
var Comparison_ST = Comparison_S === Comparison_T;
document.write("<br> If null === undefined then value Is: ", Comparison_ST, "<br>");

/**===== If Statement =====*/
document.write("<hr><h3>If Statement</h3>");

var If_1 = 100;
var If_2 = 20;

if (If_1 > If_2) {
    document.write("If_1 is Greater <br>");
}

var If_3 = 100;
var If_4 = 20;

if (If_3 != If_4) {
    document.write("If_3 isn't equal to If_4 <br>");
}

/**===== Logical Operators =====*/
document.write("<hr><h3>Logical Operators</h3>");

var D_age = 24;
var D_age2 = 30;

// 1. Logical && (And) Operator
if (D_age >= 20 && D_age <= 25) {
    document.write("Logical && value is true <br>");
}
if (D_age >= 20 && D_age2 <= 30) {
    document.write("Logical && value is true <br>");
}

// 2. Logical || (Or) Operator
if (D_age >= 25 || D_age <= 30) {
    document.write("Logical || value is true <br>");
}
if (D_age >= 25 || D_age2 <= 30) {
    document.write("Logical || value is true <br>");
}

// 3. Logical ! (Not) Operator
if (!D_age != 24) {
    document.write("Logical ! value is true <br>");
}
if (!(D_age != 24 && D_age2 >= 30)) {
    /** also we can apply this for multiple not equal = !D_age != 24 && !D_age2 >= 30 */
    document.write("Logical ! value is true <br>");
}

/**===== If Else Statement =====*/
document.write("<hr><h3>If Else Statement</h3>");

var If_else1 = 15;

if (If_else1 > 30) {
    document.write("If_else1 is Greater <br>");
} else {
    document.write("If_else1 is Smaller <br>");
}

var If_else2 = 150;

if (If_else2 == 150) {
    document.write("If_else2 is same <br>");
} else {
    document.write("If_else2 is not same <br>");
}

var If_else3_name = "Divyang";
var If_else3_surname = "Kakadiya";

if (If_else3_name == "Divyang") {
    document.write("My Name Is " + If_else3_name + " " + If_else3_surname + "<br>");
} else {
    document.write("My Name Is " + If_else3_surname + " " + If_else3_name + "<br>");
}

/**===== If Else If Statement =====*/
document.write("<hr><h3>If Else If Statement</h3>");

var percentage = 65;

if (percentage >= 80 && percentage <= 100) {
    document.write("You are in merit");
} else if (percentage >= 60 && percentage < 80) {
    document.write("You are in 1st division");
} else if (percentage >= 45 && percentage < 60) {
    document.write("You are in 2nd division");
} else if (percentage >= 33 && percentage < 45) {
    document.write("You are in 3rd division");
} else if (percentage < 33) {
    document.write("You are Fail");
} else {
    document.write("Please enter valid percentage");
}

/**===== Conditional (Ternary) Operator =====*/
document.write("<hr><h3>Conditional (Ternary) Operator</h3>");

var condi_ter_1 = 30;
var condi_ter_2;
var condi_ter_3;

condi_ter_1 == 30 ? (condi_ter_2 = "True") : (condi_ter_2 = "False");
condi_ter_2 = condi_ter_1 == 30 ? "True" : "False";
condi_ter_3 = "Value is " + (condi_ter_1 == 31 ? "True" : "False");

document.write(condi_ter_2, "<br>");
document.write(condi_ter_3, "<br>");

/**===== Switch Case Statement =====*/
document.write("<hr><h3>Switch Case Statement</h3>");

var switch_day1 = 3;

switch (switch_day1) {
    case 0:
        document.write("Today is Monday");
        break;

    case 1:
        document.write("Today is Tuesday");
        break;

    case 2:
        document.write("Today is Wednesday");
        break;

    case 3:
        document.write("Today is Thursday");
        break;

    case 4:
        document.write("Today is Friday");
        break;

    case 5:
        document.write("Today is Saturday");
        break;

    case 6:
        document.write("Today is Sunday");
        break;

    default:
        document.write("Enter The Valid Week Day");
        break;
}

document.write("<br>");

switch (switch_day1) {
    case 0:
    case 1:
    case 2:
        document.write("Today is Monday");
        break;

    case 3:
        document.write("Today is Thursday");
        break;

    case 4:
        document.write("Today is Friday");
        break;

    case 5:
        document.write("Today is Saturday");
        break;

    case 6:
        document.write("Today is Sunday");
        break;

    default:
        document.write("Enter The Valid Week Day");
        break;
}

document.write("<br>");

var switch_fruit = "Banana";

switch (switch_fruit) {
    case "Oranges":
        document.write("Oranges are $0.59 a pound.");
        break;

    case "Apples":
        document.write("Apples are $0.32 a pound.");
        break;

    case "Bananas":
        document.write("Bananas are $0.48 a pound.");
        break;

    case "Cherries":
        document.write("Cherries are $3.00 a pound.");
        break;

    case "Mangoes":
        document.write("Mangoes are $0.56 a pound.");
        break;

    case "Papayas":
        document.write("Papayas are $2.79 a pound.");
        break;

    default:
        document.write(`Sorry, we are out of ${switch_fruit}.`);
        break;
}

document.write("<br>");

var switch_age = 25;

switch (true) {
    case switch_age >= 15 && switch_age <= 20:
        document.write("You are not eligible.");
        break;

    case switch_age >= 21 && switch_age <= 30:
        document.write("You are eligible.");
        break;

    default:
        document.write("Enter the valid age.");
        break;
}

/**===== Alert Box =====*/
// alert("Hello Everyone");

/**===== Confirm Box =====*/
// var website = confirm("do you like our website ?");

// // alert(website);
// if (website) {
//     alert("thanks");
// } else {
//     alert("Okay, No problem");
// }

/**===== Prompt Box =====*/
// var prompt1 = prompt("What is your First Name : ")
// var prompt2 = prompt("What is your Last Name : ")

// // alert(prompt1);
// // alert(prompt2);

// document.write(prompt1, "<br>");
// document.write(prompt2, "<br>");

// var prompt_percentage = prompt("Enter Your Percentage : ");

// if (prompt_percentage >= 80 && prompt_percentage <= 100) {
//     document.write("You are in merit");
// } else if (prompt_percentage >= 60 && prompt_percentage < 80) {
//     document.write("You are in 1st division");
// } else if (prompt_percentage >= 45 && prompt_percentage < 60) {
//     document.write("You are in 2st division");
// } else if (prompt_percentage >= 33 && prompt_percentage < 45) {
//     document.write("You are in 3st division");
// } else if (prompt_percentage < 33) {
//     document.write("You are in merit");
// } else {
//     document.write("Please entre valid percentage");
// }

document.write("<br>");

/**===== Functions =====*/
document.write("<hr><h3>Functions</h3>");

// 1.Basic
function Fun1() {
    document.write("Hello Everyone!!");
}

Fun1();
document.write("<br>");
Fun1();
document.write("<br>");

function Fun2() {
    document.write("Hii, My Name Is Divyang Kakadiya");
}

Fun2();
document.write("<br>");

// 2.With Parameters
function Fun3(fname, lname) {
    document.write("Hello" + " " + fname + " " + lname);
}

Fun3("Divyang", "Kakadiya");
document.write("<br>");
Fun3(5, 10);
document.write("<br>");

function Fun4(Fun4_1 = 10, Fun4_2 = 10) {
    //parameters default value
    document.write(Fun4_1 * Fun4_2);
}

Fun4(); //default value
document.write("<br>");

Fun4(10, 5);
document.write("<br>");

Fun4(55, 10);
document.write("<br>");

// 3.With Return Value
//// percentage in different multiple function
// function subjects_sum(math, guj, eng, sci) {
//     var subjects = math + guj + eng + sci;
//     return subjects;
// }

// var subjects_total = subjects_sum(70, 60, 65, 95);

// function percentag(perc1) {
//     var percentage = (perc1 / 400) * 100;
//     document.write("Percentage Is : " + percentage + "%");
// }

// percentag(subjects_total);

// percentage in single function
function subjects_sum(math, guj, eng, sci) {
    var subjects = math + guj + eng + sci;
    var percentage = (subjects / (4 * 100)) * 100;
    return percentage;
}

var subjects_total = subjects_sum(70, 60, 65, 95);

document.write("Percentage Is: <b>" + subjects_total + "%</b>");

/**===== Global & Local Variables =====*/
document.write("<hr><h3>Global & Local Variables</h3>");

var global = "Hii";

function global_fun() {
    var local = "Javascript";
    document.write(global + " " + local);
}

global_fun();
document.write("<br>");
document.write(global);

/**===== Events =====*/
document.write("<hr><h3>Events</h3>");

// 1.Click
function clickme() {
    alert("Clicked");
}

document.write("<button onclick='clickme()'>On Click</button><br>");

// 2.Double Click
function doubleclickme() {
    alert("Double Clicked");
}

document.write("<button ondblclick='doubleclickme()'>Double Click</button><br>");

// 3.Right Click
function rightclickme() {
    alert("Right Clicked");
}

document.write("<button oncontextmenu='rightclickme()'>Right Click</button><br>");

// 4.Mouse Hover
function mousehoverme() {
    alert("Mouse Hovered");
}

document.write("<button onmouseenter='mousehoverme()'>Mouse Hover</button><br>");

// 5.Mouse Out
function mouseoutme() {
    alert("Mouse Out");
}

document.write("<button onmouseout='mouseoutme()'>Mouse Out</button><br>");

// 6. Mouse Down
function mousedownme() {
    alert("Mouse Down");
}

document.write("<button onmousedown='mousedownme()'>Mouse Down</button><br>");

// 7. Mouse Up
function mouseupme() {
    alert("Mouse Up");
}

document.write("<button onmouseup='mouseupme()'>Mouse Up</button><br>");

// 8. Key Press (onkeypress = Keyboard Event add in the body tag)
function keypressme() {
    alert("Key Pressed");
}

// 9. Key Up (Windows Event add in the body tag)
function keyupme() {
    alert("Key Up");
}

// 10. Resize (onresize = Windows Event add in the body tag)
function window_resize() {
    alert("Window Resize");
}

// 11. Scroll (onscroll = Windows Event add in the body tag)
function window_scroll() {
    alert("Window Scroll");
}

// 12. Load (onload = Windows Event add in the body tag)
function window_load() {
    alert("Window Load");
}

// 13. Unload (onunload = Windows Event add in the body tag)
function window_unload() {
    alert("Window Unload");
}

/**===== While Loop =====*/
document.write("<hr><h3>While Loop</h3>");

// 1.Example
var whileloop1 = 1;
while (whileloop1 <= 10) {
    document.write("<br>" + whileloop1 + "Whileloop Item");
    whileloop1 += 1; // whileloop1 = whileloop1 + 1
}

document.write("<br>");
document.write("<br>");

// 2.Example
let whileloop2 = 0;
let whileloop3 = 0;
while (whileloop2 <= 10) {
    document.write(whileloop2, " ");
    whileloop2++; //increment 1
    document.write(whileloop3, "<br>");
    whileloop3 += whileloop2; //whileloop3 = whileloop3 + whileloop2
}

document.write("<br>");

// 3.Example
var whileloop4 = 0;
document.write("<ul>");
while (whileloop4 <= 10) {
    document.write("<li>" + whileloop4 + ") Whileloop </li>");
    whileloop4 += 1;
}
document.write("</ul><br>");

// 4.Example
var whileloop5 = 10;
document.write("<ul>");
while (whileloop5 >= 1) {
    document.write("<li>" + whileloop5 + ") Whileloop </li>");
    whileloop5 -= 1; //whileloop5 = whileloop5 - 1
}
document.write("</ul>");

/**===== Do / While Loop =====*/
document.write("<hr><h3>Do / While Loop</h3>");

// 1.Example
var dowhileloop1 = 1;

do {
    document.write("<br>" + dowhileloop1 + " Do while Loop");
    dowhileloop1++;
} while (dowhileloop1 <= 10);

document.write("<br>");

// 2.Example
let dowhileloop2 = 0;
do {
    document.write("<br>" + dowhileloop2);
    dowhileloop2 += 1;
} while (dowhileloop2 < 5);

document.write("<br>");

/**===== For Loop =====*/
document.write("<hr><h3>For Loop</h3>");

// 1.Example
for (let forloop1 = 0; forloop1 <= 10; forloop1++) {
    document.write("<br>" + forloop1 + " For Loop");
}

document.write("<br>");

// 2.Example
const forloop2 = 15;
for (let i = 1; i <= forloop2; i++) {
    document.write("<br>" + i + " I love JavaScript.");
    // console.log(i);
}

document.write("<br>");

// 3.Example
let forloop3 = 0;
const forloop4 = 10;
for (let i = 1; i <= forloop4; i++) {
    forloop3 += i; // forloop3 = forloop3 + i
    document.write("<br>" + forloop3 + " sume");
}

document.write("<br>");

// 4.Example
let forloop5 = 0;
const forloop6 = 10;
for (let i = forloop6; i >= 1; i--) {
    forloop5 += i; // forloop5 = forloop5 + i
    document.write("<br>" + forloop5 + " sum");
}

document.write("<br>");

/**===== Break & Continue Statement =====*/
document.write("<hr><h3>Break & Continue Statement</h3><br>");

// 1.Example
for (let i = 1; i <= 10; i++) {
    if (i == 5) {
        document.write("Hey " + i + "<br>");
    }
    document.write("Number " + i + "<br>");
}

document.write("<br>");

// 2.Example
for (let i = 1; i <= 10; i++) {
    if (i == 5) {
        document.write("Hey " + i + "<br>");
        continue;
    }
    document.write("Number " + i + "<br>");
}

document.write("<br>");

// 3.Example
for (let i = 1; i <= 10; i++) {
    if (i == 5) {
        document.write("Hey " + i + "<br>");
        break;
    }
    document.write("Number " + i + "<br>");
}

/**===== Find Even & Odd Numbers with Loops =====*/
document.write("<hr><h3>Find Even & Odd Numbers with Loops</h3>");

// 1. Even
for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        document.write("<br>" + i + " Even");
    }
}

document.write("<br>");

// 2. Odd
for (let i = 1; i <= 20; i++) {
    if (i % 2 != 0) {
        document.write("<br>" + i + " Odd");
    }
}

document.write("<br>");

// 3. Odd & Even
for (let i = 1; i <= 20; i++) {
    if (i % 2 != 0) {
        document.write("<br>" + i + " Odd");
    } else if (i % 2 == 0) {
        document.write("<br>" + i + " Even");
    }
}

document.write("<br>");

/**===== Nested Loop =====*/
document.write("<hr><h3>Nested Loop</h3>");

// 1.Example
document.write("<h4>Nested Loop Example 1</h4>");
for (var nestloop1 = 1; nestloop1 <= 100; nestloop1 += 10) {
    //nestloop1 = nestloop1 + 10
    for (var nestloop2 = nestloop1; nestloop2 < nestloop1 + 10; nestloop2++) {
        document.write(nestloop2 + " ");
    }
    document.write("<br>");
}

document.write("<br>");

// 2.Example
document.write("<h4>Nested Loop Example 2</h4>");
for (var nestloop3 = 1; nestloop3 <= 5; nestloop3++) {
    for (var nestloop4 = 1; nestloop4 <= nestloop3; nestloop4++) {
        document.write(nestloop4 + " ");
    }
    document.write("<br>");
}

// 3.Example
document.write("<h4>Nested Loop Example 3</h4>");
for (var nestloop5 = 1; nestloop5 <= 5; nestloop5++) {
    for (var nestloop6 = 1; nestloop6 <= nestloop5; nestloop6++) {
        document.write(nestloop5 + " ");
    }
    document.write("<br>");
}

// 4.Example
document.write("<h4>Nested Loop Example 4</h4>");
for (var nestloop7 = 5; nestloop7 >= 1; nestloop7--) {
    for (var nestloop8 = 1; nestloop8 <= nestloop7; nestloop8++) {
        document.write(nestloop7 + " ");
    }
    document.write("<br>");
}

// 5.Example
document.write("<h4>Nested Loop Example 5</h4>");
for (var nestloop9 = 5; nestloop9 >= 1; nestloop9--) {
    for (var nestloop10 = nestloop9; nestloop10 >= 1; nestloop10--) {
        document.write(nestloop10 + " ");
    }
    document.write("<br>");
}

document.write("<br>");
document.write("<hr>");
document.write("<br>");

/**===== Arrays =====*/
// 1.Example
document.write("<h3>Arrays Example 1</h3>");
var ary1 = [10, 20, 30, 40, 50];
// this both same
// var ary1 = new Array(10, 20, 30, 40, 50);
var ary_sum = 0;

document.write(ary1[2]);
document.write("<br>");
document.write("<br>");

document.write("<ul>");
for (let ary_loop1 = 0; ary_loop1 < ary1.length; ary_loop1++) {
    document.write("<li>" + ary1[ary_loop1] + "</li>");
    ary_sum += ary1[ary_loop1]; //ary_sum = ary_sum + ary1[ary_loop1];
    // document.write("<li style='color: red;'>" + ary_sum + "</li>");
}
document.write("</ul>");

document.write("Array 1 Total Sum : " + ary_sum);

document.write("<br>");
document.write("<br>");

// 2.Example
document.write("<h3>Arrays Example 2</h3>");
var ary2 = new Array();

ary2[0] = 11;
ary2[1] = 21;
ary2[2] = 31;

document.write("<ul>");
for (let ary_loop2 = 0; ary_loop2 < ary2.length; ary_loop2++) {
    document.write("<li>" + ary2[ary_loop2] + "</li>");
}
document.write("</ul>");

// 3.Example
// document.write("<h3>Arrays Example 3</h3>");
// var ary3 = new Array(3);

// for (let get_ary3_val = 0; get_ary3_val < 3; get_ary3_val++) {
//     ary3[get_ary3_val] = prompt("Enter The Value Here : ");
// }

// document.write("<ul>");
// for (let ary_loop3 = 0; ary_loop3 < ary3.length; ary_loop3++) {
//     document.write("<li>" + ary3[ary_loop3] + "</li>");
// }
// document.write("</ul>");
document.write("<br>");

// 4.Example
document.write("<h3>Multidimensional Array</h3>");
var m_ary1 = [
    ["Divyang", "Male", 24, "Designer"],
    ["Roshan", "Male", 22, "Designer"],
    ["Niranjan", "Male", 24, "Designer"],
    ["Himay", "Male", 23, "Developer"],
    ["Sam", "Male", 22, "Developer"],
    ["Swapnil", "Male", 25, "Developer"],
];

// document.write(m_ary1);
document.write(m_ary1[0][0]); //Divyang
document.write("<br>");
// var m_ary1_length = m_ary1.length; //this is array length
// document.write("https://www.programiz.com/javascript/multidimensional-array")

document.write("<table border='1px'>");
for (let a = 0; a < m_ary1.length; a++) {
    document.write("<tr>");
    // var m_ary1_inner_length = m_ary1[a].length; //this is array inner(col) length, inside array pass row array
    for (let b = 0; b < m_ary1[a].length; b++) {
        document.write("<td>" + m_ary1[a][b] + "</td>");
    }
    document.write("</tr>");
}
document.write("</table>");
document.write("<br>");

// 5.Example
document.write("<h3>Modify & Delete Array Elements</h3>");

var mod_del = ["Divyang", "Patidar", 24, "Web Designer"];

document.write(mod_del + "<br>");
mod_del[1] = "Kakadiya";
document.write(mod_del + "<br>");
delete mod_del[2];
document.write(mod_del + "<br>");
document.write(mod_del[2] + "<br>");
document.write("<br>");

// 6.Example
document.write("<h3>Array Methods</h3>");

// 6.1(Sort)
// document.write("https://www.programiz.com/javascript/library/array/sort")
document.write("<h4>1.Sort</h4>");

// A
var sort1 = ["Divyang", "Niranjan", "Roshan", "Himay", "Swapnil"];

document.write("A) " + sort1 + "<br>");
sort1.sort();
document.write("A) " + sort1 + "<br>");

// B
var sort2 = [1000, 50, 2, 7, 14];

document.write("B) " + sort2 + "<br>");
sort2.sort();
document.write("B) " + sort2 + "<br>");

// C
// sort according to string length
var sort3 = ["Divyang", "Niranjan", "Roshan", "Himay", "Swapnil"];

document.write("C) " + sort3);
document.write("<br>");

function length_compare(a, b) {
    var length_compare_var = a.length - b.length;
    return length_compare_var;
}

sort3.sort(length_compare);

document.write("C) " + sort3);
document.write("<br>");
document.write("<br>");

// 6.2(Reverse)
document.write("<h4>2.Reverse</h4>");

// A
var reverse1 = ["Divyang", "Niranjan", "Roshan", "Himay", "Swapnil"];

document.write("A) " + reverse1 + "<br>"); //default
reverse1.sort();
document.write("A) " + reverse1 + "<br>"); //sort
reverse1.reverse();
document.write("A) " + reverse1 + "<br>"); //reverse

// B
let reverse2 = ["Divyang", "Niranjan", "Roshan", "Himay", "Swapnil"];

document.write("B) " + reverse2 + "<br>");
let reverse2_var = reverse2.reverse();
document.write("B) " + reverse2 + "<br>");

// C
document.write("<h5>Spread Operator</h5>");
// spread operator(...)
let reverse3 = ["Divyang", "Niranjan", "Roshan", "Himay", "Swapnil"];

document.write("C) " + reverse3 + "<br>");
let reverse3_var = [...reverse3].reverse();
document.write("C) " + reverse3_var + "<br>");
document.write("C) " + reverse3 + "<br>");
document.write("<br>");

// 6.3(Pop)
document.write("<h4>3.Pop</h4>");

// A
var pop1 = ["Divyang", "Niranjan", "Roshan", "Himay", "Swapnil"];

document.write("A) " + pop1 + "<br>");
var removed_pop1 = pop1.pop();
document.write("A) " + pop1 + "<br>");
document.write("A) " + removed_pop1 + "<br>");

// B
var pop2 = [
    [1, 2, 3, 4, 5],
    [10, 20, 30, 40, 50],
    [100, 200, 300, 400, 500],
];

document.write("B) " + pop2 + "<br>");
var removed_pop2 = pop2.pop();
document.write("B) " + pop2 + "<br>");
document.write("B) " + removed_pop2 + "<br>");
document.write("<br>");

// 6.4(Push)
document.write("<h4>4.Push</h4>");

// A
var push1 = ["Divyang", "Niranjan", "Roshan", "Himay", "Swapnil"];

document.write("A) " + push1 + "<br>");
var push1_add = push1.push("Sam");
document.write("A) " + push1 + "<br>");
var push1_add = push1.push("Rk", "Rv");
document.write("A) " + push1 + "<br>");
document.write("<br>");

// 6.5(Shift)
document.write("<h4>5.Shift</h4>");

// A
var shift1 = ["Divyang", "Niranjan", "Roshan", "Himay", "Swapnil"];

document.write("A) " + shift1 + "<br>");
shift1.shift();
document.write("A) " + shift1 + "<br>");
document.write("<br>");

// 6.6(Unshift)
document.write("<h4>6.Unshift</h4>");

// A
var unshift1 = ["Divyang", "Niranjan", "Roshan", "Himay", "Swapnil"];

document.write("A) " + unshift1 + "<br>");
unshift1.unshift("Rk");
document.write("A) " + unshift1 + "<br>");
document.write("<br>");

// 6.7(Concat)
document.write("<h4>7.Concat</h4>");

// A
var concat1 = ["Divyang", "Niranjan", "Roshan", "Himay", "Swapnil"];

document.write("A) " + concat1 + "<br>");
var concat2 = concat1.concat("Rk", "Rv");
document.write("A) " + concat2 + "<br>");
var concat3 = ["Sam", "Tarun"];
var concat4 = concat1.concat(concat3);
document.write("A) " + concat4 + "<br>");
var concat5 = concat2.concat(concat3);
document.write("A) " + concat5 + "<br>");
document.write("<br>");

// 6.8(Join)
document.write("<h4>8.Join</h4>");

// A
var join1 = ["Divyang", "Niranjan", "Roshan", "Himay", "Swapnil"];

document.write("A) " + join1 + "<br>");
var join2 = join1.join(" ");
document.write("A) " + join2 + "<br>");
var join3 = join1.join(" - ");
document.write("A) " + join3 + "<br>");
var join4 = join1.join(" / ");
document.write("A) " + join4 + "<br>");
document.write("<br>");

// 6.9(Slice)
document.write("<h4>9.Slice</h4>");

// A
var slice1 = ["Divyang", "Niranjan", "Roshan", "Himay", "Swapnil"];

document.write("A) " + slice1 + "<br>");
var slice2 = slice1.slice(2);
document.write("A) " + slice2 + "<br>");
var slice3 = slice1.slice(1, 3);
document.write("A) " + slice3 + "<br>");
var slice4 = slice1.slice(-3, -1);
document.write("A) " + slice4 + "<br>");
document.write("<br>");

// 6.10(Splice)
document.write("<h4>10.Splice</h4>");

// A
var splice1 = ["Divyang", "Niranjan", "Roshan", "Himay", "Swapnil"];

document.write("A) " + splice1 + "<br>");
var splice2 = splice1.splice(1, 2, "Rk", "Rv");
document.write("A) " + splice1 + "<br>");
document.write("A) " + splice2 + "<br>");
var splice3 = splice1.splice(2, 2, "Dk", "Nam");
document.write("A) " + splice1 + "<br>");
document.write("A) " + splice3 + "<br>");
var splice4 = splice1.splice(2, 2);
document.write("A) " + splice1 + "<br>");
document.write("A) " + splice4 + "<br>");
document.write("<br>");

// 6.11(isArray)
document.write("<h4>11.isArray</h4>");

// A
var isary1 = ["Divyang", "Niranjan", "Roshan", "Himay", "Swapnil"];

document.write("A) " + isary1 + "<br>");
var isary2 = Array.isArray(isary1);
document.write("A) " + isary2 + "<br>");

var isary3 = 98;
var isary4 = Array.isArray(isary3);
document.write("A) " + isary3 + "<br>");
document.write("A) " + isary4 + "<br>");

var isary5 = "111";
var isary6 = Array.isArray(isary5);
document.write("A) " + isary5 + "<br>");
document.write("A) " + isary6 + "<br>");

if (isary2) {
    document.write("This is an Array");
} else {
    document.write("This isn't an Array");
}
document.write("<br>");
document.write("<br>");

// 6.12(indexOf)
document.write("<h4>12.indexOf</h4>");

var indexof1 = ["Divyang", "Niranjan", "Roshan", "Divyang", "Swapnil"];

// A
document.write("A) " + indexof1 + "<br>");
var indexof2 = indexof1.indexOf("Divyang");
document.write("A) " + indexof2 + "<br>");
var indexof3 = indexof1.indexOf("Divyang", 2);
document.write("A) " + indexof3 + "<br>");
document.write("<br>");

// 6.13(lastIndexOf)
document.write("<h4>13.lastIndexOf</h4>");

var lastIndexOf1 = ["Divyang", "Niranjan", "Roshan", "Divyang", "Swapnil"];

// A
document.write("A) " + lastIndexOf1 + "<br>");
var lastIndexOf2 = lastIndexOf1.lastIndexOf("Roshan");
document.write("A) " + lastIndexOf2 + "<br>");
var lastIndexOf3 = lastIndexOf1.lastIndexOf("Divyang", 3);
document.write("A) " + lastIndexOf3 + "<br>");
document.write("<br>");

// 6.14(Includes)
document.write("<h4>14.Includes</h4>");

var includes1 = ["Divyang", "Niranjan", "Roshan", "Himay", "Swapnil"];

// A
document.write("A) " + includes1 + "<br>");
var includes2 = includes1.includes("Divyang");
document.write("A) " + includes2 + "<br>");

if (includes2 === true) {
    document.write("A) " + "Name is Found");
} else {
    document.write("A) " + "Name isn't Found");
}
document.write("<br>");
document.write("<br>");

// 6.15(Some)
document.write("<h4>15.Some</h4>");

var some_ages1 = [8, 16, 24, 32, 40];

// A
document.write("A) " + some_ages1 + "<br>");
var some_ages2 = some_ages1.some(checkAdultSomeAges);
document.write("A) " + some_ages2 + "<br>");

function checkAdultSomeAges(check_age) {
    return check_age >= 18;
}
document.write("<br>");

// 6.16(Every)
document.write("<h4>16.Every</h4>");

var every1 = [8, 16, 24, 32, 40];

// A
document.write("A) " + every1 + "<br>");
var every2 = every1.every(checkAdultEveryAges);
document.write("A) " + every2 + "<br>");

function checkAdultEveryAges(check_age) {
    return check_age <= 50;
}
document.write("<br>");

// 6.17(Find)
document.write("<h4>17.Find</h4>");

var find1 = [16, 8, 32, 24, 40];

// A
document.write("A) " + find1 + "<br>");
var find2 = find1.find(findAge);
document.write("A) " + find2 + "<br>");

function findAge(f_age) {
    return f_age >= 18;
}

// B
document.write("B) " + find1 + "<br>");
var find3 = find1.sort();
document.write("B) " + find3 + "<br>");
var find4 = find1.find(findAge);
document.write("B) " + find4 + "<br>");
document.write("<br>");

// 6.18(Find Index)
document.write("<h4>18.Find Index</h4>");

var findindex1 = [16, 8, 32, 24, 40];

// A
document.write("A) " + findindex1 + "<br>");
var findindex2 = findindex1.find(findAge);
var findindex3 = findindex1.findIndex(findAge);
document.write("A) " + findindex2 + "(index is : " + findindex3 + ")" + "<br>");
document.write("<br>");

// 6.19(Filter)
document.write("<h4>19.Filter</h4>");

var filter1 = [16, 8, 32, 24, 40, 50, 35, 55];

// A
document.write("A) " + filter1 + "<br>");
var filter2 = filter1.filter(check_Age);
document.write("A) " + filter2 + "<br>");

function check_Age(age) {
    return age >= 18;
}

// B
document.write("B ) " + filter1 + "<br>");
var filter3 = filter1.filter(check_even_filter);
document.write("B ) " + filter3 + "<br>");
var filter4 = filter1.filter(check_odd_filter);
document.write("B ) " + filter4 + "<br>");

function check_even_filter(age) {
    return age % 2 == 0;
}

function check_odd_filter(age) {
    return age % 2 != 0;
}
document.write("<br>");

// 6.20(To String)
document.write("<h4>20.To String</h4>");

var toString1 = ["Divyang", "Niranjan", "Roshan", "Himay", "Swapnil"];

// A
document.write("A) " + toString1 + "<br>");
toString1.toString();
// ! when we are change array to string, then any array's default functions not working on that array.
document.write("A) " + toString1 + "<br>");
document.write("<br>");

// 6.21(Value Of)
document.write("<h4>21.Value Of</h4>");

var valueof1 = ["Divyang", "Niranjan", "Roshan", "Himay", "Swapnil"];

// A
document.write("A) " + valueof1 + "<br>");
valueof1.valueOf();
document.write("A) " + valueof1 + "<br>");
document.write("<br>");

// 6.22(Fill)
document.write("<h4>22.Fill</h4>");

var fill1 = ["Divyang", "Niranjan", "Roshan", "Himay", "Swapnil"];

// A
document.write("A) " + fill1 + "<br>");
var fill2 = fill1.fill("Krishna");
document.write("A) " + fill2 + "<br>");

// B
var fill3 = fill1.fill("Rk", 2);
document.write("B) " + fill3 + "<br>");

// C
var fill4 = fill1.fill("Dk", 2, 4);
document.write("C) " + fill4 + "<br>");

/**===== For Each Loop =====*/
document.write("<br><h3>For Each Loop</h3>");

// 1.Example
var foreach1 = ["Divyang", "Niranjan", "Roshan", "Himay", "Swapnil"];

foreach1.forEach(function (value, index) {
    document.write(index + " : " + value + "<br>");
});
document.write("<br>");

// 2.Example
var foreach2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function foreach_func2(num) {
    document.write(num * num + "<br>");
}

foreach2.forEach(foreach_func2);
document.write("<br>");

// 3.Example
var foreach3 = [1500, 1800, 2100, , 2700, 3000, 3300];

//! in this case, it skips the third element as it is empty
function foreach_func3(element, index) {
    document.write("ForEach Array " + index + ": " + element + "<br>");
}

foreach3.forEach(foreach_func3);

/**===== Objects =====*/
document.write("<br>");
document.write("<h2>Objects</h2>");

// 1.Example
var object1 = {
    Fname: "Divyang",
    Lname: "Kakadiya",
    Age: 24,
    Email: "divyangkakdiya@gmail.com",
    Favmovies: ["Abcd2", "Sholay", "Avatar", "Money Heist"],
    Fullname: function () {
        return this.Fname + " " + this.Lname;
    },
    Living: {
        Village: "Simada Gam",
        District: "Surat",
        State: "Gujarat",
        Country: "India",
        Fname: "Divyang",
        Vill_Dis: function () {
            return this.Village + ", " + this.District;
        },
    },
};

// console.log(object1);
document.write(object1.Fname + "<br>"); //Value
document.write(object1["Fname"] + "<br>"); //Value
document.write(object1.Fullname() + "<br>"); //Function
document.write(object1.Favmovies + "<br>"); //Array
document.write(object1.Living.Village + "<br>"); //Object in Object property
document.write(object1.Living.Vill_Dis() + "<br>"); //Object in Object in function

// 2.Example
var object2 = new Object();

object2.f_name = "Dk";
object2.l_name = "Geek";
object2.age = 25;

// console.log(object2);
document.write(object2.age);
document.write("<br>");
document.write("<br>");

document.write("<h3>Array Of Objects</h3>");

// 1.Example
var ArrayObject = [
    {
        f_name: "Divyang",
        l_name: "kakadiya",
        age: 25,
        designation: "Designer",
    },
    {
        f_name: "Roshan",
        l_name: "Geek",
        age: 22,
        designation: "Designer",
    },
    {
        f_name: "Rk",
        l_name: "Geek",
        age: 34,
        designation: "Developer",
    },
    {
        f_name: "Rv",
        l_name: "Geek",
        age: 34,
        designation: "",
    },
];

for (let a = 0; a < ArrayObject.length; a++) {
    document.write(ArrayObject[a].f_name + " " + ArrayObject[a].l_name + " " + ArrayObject[a].age + " " + ArrayObject[a].designation + "<br>");
}
document.write("<br>");

document.write("<h3>Const Variable with Array & Objects</h3>");

document.write("<h4>Const Variable with Array</h4>");

// 1.Example
const const_var1 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

document.write(const_var1);
document.write("<br>");

const_var1[2] = 31;
const_var1[3] = 41;
document.write(const_var1);
document.write("<br>");
document.write("<br>");

document.write("<h4>Const Variable with Objects</h4>");

// 2.Example
const const_var_2 = {
    f_name: "ABC",
    l_name: "XYZ",
    age: 35,
    designation: "HIJ",
};

document.write(const_var_2.f_name + " " + const_var_2.l_name);
document.write("<br>");

const_var_2.f_name = "MNO";
const_var_2.l_name = "PQR";
document.write(const_var_2.f_name + " " + const_var_2.l_name);
document.write("<br>");
document.write("<br>");

document.write("<h3>For in Loop</h3>");

document.write("<h4>With Objects</h4>");

// 1.Example
var Obj1 = {
    FirstName: "Dk",
    LastName: "Geek",
    Age: 25,
    Village: "Thadach",
    Email: "divyanggeek435@gmail.com",
};

for (var key in Obj1) {
    document.write(key + " : " + Obj1[key] + "<br>");
}

document.write("<br>");

// 2.Example
var Obj2 = {
    Name: "XYZ",
    Class: 10,
    Age: 25,
};

for (let key in Obj2) {
    // document.write(key + " => " + Obj2[key]);
    document.write(`${key} => ${Obj2[key]} <br>`);
}

document.write("<br>");

// 3.Example
const Obj3Salary = {
    A: 25000,
    B: 30000,
    C: 35000,
    D: 40000,
};

for (let key in Obj3Salary) {
    // add a currency symbol before the price
    let SalaryWithSymbol = "$" + Obj3Salary[key];

    // display the value
    document.write(`${key} : ${SalaryWithSymbol} <br>`);
}

// 4.Example
var ArrayObjectXY = [
    {
        f_name: "Divyang",
        l_name: "kakadiya",
        age: 25,
        designation: "Designer",
    },
    {
        f_name: "Roshan",
        l_name: "Geek",
        age: 22,
        designation: "Designer",
    },
    {
        f_name: "Rk",
        l_name: "Geek",
        age: 34,
        designation: "Developer",
    },
    {
        f_name: "Rv",
        l_name: "Geek",
        age: 34,
        designation: "",
    },
];

document.write("<br>");

document.write("<table border='1px'>");
for (let x in ArrayObjectXY) {
    document.write("<tr>");
    for (let y in ArrayObjectXY[x]) {
        document.write("<td>" + ArrayObjectXY[x][y] + "</td>");
    }
    document.write("</tr>");
}
document.write("</table>");

document.write("<br>");

document.write("<h4>With String</h4>");

// 1.Example
const ObjString = "CodeWithDk";

for (let key in ObjString) {
    document.write(`<span class="${ObjString[key]}${key}">${ObjString[key]}</span> <br>`);
}

document.write("<br>");

document.write("<h4>With Array</h4>");

// 1.Example
const ForInWithArray1 = ["Hii", 10, "Javascript"];

for (let x in ForInWithArray1) {
    document.write(`${ForInWithArray1[x]} <br>`);
}

/**===== Map Method =====*/
document.write("<br>");
document.write("<h2>Map Method</h2>");

// 1.Example
var map1 = [10, 20, 30, 50];

var map2 = map1.map(map_fun1);

function map_fun1(x) {
    // return `${x * 10} <br>`;
    return x * 10;
}

document.write(map2);
document.write("<br>");

// 2.Example
var map3 = [
    { Fname: "X", Lname: "Geek" },
    { Fname: "Y", Lname: "Geek" },
    { Fname: "Z", Lname: "Geek" },
];

var map4 = map3.map(map_fun2);

function map_fun2(d) {
    return d.Fname;
}

document.write(map4);
document.write("<br>");

/**===== String Method =====*/
document.write("<br>");
document.write("<h2>String Method</h2>");

document.write("<h3>1.Length</h3>");

// 1. Example
var str1 = "Javascript is Most Popular language.";
var str2 = str1.length;

document.write(str2);

document.write("<br>");

// 2. Example
let str3 = "I love Js";
let S_Length = str3.length;

document.write(S_Length);
document.write("<br>");

document.write("<h3>2.toLowerCase</h3>");

// 1.Example
let toLow1 = "JAVASCRIPT IS FUN!";
let toLow1Str = toLow1.toLowerCase();

document.write(toLow1Str);
document.write("<br>");

// 2.Example
let toLow2 = "Hello World!";
let toLow3 = "Java is to JavaScript what Car is to Carpet.";

let toLow2Str = toLow2.toLowerCase();
document.write(toLow2Str);
document.write("<br>");

let toLow3Str = toLow3.toLowerCase();
document.write(toLow3Str);

document.write("<br>");
document.write("<br>");

document.write("<h3>3.toUpperCase</h3>");

// 1.Example
let toUpp1 = "i love js";
let toUpp1Str = toUpp1.toUpperCase();

document.write(toUpp1Str);
document.write("<br>");

// 2.Example
let toUpp2 = "lowercase to uppercase.";
let toUpp2Str = toUpp2.toUpperCase();

document.write(toUpp2Str);
document.write("<br>");
document.write("<br>");

document.write("<h3>4.includes</h3>");

// 1.Example
var incl1 = "Javascript is Most Popular language.";
var incl1Str = incl1.includes("Popular");

document.write(incl1Str);
document.write("<br>");

// 2.Example
var incl2Str = incl1.includes("ript");
document.write(incl2Str);
document.write("<br>");
document.write("<br>");

document.write("<h3>5.startsWith</h3>");

// 1.Example
var staWith1 = "Javascript is Most Popular language.";
var staWith1Str = staWith1.startsWith("Java");

document.write(staWith1Str);
document.write("<br>");

// 2.Example
var staWith2Str = staWith1.startsWith("Javascript");
document.write(staWith2Str);
document.write("<br>");

// 3.Example
var staWith3Str = staWith1.startsWith("script");
document.write(staWith3Str);

document.write("<br>");
document.write("<br>");

document.write("<h3>6.endsWith</h3>");

// 1.Example
var endWith1 = "Javascript is Most Popular language";
var endWith1Str = endWith1.endsWith("language");

document.write(endWith1Str);
document.write("<br>");

// 2.Example
var endWith2 = "Java is to JavaScript what Car is to Carpet.";
var endWith2Str = endWith2.endsWith("Carp");

document.write(endWith2Str);

document.write("<br>");
document.write("<br>");

document.write("<h3>7.search</h3>");

// 1.Example
var sear1 = "Java is to JavaScript what Car is to Carpet.";
var sear2 = sear1.search("JavaScript");

document.write(sear2);
document.write("<br>");

// 2.Example
var sear3 = sear1.search("Java");
document.write(sear3);

document.write("<br>");
document.write("<br>");

document.write("<h3>8.match</h3>");

// 1.Example
var mach1 = "Java is to JavaScript what Car is to Carpet.";
var mach2 = mach1.match(/is/g);
document.write(mach2);

document.write("<br>");
document.write("<br>");

document.write("<h3>9.indexOf</h3>");

// 1.Example
var indx1 = "Java is to JavaScript what Car is to Carpet.";
var indx2 = indx1.indexOf("is");
document.write(indx2);

document.write("<br>");
document.write("<br>");

document.write("<h3>10.lastIndexOf</h3>");

// 1.Example
var lasindx1 = "Java is to JavaScript what Car is to Carpet.";
var lasindx2 = lasindx1.lastIndexOf("is");
document.write(lasindx2);

document.write("<br>");
document.write("<br>");

document.write("<h3>11.replace</h3>");

// 1.Example
var repl1 = "Java is to JavaScript what Car is to Carpet.";
var repl2 = repl1.replace("JavaScript", "PHP");
document.write(repl2);

document.write("<br>");

// 2.Example
var repl3 = "The quick brown fox jumps over the fox lazy dog";
var repl4 = repl3.replace(/fox/g, "OR");
document.write(repl4);

document.write("<br>");
document.write("<br>");

document.write("<h3>12.trim</h3>");

// 1.Example
var trm1 = "        The quick brown fox jumps over the fox lazy dog          ";
var trm2 = trm1.trim();
// alert(trm1);
// console.log(trm1);
document.write("<br>");
document.write("<br>");

document.write("<h3>13.charAt</h3>");

// 1.Example
var craA1 = "The quick brown fox jumps over the fox lazy dog";
var craA2 = craA1.charAt(1);
document.write(craA2);

document.write("<br>");
document.write("<br>");

document.write("<h3>14.charCodeAt</h3>");

// 1.Example
var charCoA1 = "The quick brown fox jumps over the fox lazy dog";
var charCoA2 = charCoA1.charCodeAt(2);
document.write(charCoA2);

document.write("<br>");
document.write("<br>");

document.write("<h3>15.fromCharCode</h3>");

// 1.Example
var fromcharC1 = String.fromCharCode(64);
document.write(fromcharC1);

document.write("<br>");
document.write("<br>");

document.write("<h3>16.concat</h3>");

// 1.Example
var Cnc1 = "The quick brown fox jumps over the fox lazy dog";
var Cnc2 = "hello";
var Cnc3 = "Hii";

var Cnc4 = Cnc1.concat(Cnc2, Cnc3);
document.write(Cnc4);

document.write("<br>");
document.write("<br>");

document.write("<h3>17.split</h3>");

// 1.Example
var splt1 = "The quick brown fox jumps over the fox lazy dog";
var splt2 = splt1.split(" ");
document.write(splt2);
// console.log(Array.isArray(splt2), splt2);

document.write("<br>");

// 2.Example
var splt3 = splt1.split("f");
document.write(splt3);
// console.log(Array.isArray(splt3), splt3);

document.write("<br>");
document.write("<br>");

document.write("<h3>18.repeat</h3>");

// 1.Example
var rpt1 = "The quick brown fox jumps over the fox lazy dog";
var rpt2 = rpt1.repeat(2);
document.write(rpt2);

document.write("<br>");
document.write("<br>");

document.write("<h3>19.slice</h3>");

// 1.Example
var slce1 = "The quick brown fox jumps over the fox lazy dog";
var slce2 = slce1.slice(1, 5);
document.write(slce2);

// 2.Example
var slce3 = slce1.slice(-2);
document.write(slce3);

document.write("<br>");
document.write("<br>");

document.write("<h3>20.substr</h3>");

// 1.Example
var subst1 = "The quick brown fox jumps over the fox lazy dog";
var subst2 = subst1.substr(1, 5);
document.write(subst2);

// 2.Example
var subst3 = subst1.substr(-1, -5);
document.write(subst3);

document.write("<br>");
document.write("<br>");

document.write("<h3>21.substring</h3>");
// 1.Example
var substrig1 = "The quick brown fox jumps over the fox lazy dog";
var substrig2 = substrig1.substring(3, 5);
document.write(substrig2);

document.write("<br>");
document.write("<br>");

document.write("<h3>22.tostring</h3>");
// 1.Example
var tostrng1 = "The quick brown fox jumps over the fox lazy dog";
var tostrng2 = tostrng1.toString();
document.write(tostrng2);

document.write("<br>");

// 2.Example
var tostrng3 = 23;
var tostrng4 = tostrng3.toString();
document.write(tostrng4 + 5);

document.write("<br>");
document.write("<br>");

document.write("<h3>23.valueof</h3>");
// 1.Example
var valuof1 = "The quick brown fox jumps over the fox lazy dog";
var valuof2 = valuof1.valueOf();
document.write(valuof2);

/**===== Number Method =====*/
document.write("<br>");
document.write("<br>");

document.write("<h2>Number Method</h2>");

document.write("<h3>1.number</h3>");
// 1. Example
var numb1 = "99";
var numb2 = Number(numb1);
document.write(`${numb1}, ${typeof numb1} <br> ${numb2}, ${typeof numb2}`);

document.write("<br>");
document.write("<br>");

document.write("<h3>2.parseInt</h3>");
// 1. Example
var parsIn1 = "56 596 236 1";
var parsIn2 = parseInt(parsIn1);
document.write(parsIn2);
document.write("<br>");

// 2. Example
var parsIn3 = "10.55";
var parsIn4 = parseInt(parsIn3);
document.write(parsIn4);
document.write("<br>");

// 3. Example
var parsIn5 = "it is 10.55";
var parsIn6 = parseInt(parsIn5);
document.write(parsIn6);

document.write("<br>");
document.write("<br>");

document.write("<h3>3.parseFloat</h3>");
// 1. Example
var parsFlo1 = "10.58 years";
var parsFlo2 = parseFloat(parsFlo1);
document.write(parsFlo2);

document.write("<br>");
document.write("<br>");

document.write("<h3>4.isFinite</h3>");
// 1. Example
var isfin1 = 1.0;
var isfin2 = Number.isFinite(isfin1);
document.write(isfin2);

document.write("<br>");

// 2. Example
var isfin3 = "Hello";
var isfin4 = Number.isFinite(isfin3);
document.write(isfin4);

document.write("<br>");
document.write("<br>");

document.write("<h3>5.isInteger</h3>");
// 1. Example
var isintgr1 = 1.5;
var isintgr2 = Number.isInteger(isintgr1);
document.write(isintgr2);

document.write("<br>");

// 2. Example
var isintgr3 = 20;
var isintgr4 = Number.isInteger(isintgr3);
document.write(isintgr4);

document.write("<br>");
document.write("<br>");

document.write("<h3>6.toFixed</h3>");
// 1. Example
var tofxd1 = 10.57849;
var tofxd2 = tofxd1.toFixed(2);
document.write(tofxd2);

document.write("<br>");
document.write("<br>");

document.write("<h3>7.toPrecision</h3>");
// 1. Example
var toPrecson1 = 5.36251;
var toPrecson2 = toPrecson1.toPrecision(2);
document.write(toPrecson2);

document.write("<br>");

// ===== math Methods ===== //
document.write("<br><h2>Math Methods</h2>");

// 1. ceil
document.write("<h3>ceil</h3>");
let mathCeil = Math.ceil(1.2);
document.write(mathCeil);

document.write("<br>");

// 2. floor
document.write("<h3>floor</h3>");
let mathFloor = Math.floor(2.6);
document.write(mathFloor);

// 3. round
document.write("<h3>round</h3>");
let mathRound = Math.round(2.6);
document.write(mathRound);

// 4. trunc
document.write("<h3>trunc</h3>");
let mathTrunc = Math.trunc(2.6);
document.write(mathTrunc);

// 5. max
document.write("<h3>max</h3>");
let mathMax = Math.max(10, 14, 19, 50);
document.write(mathMax);

// 6. min
document.write("<h3>min</h3>");
let mathMin = Math.min(10, 14, 19, 50);
document.write(mathMin);

// 7. sqrt
document.write("<h3>sqrt</h3>");
let mathSQRT = Math.sqrt(36);
document.write(mathSQRT);
// 6*6=36

// 8. cbrt
document.write("<h3>cbrt</h3>");
let mathCBRT = Math.cbrt(125);
document.write(mathCBRT);
// 5*5*5=36

// 9. pow
document.write("<h3>pow</h3>");
let mathPow = Math.pow(3, 4);
document.write(mathPow);
// 3*3*3*3 = 81

// 10. random
document.write("<h3>random</h3>");
let mathRandom = Math.floor(Math.random() * 10) + 1;
document.write(mathRandom);

// 11. abs
document.write("<h3>abs</h3>");
let mathAbs = Math.abs(-55.28);
document.write(mathAbs);

// 12. PI
document.write("<h3>PI</h3>");
let mathPi = Math.PI;
document.write(mathPi);

/**===== Date Method =====*/
document.write("<br>");
document.write("<br>");

document.write("<h2>Date Method (Get & Set)</h2>");
// 1. Example
var dateNow = new Date();
var dateNow2 = new Date("September 07 1998");
document.write(dateNow);

document.write("<br>");

document.write("<h3>1.toDateString</h3>");
// 1. Example
document.write(dateNow.toDateString());

document.write("<h3>2.getDate</h3>");
// 1. Example
document.write(dateNow.getDate());

document.write("<h3>3.getMonth</h3>");
// 1. Example
document.write(dateNow.getMonth());

document.write("<br>");

// 2. Example
document.write(dateNow2.getMonth());

document.write("<h3>4.getDay</h3>");
// 1. Example
document.write(dateNow.getDay());

document.write("<h3>5.getFullYear</h3>");
// 1. Example
document.write(dateNow.getFullYear());

document.write("<br>");

// 2. Example
document.write(dateNow2.getFullYear());

document.write("<h3>6.getHours</h3>");
// 1. Example
document.write(dateNow.getHours());

document.write("<h3>7.getMinutes</h3>");
// 1. Example
document.write(dateNow.getMinutes());

document.write("<h3>8.getSeconds</h3>");
// 1. Example
document.write(dateNow.getSeconds());

document.write("<h3>8.getMilliseconds</h3>");
// 1. Example
document.write(dateNow.getMilliseconds());

document.write("<h3>9.setDate</h3>");
// 1. Example
var setDt1 = new Date();
setDt1.setDate(28);
document.write(setDt1);

document.write("<h3>10.setFullYear</h3>");
// 1. Example
var setFullY1 = new Date();
setFullY1.setFullYear(2025);
document.write(setFullY1);

document.write("<h3>11.setMonth</h3>");
// 1. Example
var setMont1 = new Date();
setMont1.setMonth(8);
document.write(setMont1);

document.write("<h3>12.setHours</h3>");
// 1. Example
var setHrs1 = new Date();
setHrs1.setHours(8);
document.write(setHrs1);

document.write("<h3>13.setMinutes</h3>");
// 1. Example
var setMints1 = new Date();
setMints1.setMinutes(8);
document.write(setMints1);

document.write("<h3>14.setSeconds</h3>");
// 1. Example
var setSecons1 = new Date();
setSecons1.setSeconds(8);
document.write(setSecons1);

document.write("<h3>15.Today Date</h3>");
// 1. Example
var getInCode1 = new Date();
var getInCode1Date = getInCode1.getDate();
var getInCode1Month = getInCode1.getMonth() + 1;
var getInCode1Year = getInCode1.getFullYear();

document.write(`${getInCode1Date}/${getInCode1Month}/${getInCode1Year}`);

/**===== DOM Method =====*/
document.write("<br>");
document.write("<br>");

document.write("<h2>DOM(Document Object Module)</h2>");
document.write(
    '<div class="DOM" id="DOM"><div class="domCommon DOM1" id="DOM1" style="color:black;"><span>DOM1</span><a href="#dom1Link" class="dom1Link">dom1Link</a></div><div class="domCommon DOM2" id="DOM2"><span>DOM2</span><a href="#dom2Link" class="dom2Link">dom2Link</a> <button class="btnClass" id="btnID">This Is a Button</button></div></div>'
);

var domElement;

// ===== DOM Basics Target ===== //
domElement = document;
// console.log(domElement);

domElement = document.all;
// console.log(domElement);

domElement = document.all[1];
// console.log(domElement);

domElement = document.title;
// console.log(domElement);

domElement = document.body;
// console.log(domElement);

domElement = document.links;
// console.log(domElement);

domElement = document.links[1];
// console.log(domElement);

domElement = document.images;
// console.log(domElement);

domElement = document.images[1];
// console.log(domElement);

domElement = document.forms;
// console.log(domElement);

domElement = document.doctype;
// console.log(domElement);

domElement = document.URL;
// console.log(domElement);

domElement = document.domain;
// console.log(domElement);

domElement = document.baseURI;
// console.log(domElement);

// ===== Get Value Method from DOM ===== //

domElement = document.getElementById("DOM");
// console.log(domElement);

domElement = document.getElementsByClassName("domCommon");
// console.log(domElement);

domElement = document.getElementsByClassName("domCommon")[1];
// console.log(domElement);

domElement = document.getElementsByTagName("div");
// console.log(domElement);

domElement = document.getElementsByTagName("div")[1];
// console.log(domElement);

domElement = document.getElementById("DOM").innerText;
// console.log(domElement);

domElement = document.getElementById("DOM").innerHTML;
// console.log(domElement);

domElement = document.getElementById("DOM1").getAttribute("class");
// console.log(domElement);

domElement = document.getElementById("DOM2").getAttributeNode("class");
// console.log(domElement);

domElement = document.getElementById("DOM1").attributes;
// console.log(domElement);

domElement = document.getElementById("DOM1").attributes[1];
// console.log(domElement);

// ===== Set Value Method In DOM ===== //

domElement = document.getElementById("DOM1").innerText = "My Name Dk";
// console.log(domElement);

domElement = document.getElementById("DOM1").innerHTML = "<p>My Name Dk</p>";
// console.log(domElement);

domElement = document.getElementById("DOM2").setAttribute("class", "Dk");
// console.log(domElement);

domElement = document.getElementById("DOM2").setAttribute("style", "color: blue;");
// console.log(domElement);

// domElement = document.getElementById("DOM1").removeAttribute("class");
// console.log(domElement);

// ===== New DOM Targeting Methods ===== //

// Query Selector
document.write("<h3>Query Selector</h3>");
domElement = document.querySelector("#DOM2 .btnClass").innerHTML = "Button text changed";

// Query Selector All
document.write("<h3>Query Selector All</h3>");
domElement = document.querySelectorAll(".domCommon");
// console.log(domElement);

// ===== DOM CSS Styling Methods ===== //

document.write('<div class="domStyle"><div class="domStyleTitle" id="domStyleTitle" style="color: red;">domStyleTitle</div><div class="domStyleContent" id="domStyleContent" style="color: green;">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, quia?</div></div>');

var domStyl1;

// style
domStyl1 = document.querySelector("#domStyleTitle").style.color;
// console.log(domStyl1);

domStyl1 = document.querySelector("#domStyleContent").style.textTransform = "Uppercase";
// console.log(domStyl1);

// className
var domClasNm1;
document.querySelector("#domStyleTitle").className = "abc xyz";
domClasNm1 = document.querySelector("#domStyleTitle").className;
// console.log(domClasNm1);

// classList
var classLst1;
document.querySelector("#domStyleTitle").classList = "ABC2 XYZ2";
classLst1 = document.querySelector("#domStyleTitle").classList;
// console.log(classLst1);

document.querySelector("#domStyleContent").classList.add("Text");
classLst1 = document.querySelector("#domStyleContent").classList;
// console.log(classLst1);

document.querySelector("#domStyleContent").classList.add("Text", "efg");
classLst1 = document.querySelector("#domStyleContent").classList;
// console.log(classLst1);

document.querySelector("#domStyleContent").classList.remove("Text");
classLst1 = document.querySelector("#domStyleContent").classList;
// console.log(classLst1);

// ===== DOM addEventListener() Methods ===== //

document.write(
    '<div class="domExa2"><div class="domExa2TitleBox" id="domExa2TitleBox" style="background-color: red;"><div class="domExa2Title" style="padding: 50px;">domStyleTitle</div></div><div class="domExa2ConBox" id="domExa2ConBox" style="padding: 50px;"><div class="domExa2Con" id="domExa2Con" style="padding: 50px;">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, quia?</div></div></div>'
);

// ! we can use this method instead of using attribute in every tag

document.getElementById("domExa2TitleBox").onmouseenter = abc;
function abc() {
    document.getElementById("domExa2TitleBox").style.background = "green";
}

document.getElementById("domExa2TitleBox").onclick = abc2;
function abc2() {
    document.getElementById("domExa2TitleBox").style.color = "white";
}

document.getElementById("domExa2ConBox").addEventListener("click", xyz);
function xyz() {
    document.getElementById("domExa2ConBox").style.color = "pink";
}

document.getElementById("domExa2ConBox").addEventListener("mouseenter", function () {
    document.getElementById("domExa2ConBox").style.border = "5px solid red";
});

document.getElementById("domExa2Con").addEventListener("click", function () {
    this.style.border = "5px dashed red";
});

document.write('<div class="domOuter" id="domOuter" style="padding:30px;background-color:red"><span>DOM Outer</span><div class="domInner" id="domInner" style="padding:30px;background-color:yellow"><span>DOM Inner</span></div></div>');

document.querySelector("#domOuter").addEventListener(
    "click",
    function () {
        this.style.backgroundColor = "pink";
        this.style.color = "red";
        // alert("DOM Outer Clicked");
    },
    true
);

document.getElementById("domInner").addEventListener("click", domInnerfunn, true);

function domInnerfunn() {
    this.style.backgroundColor = "black";
    this.style.color = "white";
    this.style.textTransform = "Uppercase";
    // alert("DOM Inner Clicked");
}

// document.getElementById("domInner").addEventListener("mouseleave", domInnerfunn2);

// function domInnerfunn2() {
//     document.getElementById("domInner").removeEventListener("click", domInnerfunn);
//     // alert("dfdsf");
// }

// ===== DOM classList() Methods ===== //

document.write('<div class="classLiswp" id="classLiswp"><div class="classLisInr d1 d2 d3 d4 d5" id="classLisInr">Hello</div></div>');

// 1. Add Class
document.getElementById("classLiswp").addEventListener("click", classLiswpfun);

function classLiswpfun() {
    document.getElementById("classLiswp").classList.add("Xyz");
}

// 2. Remove Class
document.getElementById("classLisInr").addEventListener("click", classLiswpfun2);

function classLiswpfun2() {
    // document.getElementById("classLisInr").classList.remove("d5");
    this.classList.remove("d5");
    var dsdd = this.classList;
    // console.log(dsdd);
}

// 3. Toggle Class
document.getElementById("classLiswp").addEventListener("click", classLiswpfun3);

function classLiswpfun3() {
    this.classList.toggle("Tggle");
    var dfdsf = this.classList;
    // console.log(dfdsf);
}

// 4. length
document.getElementById("classLisInr").addEventListener("click", function () {
    var zxdfd = this.classList.length;
    // console.log(zxdfd);
});

// 5. item
document.getElementById("classLisInr").addEventListener("dblclick", function () {
    var ghgf = this.classList.item(3);
    // console.log(ghgf);
});

// 6. contains
document.getElementById("classLisInr").addEventListener("click", function () {
    var dfg5 = this.classList.contains("d2");
    // console.log(dfg5);
});

// ===== DOM Traversal Methods ===== //

document.write('<div id="domTravrslBoxOuter"><div id="domTravrslBoxInner"><div class="domTravrslBox1">A</div><div class="domTravrslBox2">B</div><div class="domTravrslBox3" id="domTravrslBox3">C</div><div class="domTravrslBox4">D</div><div class="domTravrslBox5">E</div></div></div>');

// 1. parentElement
let domTravrslPE;
domTravrslPE = document.getElementById("domTravrslBoxInner").parentElement;
// console.log(domTravrslPE);

domTravrslPE = document.body.parentElement;
// console.log(domTravrslPE);

// 2. parentNode
let domTravrslPNd;
domTravrslPNd = document.getElementById("htmlMain").parentNode;
// console.log(domTravrslPNd);

// 3. Chidren
let domTravrslCdn;
domTravrslCdn = document.getElementById("domTravrslBoxInner").children;
// console.log(domTravrslCdn);

domTravrslCdn = document.getElementById("domTravrslBoxInner").children[1];
// console.log(domTravrslCdn);

// 4. childNodes
let domTravrslChiNd;
domTravrslChiNd = document.getElementById("domTravrslBoxInner").childNodes;
// console.log(domTravrslChiNd);

// 5. firstElementChild
let domTravrslFEC;
domTravrslFEC = document.getElementById("domTravrslBoxInner").firstElementChild;
// console.log(domTravrslFEC);

// 6. lastElementChild
let domTravrslLEC;
domTravrslLEC = document.getElementById("domTravrslBoxInner").lastElementChild;
// console.log(domTravrslLEC);

// 7. firstChild
let domTravrslFC;
domTravrslFC = document.getElementById("domTravrslBoxInner").firstChild;
// console.log(domTravrslFC);

// 8. lastChild
let domTravrslLC;
domTravrslLC = document.getElementById("domTravrslBoxInner").lastChild;
// console.log(domTravrslLC);

// 9. nextElementSibling
let domTravrslNES;
domTravrslNES = document.getElementById("domTravrslBox3").nextElementSibling;
// console.log(domTravrslNES);

// 10. previousElementSibling
let domTravrslPES;
domTravrslPES = document.getElementById("domTravrslBox3").previousElementSibling;
// console.log(domTravrslPES);

// 11. nextSibling
let domTravrslNS;
domTravrslNS = document.getElementById("domTravrslBox3").nextSibling;
// console.log(domTravrslNS);

// 12. previousSibling
let domTravrslPS;
domTravrslPS = document.getElementById("domTravrslBox3").previousSibling;
// console.log(domTravrslPS);

// ===== DOM Create Methods ===== //

document.write('<div id="domCreateMethods"><h3>DOM Create Methods</h3></div>');

// 1. Create Element
let domCrtNewEl = document.createElement("div");
// console.log(domCrtNewEl);

// 2. Create Text Node
let domCrtNewTxtNd = document.createTextNode("This is a div");
// console.log(domCrtNewTxtNd);

// 3. Create Comment
let domCrtNewComnt = document.createComment("This is a comment");
// console.log(domCrtNewComnt);

// ===== DOM Append Methods ===== //

document.write('<div id="domAppendMethods"><h3>DOM Append Methods</h3></div>');

// 1. appendChild
domCrtNewEl.appendChild(domCrtNewTxtNd);
document.getElementById("domAppendMethods").appendChild(domCrtNewEl);
document.getElementById("domAppendMethods").appendChild(domCrtNewComnt);

// 2. insertBefore
let domInsrtBfr = document.getElementById("domAppendMethods");
domInsrtBfr.insertBefore(domCrtNewEl, domInsrtBfr.childNodes[0]);

// ===== DOM insertAdjacent(Create and Append) Methods ===== //

document.write('<div id="dominsertAdjacent"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa tenetur assumenda minus asperiores! Magni eaque optio odio quidem, qui dolore eos officia soluta fugit asperiores.</p></div>');

// 1. insertAdjacentElement
let dominsertAdjacentElmTxt = document.createElement("h4");
// console.log(dominsertAdjacentElmTxt);

let dominsertAdjacentElmTxtNd = document.createTextNode("Yes, This is a Heading 4");
// console.log(dominsertAdjacentElmTxtNd);

dominsertAdjacentElmTxt.appendChild(dominsertAdjacentElmTxtNd);
// console.log(dominsertAdjacentElmTxt);

let insertAdjacentElementAppnd = document.getElementById("dominsertAdjacent").insertAdjacentElement("beforebegin", dominsertAdjacentElmTxt);

// 2. insertAdjacentHTML
let dominsertAdjacentHTML = document.getElementById("dominsertAdjacent");
let dominsertAdjacentHTMLTxt = "<h5>This is a Heading 5</h5>";

dominsertAdjacentHTML.insertAdjacentHTML("afterbegin", dominsertAdjacentHTMLTxt);

// 3. insertAdjacentText
let dominsertAdjacentTxt = document.querySelector("#dominsertAdjacent");
let dominsertAdjacentTxtNw = "This is a 'Text'";

dominsertAdjacentTxt.insertAdjacentText("afterbegin", dominsertAdjacentTxtNw);

// ===== DOM replaceChild & removeChild Methods ===== //

document.write('<div id="domRARC"><ul><li>Apple</li><li>Banana</li><li>Mango</li><li>Pears</li><li>Melons</li></ul></div>');

// 1. replaceChild
let domReplcNewLI = document.createElement("li");
let domReplcNewLIText = document.createTextNode("Dragon Fruit");

domReplcNewLI.appendChild(domReplcNewLIText);
// console.log(domReplcNewLI);

let domReplcOldLIGet = document.querySelector("#domRARC ul");
let domReplcOldLITarget = domReplcOldLIGet.children[1];
// console.log(domReplcOldLITarget);

domReplcOldLIGet.replaceChild(domReplcNewLI, domReplcOldLIGet.firstElementChild);

// 2. removeChild
let domRemovTargtGet = document.querySelector("#domRARC ul");
let domRemovTargt = domRemovTargtGet.lastChild;

domRemovTargtGet.removeChild(domRemovTargt);

// ===== DOM cloneNode Methods ===== //
document.write('<h3>DOM Clone Nodes</h3><div id="domClonefruitsLists"><ul id="domClonefruitsList1"><li>Apple</li><li>Banana</li><li>Apricot</li><li>Papaya</li></ul><ul id="domClonefruitsList2" style="color: red;"><li>Peach</li><li>Watermelon</li><li>Strawberries</li></ul></div>');

let domclonNodTargt = document.querySelector("#domClonefruitsList1").children[0];

// let domclonNodTargt = document.querySelector("#domClonefruitsLists").firstElementChild;
// console.log(domclonNodTargt);

let domclonNodCopyEl = domclonNodTargt.cloneNode(true);
// console.log(domclonNodCopyEl);

document.querySelector("#domClonefruitsList2").appendChild(domclonNodCopyEl);

// ===== DOM Contains() Methods ===== //

document.write('<h3>DOM Contains</h3><div id="domContains"><ul id="domContains1"><li>Apple</li><li>Banana</li></ul><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa tenetur assumenda minus asperiores</p></div>');

let domContainsParntEl = document.getElementById("domContains");
let domContainstargt = document.getElementById("domContains1");

let domContainsFind = domContainsParntEl.contains(domContainstargt);
// console.log(domContainsFind);

// ===== DOM hasAttribute & hasChildNodes Methods ===== //

document.write('<h3>DOM hasAttribute & hasChildNodes</h3><div id="domHasAtts"><ul id="domHasAtts1"><li>Apple</li></ul><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa tenetur assumenda minus asperiores</p></div>');

// hasAttribute()
let domHasAttTargt = document.getElementById("domHasAtts");

let domHasAttTargtFind = domHasAttTargt.hasAttribute("class");

// console.log(domHasAttTargtFind);

// hasChildNodes()
let domHasChildNdTargt = document.getElementById("domHasAtts");
let domHasChildNdFind = domHasChildNdTargt.hasChildNodes();

// console.log(domHasChildNdFind);

// ===== DOM isEqualNode Methods ===== //

document.write('<h3>DOM isEqualNode</h3><div id="domEqualNodeLists"><ul id="domEqualNodeList1"><li>Orange</li><li>Banana</li><li>Apple</li><li>Grapes</li><li>PineApple</li></ul><ul id="domEqualNodeList2" style="color: red;"><li>Guava</li><li>Orange</li><li>PineApple</li></ul></div>');

let domIsEqlNdTargt1 = document.getElementById("domEqualNodeList1").firstElementChild;
let domIsEqlNdTargt2 = document.getElementById("domEqualNodeList2").children[1];

let domIsEqlNd = domIsEqlNdTargt1.isEqualNode(domIsEqlNdTargt2);

// console.log(domIsEqlNd);

// ===== Form Events ===== //

document.write(
    '<h3>Form Events</h3><div id="formEventsWp"><form action="" id="formEventForm" onsubmit="onSubmit()"><label for="">name</label><input type="text" name="" onchange="onChange(this)" id="fName" onfocus="onFocus(this)" onblur="onBlur(this)" oninput="onInput(this)" onselect="onSelect(this)" oninvalid="onInvalid()" required><br><label for="">Class</label><input type="text" name="" id="lName" onfocus="onFocus(this)" onblur="onBlur(this)" oninput="onInput2(this)" onselect="onSelect(this)"><br><label for="">Country</label><select name="" id="selectFrm" onfocus="onFocus(this)" onblur="onBlur(this)" onchange="onChange(this)"><option value="">Country</option><option value="India">India</option><option value="America">America</option><option value="Bangladesh">Bangladesh</option><option value="Sri Lanka">Sri Lanka</option><option value="Nepal">Nepal</option></select><br><button type="submit">Submit</button></form><div id="formEventOutputs"><div id="formEventOutput1"></div><div id="formEventOutput2"></div><div id="formEventOutput3"></div><div id="formEventOutput4"></div></div></div>'
);

// 1. onfocus
function onFocus(focusElement) {
    focusElement.style.backgroundColor = "red";
    // focusElement.style.border = "none";
    focusElement.style.outline = "none";
}

// ! Here we can use add event listener method for multiple inputs, for now we are using inline function, we can see in above input tag

// ! here we are used arrow function

// const formEvDemo1 = document.querySelector("#formEventForm");

// formEvDemo1.addEventListener(
//     "focus",
//     (focusEvent) => {
//         focusEvent.target.style.backgroundColor = "red";
//         focusEvent.target.style.border = "none";
//     },
//     true
// );

// 2. onblur
function onBlur(blurElement) {
    blurElement.style.backgroundColor = "";
    blurElement.style.outline = "";
}

// 3. oninput
function onInput(onInputEle) {
    const onInputVar = onInputEle.value;
    document.getElementById("formEventOutput1").innerHTML = onInputVar;
}

function onInput2(onInputEle) {
    const onInputVar = onInputEle.value;
    document.getElementById("formEventOutput2").innerHTML = onInputVar;
}

// ! Onchange event working on select and input

// 4. onchange
function onChange(onChangeEle) {
    const onChangeVar = onChangeEle.value;
    document.getElementById("formEventOutput3").innerHTML = onChangeVar;
}

// 5. onselect
function onSelect(onSelectEle) {
    const onSelectVar = onSelectEle.value;
    console.log(onSelectVar + " --- you are selected value.");
}

// 6. onsubmit
function onSubmit() {
    // console.log("you submited a form");
    let fName = document.getElementById("fName").value;
    let lName = document.getElementById("lName").value;
    let selectFrm = document.getElementById("selectFrm").value;
    document.write(`Your Name is : ${fName}, Your Class is : ${lName}, Your Country is : ${selectFrm}.`);
}

// 7. oninvalid
function onInvalid() {
    alert("Please Feel the first name.");
}

// ===== setInterval() & clearInterval() ===== //

document.write("<div id='domAnimation1'><div id='domAnimation1Res'></div></div>");
let domAnimtn1A = 0;
let domAnimtn1B = setInterval(domAnimtn1Fun, 500);

function domAnimtn1Fun() {
    if (domAnimtn1A == 200) {
        clearInterval(domAnimtn1B);
    } else {
        domAnimtn1A += 10;
        let domAnimtn1Targt = document.getElementById("domAnimation1");
        domAnimtn1Targt.style.width = `${domAnimtn1A}px`;
        domAnimtn1Targt.style.marginLeft = `${domAnimtn1A}px`;
        document.getElementById("domAnimation1Res").innerHTML = `${domAnimtn1A}px`;
        // console.log(domAnimtn1A);
    }
}

// ===== setTimeout() & clearTimeout() ===== //

document.write("<div id='domAnimation2'><div id='domAnimation2Res'></div></div><button onclick='stopAnimation2()'>Stop Animation2</button>");
let domAnimtn2A = 0;
let domAnimtn2B = setTimeout(function () {
    domAnimtn2A += 100;
    let domAnimtn2Targt = document.getElementById("domAnimation2");
    domAnimtn2Targt.style.left = `50px`;
    domAnimtn2Targt.style.width = `${domAnimtn2A}px`;
    domAnimtn2Targt.style.height = `${domAnimtn2A}px`;
}, 5000);

function stopAnimation2() {
    clearTimeout(domAnimtn2B);
}

// ===== (BOM)Browser Object Model ===== //

document.write("<br>");
document.write("<br>");

document.write("<h2>BOM(Browser Object Model)</h2>");

function resizeFun() {
    console.clear();
    // innerHeight
    let iHeight = window.innerHeight;
    console.log(`Inner Height: ${iHeight}`);

    // outerHeight
    let oHeight = window.outerHeight;
    console.log(`outer Height: ${oHeight}`);

    // innerWidth
    let iWidth = window.innerWidth;
    console.log(`Inner width: ${iWidth}`);

    // outerWidth
    let oWidth = window.outerWidth;
    console.log(`outer width: ${oWidth}`);
}

// window open
let myWindow;

document.write("<button onclick='openWindow();'>Open Window</button>");
function openWindow() {
    myWindow = window.open("", "", "width=500px, height=500px, left=100px, top=200px");
    myWindow.document.write("<p>This is a new window</p>");
}

// window close
document.write("<button onclick='closeWindow();'>Close Window</button>");
function closeWindow() {
    myWindow.close();
}

// window moveTo
document.write("<button onclick='moveToWindow();'>MoveTo Window</button>");

function moveToWindow() {
    myWindow.moveTo(100, 100);
    myWindow.focus();
}

// window moveBy
document.write("<button onclick='moveByWindow();'>MoveBy Window</button>");

function moveByWindow() {
    myWindow.moveBy(100, 100);
    myWindow.focus();
}

// resize To
document.write("<button onclick='resizeToWindow();'>ResizeTo Window</button>");

function resizeToWindow() {
    myWindow.resizeTo(200, 200);
    myWindow.focus();
}

// resize By
document.write("<button onclick='resizeByWindow();'>ResizeBy Window</button>");

function resizeByWindow() {
    myWindow.resizeBy(200, 200);
    myWindow.focus();
}

// scroll by
document.write('<button onclick="scrollByWindow();" class="scrollby">Scroll By Window</button>');

function scrollByWindow() {
    window.scrollBy(0, 10); //(x, y)
    // ! we can give here (-) value
}

// scroll to
document.write('<button onclick="scrollToWindow();" class="scrollto">Scroll To Window</button>');

function scrollToWindow() {
    window.scrollTo(0, 10); //(x, y)
    // ! we can give here (-) value
}

// ===== Location Object ===== //

// 1.location
// console.log(location);

// 2.host
// console.log(location.host);

// 3.href
// console.log(location.href);

// 4.port
// console.log(location.port);

// 5.protocol
// console.log(location.protocol);

// 6.hash
// console.log(location.hash);

// 7.search
// console.log(location.search);
// http://127.0.0.1:5500/?page=1

// ===== Location Object Methods ===== //

// 1.reload
document.write('<button onclick="locationReload();">location reload</button>');
function locationReload() {
    location.reload();
}

// 2.assign
document.write('<button onclick="locationAssign();">location assign</button>');
function locationAssign() {
    location.assign("https://geekcodelab.com");
}

// 3.replace
document.write('<button onclick="locationReplace();">location Replace</button>');
function locationReplace() {
    location.replace("https://geekcodelab.com");
}

// ===== History Object ===== //

// length
// console.log(`History length is: ${history.length}`);

// back
document.write(`<button onclick="historyBack();">History Back</button>`);
function historyBack() {
    history.back();
}

// forward
document.write(`<button onclick="historyForward();">History Forward</button>`);
function historyForward() {
    history.forward();
}

// go
document.write(`<button onclick="historyGo();">History Go</button>`);
function historyGo() {
    history.go(-1);
}
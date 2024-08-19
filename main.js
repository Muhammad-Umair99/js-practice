// let age = 70;
// if(typeof age !==   "number" || age < 0){
//     console.log("invalid age");
// }
// else if (age < 13) {
// console.log("you are a child");
// }
// else if(age >= 13 && age <= 19){
//     console.log("you are a Teen ager");
// }
// else if(age >= 20 && age <= 64){
//     console.log("you are an adult");
// }
// else{
//     console.log("you are a senior citizen")
// }


// loops and strings

// console.log("Umair");
// console.log("Umair");
// console.log("Umair");
// console.log("Umair");
// console.log("Umair");

// for loop
// for(let count = 1; count <= 5; count ++){
//     console.log("Hellow world");
// }

// calculate the sum of 1 to 5
// let sum = 0;
// for( let i = 1 ; 1 <= 5; i++){
//    sum = sum + i;
// }
// console.log("sum =" , sum);

// calculate sum of 1 to n
// let sum = 0;
// let n = 100;
// for(let i = 1; i <= n; i++){
//     sum = sum + i;
// }
// console.log("sum =" , sum);


// while loop
// let i = 1;
// while(i <= 5){
//     console.log("i =", i );
//     i ++;
// }

// do-while-loop
// let i = 1;
// do{
//     console.log("M.Umair");
//     i ++;
// }while(i <= 5 );


// let i = 1;
// do{
//     console.log("i =", i);
//     i ++;
// }while(i <= 5 );

// for-of-loop 
// let str = "javascript";
// let size = 0;
// for(let i of str){
//     console.log("i =", i);
//     size++;
// }
// console.log("string size =", size);

// for-in-loop
// let students = {
//     name: "umair",
//     age: 12,
//     class: "second",
// };
// for(let key in students){
//     console.log(key,students[key]);
// }

// practice question
// Q1) print 0 to 100 numbers
// for(let num = 0; num <= 100; num++){
//     console.log("num =",num);
// }

// Q2) PRINT ALL EVEN NUMBERS FROM 0 TO 100
// for(let num = 0; num <= 100; num++){
//     if(num % 2 !== 0){
//         console.log("num =", num);
//     }
// }

// Q3) create a game where you start with any random game nrmber.ask the user to guessing the game number until the user enters a correct value

// let gameNumber = 25;
// let name = prompt("guess the game number:");
// for(i = 0; i <= 100;i++){
//     if(gameNumber == name ){
//         console.log("you are win");
//     }
//     else{
//         console.log("you are loss");
//         name = prompt("try again");   
//     }
// }
// or
// let gameNum = 25;
// let userNum = prompt("guess the game number");
// while(userNum != gameNum){
//     userNum = prompt("try again");
// }
// console.log("you enter right value");


// Assignment 1: 
// Write a program that prints the numbers from 1 to 10, each on a new line.
// for(let i = 1; i <= 10; i++){
//     console.log("i =", i);
// }

// Assignment 2: 
// Write a program that calculates the sum of even numbers between 1 and 50 using a for loop.
// let sum = 0;
// for(let i = 0; i <= 50; i++){
//     if(i % 2 === 0){
//         sum = sum + i;
//     }
// }
// console.log("sum of even numbers =",sum);


// Assignment 4: Multiplication Table
// Write a program that prints the multiplication table for the number 7 up to 10 times
// for(let i = 7; i <= 70; i++){
//     if(i % 7 === 0){
//         console.log(i);
       
//     }
// }

// right way to seven table
// let num = 7;
// for(let i = 1; i<= 10; i++){
//     console.log(`${num} * ${i} = ${num * i}`);
// }


// Assignment 3: Factorial Calculation
// Write a program that computes the factorial of a given number n (e.g., n = 5) using a while loop. The factorial of a non-negative integer n is the product of all positive integers less than or equal to n.




// Number for which to calculate the factorial
// let n = 8; // You can change this number to compute factorial for a different value

// Initialize variables
// let result = 1;
// let current = n;

// Calculate factorial using a while loop
// while (current > 0) {
    // result *= current; // Multiply result by the current number
    // current--; // Decrement the current number
// }

// Output the result
// console.log(`The factorial of ${n} is ${result}`);


// practice
// let n = 5;

// let result = 1;
// let current = n;
// while(current > 0){
//     result *= current;
//     current--;
// }
// console.log(`factorial of ${n} is ${result}`); 



//STRINGS
// let str = "MuhammadUmair";
// let str2 = "Khan";

// let str = "MuhammadUmair";
// console.log(str[7])

// TEMPLATE LITERALS
// let str = `MuhammadUmair`;
// console.log( str);

// template literals example
// let obj = {
//     mame: "pen",
//     price: 12,
//     color: "balck",
// }
// console.log("the cost of", obj.mame , "is" , obj.price ,"rupees", "and" ,obj.color, "color");
// template literals
// let ouTput = `the cost of ${obj.mame} is ${obj.price} rupees and ${obj.color} color` 
// console.log(ouTput); 

// ESCAPE CHARACTERES
// console.log("Muhammad\tUmair");

// escape character take one length
// let str = "Muhammad\tUmair";
// console.log(str.length);

// strings methods
// let str ="muhammaumair";
// let newStr = str.toUpperCase();
// console.log(str);
// console.log(newStr);

// let str ="MuhammadUmair";
// let newStr = str.toLowerCase();
// console.log(str);
// console.log(newStr);        

// let str = "   Muhammad Umair    "
// console.log(str.trim());

// let str = ("MuhammadUmair");
// console.log(str.slice(2 , 8));


// let str1 =  ("Muhammad");
// let str2 = ("Umair");
// let res = str1.concat(str2);
// console.log(res);

// let str = "hellow";
// console.log(str.replace("h" , "y"));
// let str  = "ilove js";
// console.log(str.charAt(3));

// practice question
// let fullName = prompt("enter your full name");
// let userName  = "@" + fullName + fullName.length;
// console.log(userName);




// // Define the first function
// function num() {
//     console.log("Muhammad Umair");
// }

// // Define the second function that takes a function as a parameter
// function myFunction(callback) {
//     // Call the function passed as an argument
//     callback();
// }

// // Call myFunction and pass num as the argument
// myFunction(num);


// let arr = [1,2,3,4,5,6];
// arr.forEach(function myFunction(val){
//     console.log(val); 
// });

// let arr = ["karachi","Lahore","Multan","Chakwal"    ];
// arr.forEach((val,idx,arr)=>{
//         console.log(val.toUpperCase(),idx,arr); 

// });



// let's create a task where we log each number squared to the console.
//FIRST WAY
// let num = [55,4,8,6,21,5,10];
// num.forEach((val)=>{
//     val = val * val;
//     console.log(val);
// });


//SECOND wAY
// // Define an array of numbers
// const numbers = [1, 2, 3, 4, 5];

// // Define the function to be executed for each element
// function logSquare(num) {
//     console.log(num * num);
// }
// Use forEach to iterate over the array and apply the logSquare function
// numbers.forEach(logSquare);



// // Use forEach to iterate over the array and apply the logSquare function
// numbers.forEach(logSquare);
//QUEATION
// Additional Example with Index and Array Parameters
// If you want to use the index or the entire array inside your callback function, you can do so:
// let numbers = [1,2,3,4,5,6];
// function logDetails(value, index, array) {
//     console.log(`Value: ${value}, Index: ${index}, Array: [${array}]`);
// }
// numbers.forEach(logDetails);




//ARRAY METHODS
//MAP METHOD
//syntax
// const newArray = array.map(callback(currentValue, index, array));


// let arr = [1,2,3,4,5,6];
// arr.map((val)=>{
//     console.log(val);
// });


// let nums = [55,58,45];
// let newArr = nums.map((val)=>{
//         return val * 2;
//     });
//     console.log(newArr);


//Q1)Suppose we have an array of numbers and we want to create a new array where each number is squared.
// let numbers = [5,6,4,7,8,9];
// let newArr = numbers.map((val)=>{
//     return val * val;
    
// });
// console.log(newArr);


//second way
// // Define an array of numbers
// const numbers = [5,6,4,7,8,9];

// // Define a function to square each number
// function square(num) {
//     return num * num;
// }

// // Use map to apply the square function to each element
// const squaredNumbers = numbers.map(square);

// // Log the new array of squared numbers
// console.log(squaredNumbers);



//FILTER
//DEFINATION:CREATES A NEW ARRAY OF ELEMENTS  THAT GIVE TRUE FOR A CONDITION/FILTER.
//E.G:ALL EVEN NUMBERS

// let arr = [1,2,3,4,5,6,7,8,9,10];
// let evenArr = arr.filter((val)=>{
//     return val % 2 === 0;
// })
// console.log(evenArr);




//REDUCE
//PERFORMS  SOME OPERATIONS & REDUCES THE ARRAY TO A SINGLE VALUE.IT RETURNS THAT SINGLE VALUE.


//sum of the  array
// let arr = [1,2,3,4];
//  let outPut = arr.reduce((prev,val)=>{
//     return prev + val;
// })
// console.log(outPut);


//to find largest number of the array
// let arr = [1,2,3,4,15,20];
//  let outPut = arr.reduce((prev,curr  )=>{
//     return prev > curr  ?  prev : curr;
// })
// console.log(outPut);





//PRACTICE QUESTION
//Q1)   WE ARE GIVEN AN ARRAY OF MARKS OF STUDENTS.FILTER OUT THE MARKS OF STUDENTS THAT SCORED 90+ ?

// let marks = [50,90,100,120,40,70,150,170];
// let topper = marks.filter((val)=>{
//     return val > 90 ;
// })
// console.log(topper);    


// let n = prompt("enter a number");
// let arr = [];
// for(let i=1 ; i <= n;i++){
//     arr[i-1] = i;
// }
// console.log(arr);

// let sum = arr.reduce((res,curr)=>{
//     return res + curr;
// })
// console.log("sum",sum);   

// let product = arr.reduce((pre,val)=>{
//     return pre * val;
// })
// console.log("factorial",product);


//jo bhi kam ap ke demag me aya use ek function banao taka wo reusable code ban jai

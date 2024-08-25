// function myFunction(){
//     console.log("welcome to js");
//     console.log("we are learning js");
// }
// myFunction();

// function myFunction(msg){   //parameter => input

//     console.log(msg)
// }
// myFunction("i am umair"); //argument  


// function mult(num1,num2){
//     console.log(num1 * num2);
// }
// mult(5,4);

//return
// function mult(num1,num2){
// res = num1 * num2;
// return res;
// }
//  let val = mult(5,4);
//  console.log(val);


//parameter are local variables of functions
// function mult(num1,num2){
//     console.log(num1 * num2);
//     console.log(num1); //it works
// }
// mult(5,4);
// console.log(num1);  //it do not work




//ARROW FUCTION 
//compact way of writing a function

////Normal Function:
// function sum(a, b) {
//     return a + b;
// }

//Arrow Function:
// const sum = (a, b) => a + b;



//arrow function
// const arrowSum = (a, b) => {
//     console.log(a + b);        //return be kar sakte he
//   };
//   arrowSum(4,4);


//   const arrMul = (a , b) => {
//   return a * b;
//   }

//print karwana ke liye be use kar sakte he arrow frnction
// const printHellow = () => {
//     console.log("helllow");     
// };


//PRACTICE QUESTIONS
//Q1) CREATE A FUNCTION USING  "FUNCTION" KEYWORD THAT TAKES A STRING AS AN ARGUMENT AND RETURNS THE MNUMBER OF VOWELS IN STRING.

// function countVowels(str) {
//     let count = 0;
//     for (let char of str) {
//         if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u")
//             count++;
//     }
//     // console.log(count);
//     return count;
// }   


//Q2) CREATE AN ARROW FUNCTION TO PERFORM THE SAME TASK
     const countVow = (str) => {
        let count = 0;
    for (let char of str) {
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u")
            count++;
    }
    // console.log(count);
    return count;
     }
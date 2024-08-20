// ARRAY IN JS
//  first approach to  store marks is to make object
// let marks = {
//     stu1: 14,
//     stu2: 54,
//     stu3: 25,
// }

// let make s a marks array
// let marks = [45,55,88,98];
// console.log(marks);
// console.log(marks.length); //property

// let heroes = ["ironman", "thir", "hulk","spiderman" ];
// console.log(heroes);

// looping over an array

// for loop
// let heroes = ["ironman", "thir", "hulk","spiderman","aquaman" ];
// for(let i = 0; i < heroes.length; i++){
//     console.log(heroes[i]);
// }

// for-of-loop (for-of-loop is prefer in programing to axis an array)
// let heroes = ["ironman", "thir", "hulk","spiderman","aquaman" ];
// for(let hero of heroes){
//     console.log(hero);
// }

// let cities = ["karachi", "hayderabad","sukkur","lahore","multan"];
// for(let city of cities){   //This loop is meant to go through each city in the array one by one.
//     console.log(city.toUpperCase());
// }

//PRACTICE QUESTION
//Q1) for a given array with marks of students [85,97,44,37,76,70];find the average marks of entire class.
//i)
// let marks = [85,97,44,37,76,60];
// let sum = 409;
// let average = sum / marks.length;
// console.log(average);

//ii)
// let marks = [85, 97, 44, 37, 76, 60];
// let sum = 0;
// for (let val of marks) {
//     sum += val;
// }
// let average = sum / marks.length;

// console.log(`let average marks of class is ${average}` );

//Q2) for a given array with prices of fove items [250,645,300,900,50].all items have an offer of 10% off on them.Change the array to store the final price after applying offer.   -->
//i)
// let itemsPrice = [250,645,300,900,50];
// let i = 0;
// for(let val of itemsPrice){
//         let offer = val / 10;
//         itemsPrice[i] = itemsPrice[i] - offer;
//         console.log(`price after discount ${itemsPrice[i]}`)
//         i++;
// }

//ii)
// let itemsPrice = [250,645,300,900,50];
// for(let i = 0; i < itemsPrice.length; i++){
//     let offer = itemsPrice[i] / 10;
//     itemsPrice[i] -= offer;

// }
// console.log(itemsPrice);

// const price = [250,645,300,900,50];
// let offPrice = 0;
// for (let val of price) {
//   offPrice = val - (val * 10) / 100;
//   console.log(offPrice);
// }

// ARRAY METHOD
//push method
// let veggies = ["potato", "onion","carrot","ladtfinger"];
// veggies.push("cocumber","shimlamirch");
// console.log(veggies);

//pop method
// let veggies = ["potato", "onion","carrot","ladyfinger"];
// let deletItems = veggies.pop();
// console.log(veggies);
// console.log(deletItems);

//toString method
// let veggies = ["potato", "onion","carrot","ladyfinger"];
// console.log(veggies.toString());
// console.log(veggies);
    
// concat method
// let marvelHeroes = ["thor","spiderman","ironman"];
// let dcHeroes = ["superman","batman"];
// let pakHero = ["Quaid Azam","Alama Iqbal"];
// let hero = marvelHeroes.concat(dcHeroes,pakHero);
// console.log(hero);

//unshift method
// let marvelHeroes = ["thor","spiderman","ironman"];
// marvelHeroes.unshift("hulk", "witch");
// console.log(marvelHeroes);

//shift method
// let marvelHeroes = ["thor","spiderman","ironman"];
// marvelHeroes.shift();
// console.log(marvelHeroes);

//slice method
// let marvelHeroes = ["thor","spiderman","ironman","antman","dr.strange"];
// console.log(marvelHeroes);
// console.log(marvelHeroes.slice(1,4))

//splice method
// let arr =[55,99,65,78,100];
// arr.splice(2,2,200,300);    

//add element
// arr.splice(2,0,50);

//delete element
// arr.splice(2,1);

//replace element
// arr.splice(1,1,100);


//chat practice
//q1) BASICS ARRAY OPERATIONS
// 1)Create an Array: Create an array of 5 numbers and log it to the console.

// 2)Access Elements: Access and log the first and last elements of the array.

// 3)Add and Remove Elements:

// Add a number to the beginning of the array.
// Remove the last element of the array.
// Add a number to the end of the array.
// 4)Find the Length: Log the length of the array.

// let num = [10,20,30,40,50];
// console.log(num);
// console.log(num[0]);
// console.log(num[4]);  

// num.unshift(5);
// num.pop();
// num.push(60);

// console.log(num.length);


//Q2)
    // let companies = ["google","microsoft","system limiting","uber"];

    // companies.shift();

    // companies.splice(2,1,"ola");

    // companies.push("amazon");



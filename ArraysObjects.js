// Week 3 - Arrays and Objects

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Make an empty array named animals
let animals = [];
console.log(animals); // []
// Exercise 2. Add the string "frog" to the array
animals.push("frog"); // I originally put this as animals += "frog";  which turned animals into a string instead of an array
console.log(animals); // ["frog"]
// Exercise 3. Add 4 more animals of your choice to the array. Try to add all of them in one line of code.
animals.push("toad", "newt", "axolotl", "salamander");
console.log(animals); // ["frog", "toad", "newt", "axolotl", "salamander"]
// Exercise 4. Update the first item in the array to be "gorilla"
animals[0] = "gorilla"; 
console.log(animals[0]); // gorilla
// Exercise 5. Print the number of items in the array (use the array property that will give you this information)
console.log(animals.length); // 5
// Exercise 6. Print the first item in the array
console.log(animals[0]); // gorilla
// Exercise 7. Print the last item in the array (as part of your answer, use the same array property you used in exercise 5 above)
console.log(animals[animals.length - 1]); // "salamander"
// Exercise 8. Remove the last item from the array
animals.pop()
console.log(animals); // ["gorilla", "toad", "newt", "axolotl"]
// Exercise 9. Now make a new array named assortedThings that contains at least 3 strings and 3 numbers.
let assortedThings = [42, 7, 2022, "ice cream", "popcorn", "pizza"];
console.log(assortedThings); // [42, 7, 2022, "ice cream", "popcorn", "pizza"]
// Exercise 10. Write a for loop that iterates through the assortedThings array and prints each index and item, such as:
// Item #0 is potato
// Item #1 is 4
// Item #2 is Hello World
// ...
for (let index = 0; index < assortedThings.length; index++) {
    console.log("Item #" + index + " is " + assortedThings[index]);
}
/* 
Item #0 is 42
Item #1 is 7
Item #2 is 2022
Item #3 is ice cream
Item #4 is popcorn
Item #5 is pizza
*/
// Exercise 11. Write a function that takes an array of numbers as a parameter. For each number in the array,
// print the number and "BIG" if it's over 100, "small" if it's between 0 and 100, and "negative" if
// it's less than 0. Example:
// if the array is [-2, 200, 50], print:
// -2 negative
// 200 BIG
// 50 small
//
// Then write some function calls you would use to test your function.
function bigSmallNeg(numArr) {
    for (let elem = 0; elem < numArr.length; elem++) {
        if (numArr[elem] < 0) {
            console.log(numArr[elem] + " negative");
        } else if (numArr[elem] > 100) {
            console.log(numArr[elem] + " BIG");
        } else {
            console.log(numArr[elem] + " small");
        }
    };
}
bigSmallNeg([-2, 200, 50]); // -2 negative, 200 BIG, 50 small
bigSmallNeg([-1, 0, 100]); // -1 negative, 0 small, 100 small
bigSmallNeg([-40, 15, 101]); // -40 negative, 15 small, 101 BIG
bigSmallNeg([-2, 200, 50]); // -2 negative, 200 BIG, 50 small
// Exercise 12. Make an object called me that contains the following keys: name, favoriteAnimal, favoriteNumber
// The values of those keys can be whatever you choose.
let me = {
    name : "Eileen",
    favoriteAnimal : "Leopard Gecko",
    favoriteNumber : 25
}
console.log(me);
/*
{
    name : "Eileen",
    favoriteAnimal : "Leopard Gecko",
    favoriteNumber : 25
}
*/
// Exercise 13. Add another 2 keys and values to the object (you choose what they are)
me.pets = "Tzima";
me.vaccination = "Yes"
console.log(me);
/*
{
    name : "Eileen",
    favoriteAnimal : "Leopard Gecko",
    favoriteNumber : 25,
    pets : "Tzima",
    vaccination : "Yes"
}
*/
// Exercise 14. Update the favoriteAnimal value to something different
me.favoriteAnimal = "Okapi"
console.log(me);
/*
{
    name : "Eileen",
    favoriteAnimal : "Okapi",
    favoriteNumber : 25,
    pets : "Tzima",
    vaccination : "Yes"
}
*/
// Exercise 15. Print the value of favoriteAnimal.
// Note: there are at least 2 ways to get the value of a key, try to write both.
console.log(me.favoriteAnimal); // Okapi
console.log(me["favoriteAnimal"]); // Okapi
// Congrats, you made it to the end!
// Did you find this easy or hard? If you used references, which ones helped you?
// Please answer in a comment below.
// I had a small hiccup on number 2 when using += changed my array into a string. I instead pushed the value which kept it as an array.
// I googled the error I got on number 3 when I apparently tried to push values into a string. I used https://flutterq.com/uncaught-typeerror-data-push-is-not-a-function/ and when I read the last part before the summary I had a 'duh' moment and went back to number 2 to correct my answer.

// Email your file to the course staff,
// or commit your file to GitHub and email us a link.
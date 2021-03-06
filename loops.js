// Week 2 - Loops

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Write a 'while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).

let x = 0;
while (x < 5) {
    x++;
    console.log(x);
}

// Exercise 2. Write a 'do while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).

let y = 0;
do {
  y++;
  console.log(y);
} while (y < 5);

// Exercise 3. Write a 'for' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).

for (let z = 1; z <= 5; z++) {
  console.log(z);
}

// Exercise 4. Now we want a loop that prints the integers
// counting DOWN from 10 to 1 (inclusive). Write three loops that do this, to practice
// writing loops in all 3 ways -- as a 'while', 'do while', and 'for' loop.

let a = 10;
while (a > 0) {
  console.log(a);
  a--;
}

let b = 10;
do {
  console.log(b);
  b--;
} while (b > 0);

for (let c = 10; c > 0; c--) {
  console.log(c);
}

// Exercise 5. Write a loop that prints the integers from 7 to 27. Write this
// loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.

let d = 7;
while (d < 28) {
  console.log(d);
  d++;
}

let e = 7;
do {
  console.log(e);
  e++;
} while (e < 28);

for (let f = 7; f < 28; f++) {
  console.log(f);
}

// Exercise 6. Write a loop that prints numbers between 0 and 100, counting by tens.
// I.e. it will print 10, then 20, then 30, etc.
// Write this loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.

let g = 0;
while (g < 101) {
  console.log(g);
  g += 10;
}

let h = 0;
do {
  console.log(h);
  h += 10;
} while (h < 101);

for (let i = 0; i <= 100; i += 10) {
  console.log(i);
}

// Exercise 7. Add a comment as to why the following loop is an infinite loop (will
// run without ever stopping). Then fix the loop so that it stops when
// counterFour is equal to -100.

// In the while loop it decrements counterFour and the exit condition need counterFour to be above 2
let counterFour = 1;
while (counterFour > -100) {
  console.log("HELP ME!");
  counterFour--;
}

// Exercise 8. Make a variable that contains your favorite integer. Write a loop
// (your choice which type) that prints the integers from 0 to that number.

for (let j = 0; j <= 42; j++) {
  console.log(j);
}

// Exercise 9. Make a variable that contains your favorite integer (this time make sure it's
// less than 100). Write a loop (your choice which type) that prints the integers from 0 to 100.
// Next to each number it should print "not my favorite number". But next to your favorite
// number it should print "my favorite number!". Example output (if your favorite number was 2):
// 0 not my favorite number
// 1 not my favorite number
// 2 my favorite number!
// 3 not my favorite number
// ...
// (Hint - use an if statement in your loop)

let fav = 42;
for (let k = 0; k <= 100; k++) {
  if (k == fav) {
    console.log(k + " my favorite number!");
  } else {
    console.log(k + " not my favorite number");
  }
}

// Exercise 10. In some of the exercises above, we had you write all 3 types of loops, for practice.
// But in real life, how would you decide which type of loop to use? You might not have an
// exact answer, but spend a few minutes thinking about the different types of loops and/or
// doing some research and write down your thoughts in a comment below:
// I personally prefer for loops because I can call the variable inside them and also label the exit condition as well as the increments in the same line.
// I can see using a do while loop in cases where I need the loop to run AT LEAST once 
// The while loop is good for if I already have a variable called somewhere that I need something to be done based on it

// Exercise 11. Now we'll practice using nested loops (a loop inside another loop)!
// Update the nested loops below to so that for each value of outsideCounter,
// the inside loop will show a countdown

/*
counting down from 0
*********************************** 
counting down from 1
inside 1
*********************************** 
counting down from 2
inside 2
inside 1
*********************************** 
counting down from 3
inside 3
inside 2
inside 1
*********************************** 
*/

for (let outsideCounter = 0; outsideCounter <= 3 /*???*/; outsideCounter++) {
  console.log("counting down from", outsideCounter);
  for (let insideCounter = outsideCounter; insideCounter > 0 /*???*/ /*???*/; insideCounter-- ) {
    console.log("inside " + insideCounter/*???*/);
  }
  console.log("***********************************");
}

// Congrats, you made it to the end!
// Did you find this easy or hard? If you used references, which ones helped you?
// Please answer in a comment below.
// I did this before learning about do while loops so that threw me off a little but I looked up the official ref for that.
// Other than that it was pretty easy. The only weird thing was when I tried my loops in the node.js console, it kept doubling my last value but when I ran the file it didn't do that

// Email your file to us or commit your file to GitHub and email us a link.
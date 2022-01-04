/*
- JavaScript Tutorial -
------------------------
       By Eli_
------------------------
*/

/*
 - Basics - 
*/

// - Console Log - //

/*
A console log is used to print a message or any variable into the console.
This is used a lot to verify if stuff works well OR to create console programs.
For example, it could be used to print a random generated auth key. Lets see what it looks like!
*/

console.log("Hello, World!");
console.log("This is a message!");
console.log("Goodbye, World!");

// - Var, Const & Let - //

/*
There is 3 ways to define variables: var, const and let. Var is used to make a variable, something that
you can change through the code. Const is used to make a constant, something constant that you cannot
change. Let is used to make a variable, but only for 1 block. Lets see how it looks like!
*/

var a = "Hello, World!";
const b = "This is a message!";
let c = "Goodbye, World!";

console.log(a);
console.log(b);
console.log(c);

// - Variables Playground - //

/*
Variables are here to define something. The thing is that we can define anything. It can go from a simple
message to a randomized token. With that said, we have to learn how to use them in different situations.
Here, we will check some simple maths we can do with variables.
*/

var number1 = 10;
var number2 = 20;
var addition = number1 + number2;
var substraction = number2 - number1;
var multiplication = number1 * number2;
var division = number2 / number1;

console.log(addition);
console.log(substraction);
console.log(multiplication);
console.log(division);

// - Arrays - //

/*
What is that? Well, arrays lists are just some values stocked inside a box ([]). Arrays are very important
to memorize stuff and use those values later in the code. You can easily edit an array with some manipulations.
An array starts with the value 0, then goes up. So, the first object will be listed as the object number
0. Now, lets go over a few of them!
*/

var array = [];

array.push("A"); //Here, we push an object into the array.
array.pop(); //Here, we remove the last object of the array. In this case, it will remove "A".
array.push("B");
array.push("A");
array.push("C");
array.sort(); //Here, we put back the letters in order.

console.log(array);

// - Functions - //

/* 
Now, lets jump into functions. What are those? They are a way to put lines of code that won't be executed
instantly. In some way, it is also used to make some specified tasks, such as sort an array of numbers.
*/

function ThisIsAFunction(){
console.log("A"); 
}

ThisIsAFunction(); //Here, we execute the function.

/*
We can also use it with an input! Basically, it will do stuff with an input we will give to the function.
*/

function ThisIsAnotherFunction(input){
console.log(input);
}

ThisIsAnotherFunction("A");

/*
And as I said, it can be used for different tasks!
*/

var array = ["3", "1", "2"];

var newarray = array.sort(function(a, b){
       return a - b;
})

console.log(newarray);

// - If & Else Statements - //

/*
Now, we will look over a very important thing. If and Else statements. Those are used to put some
conditions in order for a code to execute. With the example bellow, we will make it so if a variable
is the same as another variable, then it prints it.
*/

function YesorNo(input){
var a = "No";
if(a === input){
       console.log("Yes");
}
else if(a !== input){
       console.log("No");
}
else{
       console.log("I don't know");
}
}

YesorNo("Yes");

/*
This might be a bit confusing, so lets take a look at it. We define the variable "a" as "No". Then,
we see that our input is "Yes". The first if statement says that if the variable a is the same as input,
it will print "Yes". The second statement is an else if. It says that if the variable isn't the same as
input, it will print "No". Then, the last statement is a single else statement. It says that if it's whatever
else, such as an error, it will print "I don't know".
*/

// - Bitwise operators - //

/* 
In the last example, I used some bitwise operators. Those were !== and ===. There is a lot more, and we will
look over a few of them. At least, the most important ones!
*/

//First one is ===. This is used to compare two objects.
var array = ["A", "A", "B"];
if(array[0] === array[1]){
       console.log(true);
}

//Second one would be !==. This means NOT. So basically, in an if statement, it would mean if it's NOT.
if(array[0] !== array[1]){
       console.log(false);
}

//Third would be &&. This is used to say AND.
if(array[0] === array[1] && array[1] !== array[2]){
       console.log(true);
}

//Last one would be ||. This is used as OR.
if(array[0] !== array[1] || array[0] === array[2]){
       console.log(false);
}

// - Booleans - //

/*
In the previous example, I used false and true all the way down. What are these? Well, they are boolean
expressions. Boolean is composed of 3 values: true, false and null. I think it's pretty obvious to tell
what they all mean, but I'll go over them. Null means it's inexistant, unknown. True means it's true and
flase means it's false. You can use those to check if a variable or a code is true or false.
*/

var number1 = 10;
var number2 = 20;
var result = number1 === number2;

if(result === false){
console.log(false);
}
else if(result === true){
       console.log(true);
}
else{
       console.log(null);
}

// - Regular Expressions - //

/*
Regular Expressions, also called RegEx is a sort of filter for any variable. It basically is mainly used
to match two variables together and return either a boolean value, or a decimal value.
*/

var regex1 = /1/g //Expression /g is used to make a global search. It basically stop when it finds the value.
var regex2 = /[a-z]/g //This is used to search every lowercast letters.
var regex3 = /[A-Z]/g //This one will search every uppercast letters.

var word1 = "This is 1 word";
var word2 = "HELLO I AM ELi";
var word3 = "all in Lower caster";

var first = word1.match(regex1);
var second = word2.match(regex2);
var third = word3.match(regex3);

console.log(first);
console.log(second);
console.log(third);

/*
We can obviously push it a bit farther. Lets see it with a function.
*/

function RegTest(){
       var regex = /Eli/g
       var sentence = "Hello, I am Eli and this is my tutorial!";

       if(sentence.match(regex)){
console.log(true);
       }
       else{
              console.log(false);
       }
}

RegTest()

// - Dates - //

/*
Maybe you were wondering if we could get dates through a code. If no, then ask yourself if you can.
The answer is obviously yes. This can be used to have an exact timestamp. Lets take a look at it!
*/

var date = new Date();
var day = String(date.getDate()).padStart(2, '0');
var month = String(date.getMonth() + 1).padStart(2, '0');
var year = String(date.getFullYear()).padStart(2, '0');

console.log(month + "/" + day + "/" + year);

/*
Here, I made it within a very complicated method. We can get a date with a way easier way. It's just not
as precise and good looking. Instead of showing 01/03/2022, it will show 1/3/2022.
*/

var date2 = new Date();
var day2 = date.getDate();
var month2 = date.getMonth() + 1;
var year2 = date.getFullYear();

console.log(month2 + "/" + day2 + "/" + year2);

// - Loops - //

/*
Now, something pretty important. Loops! There is 2 type of loops, or maybe 3 if we consider do as a loop.
So, the 2 loops are: for and while. For loops are used by defining the variables at the beginning of it
or beforhand. While loops are used to execute a function as long as the requirement is meeted.
Lets take a look at them!
*/

function ForLoop(input){
for(let i = 0; i < input;){ 
       /*
       Here, we defined "i" as 0. It will execute the code as long as i will be smaller than input
       */
       console.log(i);
       i++;
}
}

ForLoop(10);

function WhileLoop(input){
       let i = 0;
       while(i < input){
              /*
              Very similar to for loop, it will execute the code as long as the requirement is meeted
              */
              console.log(i);
              i++;
       }
}

WhileLoop(10);

/*
Earlier, I mentioned a third loop called do. Well, it's part of a while loop and is pretty much just a
continuation of it. Lets see an example!
*/

function DoLoop(input){
       let i = 0;
       do {
              console.log(i);
              i++;
       }
       while(i < input);
}

DoLoop(10);

// - Arrow Function - //

/*
So, we learned how to create functions with the format function(){}. Now, we will learn how to make them
with arrow, under the format () => {}.
*/

let firstnumber = 10;
let secondnumber = 20;

() => {
        return(firstnumber + secondnumber);
}

/*
Those are also sometime used with modules within node.js, which we will see just after.
*/

// - Modules - //

/*
So, since we are working with node.js, we have the ability to use npm modules. We will use a famous one
called "readline" as an example. This module allows us to read an input within the console. To download a
module, you have to execute the command > npm i {module_name}@{version} --save
*/

const readline = require("readline"); //Here, we just included a module to our code. (> npm i readline --save)

const rl = readline.createInterface({ 
/*
Here, I'm creating an interface. This is needed in order for the module to work. You can find documentation
on how it works on internet.
*/
       input: process.stdin,
       output: process.stdout
});

function ModuleExample(input){
       for(let i = 0; i < input;){
              console.log(i);
              i++;
       }
}

rl.question("", (y) => {
ModuleExample(y)
rl.close();
})

/*
Another famous module is discord.js, used to create discord bots with node.js. Lets take a quick look at it.
*/

const discord = require("discord.js"); //(> npm i discord.js@11 --save)
const bot = new discord.Client();
const prefix = "!";

bot.on("message", msg => { 
/*
This one is a bit tricky. It includes an event and a callback. The event being "message" and the callback
being msg.
*/
if(msg.content === prefix + "ping"){
       msg.channel.send("Pong!");
}
});

bot.login("TOKEN");

// - Math Floor - //

/*
Math Floor is a very useful side of JavaScript. It is used to make several math things. My favorite one is the
randomizer. Lets take a look at it!
*/

let i = ["A", "B", "C"];

var x = i[Math.floor(Math.random() * i.length)]; //This will pull a random object from the array.

console.log(x);

// - Errors - //

/*
Obviously, errors can happen and the code might crash. To prevent that OR to volunteer errors, there is some
tricks. Lets see them!
*/

var result2 = 1 + 1;

if(result2 !== 2){
throw 'ERROR'; //This will cause an error and crash the code on purpose.
}

/*
With errors comes try. If you want to catch errors, you have to use a try statement. Lets see what it looks
like!
*/

else if(result2 === 2){
       try{
          console.log(true)    
       }
       catch(err){
              throw err;
       }
}

// - Params & This - //

/*
Adding to functions, we can add parameters BEFORE it. We will have to use "this" statement though.
Lets see how we can do this!
*/

/**
 * @param {String} name
 * @return {Boolean}
 */

this.example = (name) => {
       if(typeof name !== String){
              return(false);
       }
       else if(typeof name === String){
              return(true);
       }
}

/*
This will be it for today, I'll start working on more stuff for this tutorial, no worries. With that said, I hope what I've done for the moment is helping some of you.
*/


// - Over - //

/*
To Be Continues...
*/

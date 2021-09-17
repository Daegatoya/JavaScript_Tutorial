//Now, lets practice again!

//#1
function LoopFor(){
    //Here, you will create a for loop that will add 1 everytime to the i variable and will have a maximum value of 5.
    //Now, make a console.log() function that will say what is the current number everytime.
}

LoopFor();

//#2
function LoopWhile(){
    let i = 0;
    do {
        console.log(/*Here, you will print what is the current number of i variable*/);
        i++;
    } //Here, create a while that will executes until i reaches 10.
}

LoopWhile();

//#3
function BreakIt(input){
    let j = 0; 
    //Here, create a while loop that will add 1 to j everytime and log the current number until j reaches the input - 1.

    if(/*HOWEVER, you will break the loop when j reaches 7.*/){
        break;
    }
}

BreakIt(10);

//#4
function SetPractice(input){
    var NewSet = //Here, create a set that will have an array with 3 values inside.
    NewSet.add("A")
    NewSet.delete(input)
}

SetPractice("A");

//#5
function MapPractice(){
    var NewMap = //Here, you will create a new map with 3 objects. The first object will have a value of 10, the second will have a value of 15 and the last object will be "C" and a value of 20.

let NewerMap = NewMap.get("C");
console.log(NewerMap);
}

MapPractice();

//#6
//Now, the last number, and the hardest one!
const readline = require("readline");

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
})

//Here you will create a function that takes an input from the user in the console. Then, you will return the type of this said input and put it in a set, then log the set in the console.


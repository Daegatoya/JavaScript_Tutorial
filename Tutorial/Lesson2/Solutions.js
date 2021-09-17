//Now, lets practice again!

//#1
function LoopFor(){
    for(let i = 0; i < 6; i++){
        console.log(i)
    }
}

LoopFor();

//#2
function LoopWhile(){
    let i = 0;
    do {
        console.log("The current number is: " + i);
        i++;
    } while(i < 11)
}

LoopWhile();

//#3
function BreakIt(input){
    let j = 0; 
    while(j < 11){
        console.log("The current number is: " + j)
        j++;
        if(j == 7){
            break;
        }
    }
}

BreakIt(10);

//#4
function SetPractice(input){
    var NewSet = new Set(["A", "B", "C"])
    NewSet.add("A")
    NewSet.delete(input)
}

SetPractice("A");

//#5
function MapPractice(){
    var NewMap = new Map([
        ["A", 10],
        ["B", 15],
        ["C", 20]
    ])

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
function TakesInput(input2){
    var y = typeof(input2);
    console.log(y);
    var Set2 = new Set("")
    Set2.add(input2)
    console.log(Set2);
}
rl.question("", (x) => {
    TakesInput(x)
    rl.close();
})

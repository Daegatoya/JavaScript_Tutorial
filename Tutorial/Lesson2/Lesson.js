//Welcome to the 2nd lesson of JavaScript! Lets beggin

function LoopTest(){ //First of all, we will look at loops. The first loop is the "for" loop.
    for(let i = 0; i < 4; i++){ //Here, we need to declare one variable with "let" and give it a value. Then, we have to give it a break condition and add 1 everytime our loop is executed until it reaches the condition.
    console.log(i);
    }
    }
    
    LoopTest();
    
    function WhileLoop(){ //Lets now look at while loops.
    let j = 0; //We can also declare our variable BEFORE we enter a loop.
    while(j < 10){ //The while loop basically do an action indefinitely until the condition is false.
    console.log("We're currently at: " + j);
    j++; //Here, we add 1 to our variable's value everytime the console.log is executed.
    }
    }
    
    WhileLoop();
    
    function DoWhile(input){ //There is another way to execute a while loop.
        let p = 0;
        do { //Just use a do function. It does the exact same thing as a normal while loop though.
            console.log("We're currently at: " + p);
            p++;
        }
        while (p < input);
    }
    
    DoWhile(10);

function BreakLoop(){ //There is also a function called "break();" which basically end a loop if a condition is met.
let i = 0;
while(i < 50){
    console.log("We're currently at: " + i)
    i = i + 5; //We can also make it so it adds more than 1 everytime.
    if(i == 40){ //Here, if the variable reaches 40, then the loop ends.
        break;
    }
}
}

BreakLoop();

function SetTest(){ //Now, lets look at what a set is. A set is basically similar to an array, but with more functionality.
    const WebSite = "github.com/Plattyz"; //This is an example of how we can use a set. For example, if someone is getting kicked from a website for 10 minutes, you will add his IP to the set so he cannot connect.
    const A = "https://" + WebSite;
    const NewSet = new Set([A, "B", "C"])
    NewSet.add("D"); //You could add the banned computer's IP with an if () {}; condition.
    NewSet.delete("B"); //Here, lets imagine it's the IP of the banned computer. You could set a timeout function to delete it from the set after a 10 minutes.
    NewSet.delete("C");
    NewSet.delete("D");
    console.log(NewSet)
}

SetTest();

function SetMaps(input){ //Maps are pretty similar to an array too.
    const NewMap = new Map([ //Here, we create a new map and put some values in it.
        ["A", "41"], //The fun thing with map is that you can declare a value to every string in your array.
        ["B", "42"],
        ["C", "43"]
    ]);
    let NewerMap = NewMap.get(input) //Now, we take the value of the input from the map.
    console.log("0x" + NewerMap); //Now, we just add 0x in front of it. Congrats! We just made a tiny ASCII -> Hex convertor!
}

SetMaps("C");

function TestType(){ //Now, lets look at typeof. First, we need to know what types exists. There is 5 types that exists: numbers(123), object(["A", "B"]), string("Hello"), boolean(true), function(function () {};).
    var x = typeof("This returns string"); //A typeof will basically return the type of the value we give it.
    console.log(x);
    var y = typeof(function ThisReturnsFunction() {});
    console.log(y);
    var z = typeof(["This", "Returns", "Object"]);
    console.log(z);
    var array = ["A", "B", "C"]; //We can even play with array!
    var array = array.toString().indexOf("C") //Here, we just transformed our array to a string and got the index (value) of C (which is 4).
    var w = typeof(array);
    console.log(array + " Has a type of: " + w);
}

TestType();

function BitWise(input, input2){ //Now, lets look at Bitwise.
if(input == 5 && input2 == 6){ //The bitwise of this function is "&&". This one means "and". So basically, if input is equal to 5 AND input2 is equal at 6, then{}.
    console.log(true);
} else if(input != 5 || input2 != 6){ //Here, our bitwise is ||. This one means "or". So, else if input is not equal to 5 OR input2 is not equal to 6, then{}.
    console.log(false)
}
}

BitWise(5, 6) //This one will return true.
BitWise(4, 6) //This one will return false.

const readline = require("readline"); //Wow! A new thing! We will look at node packages.

const rl = readline.createInterface({ //We are using readline package for this function. This package allows the user to input something in the console.
    input: process.stdin, //Our input will be process.stdin.
    output: process.stdout //Our output will be process.stdout.
})

function PackageTest(input2){
for(let i = 0, j = input2; i < j; i++){ //We even used a for loop that we saw earlier!
console.log(i);
}
}
rl.question(" ", (userinput) => { //Here is how we catch the input from the user.
PackageTest(userinput) //Here, we will just make it so the user can input a number, and our function will print every numbers that comes before the input.
rl.close(); //We also need to close our interface after.
});

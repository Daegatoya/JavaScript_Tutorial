console.log("Hello World!"); //Here is how to print in the console.

function HelloWorld(){ //Create yourself a function to run it later.
    console.log("Hello World!"); //Still print "Hello World!" in the console.
}

HelloWorld(); //Run the function after.

function Num(input, input2){ //A new functions with parameters you can declare in your future use of this function.
    var x = input + input2 //A simple addition of the 2 parameters, which will be numbers.
    console.log(x) //Print the variable in the console.
}

Num(1, 3) //Here, we declare our parameters inside our function. The answer is now 4.

function Slice(input3){ //Only 1 parameter this time.
    var y = input3.split(":") //Here, we split the text we will put in our parameter. We split it whenever there is a ":"
    console.log(y[0] + ":" + y[1]) //By splitting, we created an array containing every splitted parts of the text. Here, we got 2 of them inside our array. We now print them together to reform the full text.
}

Slice("It is currently 1:1") //Here, we define our text inside our parameter.

function NaN(input4, input5){ //We will take a quick look at numbers.
    if(isNaN(input4) || isNaN(input5)){ //An if statement! What is this? This is basically a condition. For example: If you do not eat your vegetables, you can't have a desert. Now, put it in code language.
return console.log("Only numbers are accepted."); //Above, we declared the if statement as isNaN. This stands for is Not a Number. Basically, it means if the parameter isn't a number, then return in the console the message.
    }
    else{ //The else statement is used with the if statement. Basically means to do another action if the if statement isn't respected. In our case, we will approve it if it is a number.
        var x = input4 * input5 //Here is a multiplication of our two  numbers!
        console.log(x);
    }
}

NaN("3", "5") //And here are our 2 numbers.

function Ar(){ //Wow! Array! Array are basically a list of values.
    var array = ["B", "C", "A"] //For example, our B has a value of 0 and our C has a value of 1.
var x = array.sort().toString(); //Here, we will just sort our array in an alphabetic order and then remove the [].
console.log(x);
var y = array.sort().join(" "); //Now, we sort it again, but this time, we use the join function to replace every "," with spaces.
console.log(y)
}

Ar();

function Ar2(input6){
    var array2 = ["A", "B", "C"] 
    array2.push(input6); //Here, we will push our parameter to the array list, which means we will add our parameter to the list.
    var x = array2.join(" "); //We redo what we did before to replace every comas.
    console.log(x)
}

Ar2("D"); //Here is what we add to our array list.

function Ar3(){
    var array = ["A", "B", "C"] //This is our first array.
    var array2 = ["D", "E", "F"] //And this is our second array, not sorted.
   const y =  array.concat(array2); //We first start by combining our 2 arrays in only 1 array.
    const x = y.sort().join(" "); //Then, we sort our new array in alphabetic order and remove every comas once again.
    console.log(x)
}

Ar3();

function Ar4(){
    var array = ["B", "A", "C", "1"]; //Here, we only want letters but our last value is a number!
    array.pop(); //Use the pop function to remove the last value from the array list.
var x = array.sort().join(" "); //Then, we sort it!
console.log(x);
}

Ar4();

function Ar5(){
    var array = ["2", "0", "A", "4"]; //Here, we only want numbers. However, our letter isn't at the end! How can we remove it? We cannot use pop! Lets see.
    var index = 2; //Here, we define the value of the letter we want to remove.
    array.splice(index, 1); //Boom! Splice function! The 1 means that we only want to remove 1 value and not continue. If we put 2, it would remove A and 4.
    var y = array.sort().join(" ");
console.log(y);
}

Ar5();

function Mathematics(){ //Now, lets jump in maths.
var array = ["1", "2", "3"]; //Our lovely array.
var x = array[Math.floor(Math.random()*array.length)]; //Here, we create a new value for our array. We use Math.floor() and Math.random() to take a random value from our array. array.length means the amount of values in our array, which is 3.
console.log(x)
}

Mathematics();

function StringLol(input7){ //Last one! 
    var x = input7.split(".") //We want to do another split! So, lets split the dot and replace it with a space.
    console.log(x[0] + " " + x[1]) //Here, we made it so between x[0] and x[1], there is a space instead of a dot.
}

StringLol("Hello.World!");

//Over! Thanks for looking at this quick tutorial! Hope you will have fun coding!

//Now, lets practice together!
//#1
function RemoveHashtag(input){
    var x = input.split("#")
    console.log(x[0] + " " + x[1])
    }
    
    RemoveHashtag("Hello#World!");
    
    //#2
    function ArrayPractice(){
    var array = ["B", "C", "A"];
    var x = array.sort();
    console.log(x);
    }
    
    ArrayPractice();
    
    //#3
    function NaN(input){
        if(isNaN(input)){
            console.log("Not a number!")
        } else {
            console.log(input);
        }
    }
    
    NaN(1)
    
    //#4
    function SquareRoot(input){
        var x = Math.sqrt(input);
        console.log(x);
    
        var y = x * x
        console.log(y)
    }

    SquareRoot(2);
    
    
    //#5
    function Params(input, input2){
if(isNaN(input) || isNaN(input2)){
console.log("Parameters aren't numbers!")
} else {
    var x = input * input2
    var y = x * x
}
console.log(y);
    }

    Params("1", "2")
    

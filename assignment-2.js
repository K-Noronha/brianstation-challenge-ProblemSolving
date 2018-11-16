//Challenge 1

for (var x="#"; x.length<=7; x+="#"){
    console.log(x);
}

/*
A variable x is initalized with the string "#". 
The condition to enter the loop would be if the variable x has a length of 7 or less. 
In the loop the varible x is logged. 
After being logged, a "#" is added at the end of the x string. 
If the condition is still met the loop is executed again until the length of the string is 8.
This results in a triangle of #; starting with 1 #, then an extra # is added on each line until it reaches a maximum of 7 #'s.
*/


//Challenge 2

function isEven(number){
    if (number%2){
        console.log("the number is odd");
    }
    else if (number%2 == 0){
        console.log("the number is even");
    }
    else {
        console.log("is not a number");
    }   
}

/*
If a number is divisible by 2 it is even and if it has a remainder it is odd. 
The condition (number%2) will evaluate as true (1) when there is a remainder and therefore means the number is odd. 
(number%2) will evaluate to false when the number is a divisable by 2 or is not a number (or is not valid). 
Using !(number%2) would group all false cases as even, even if it is not a number. 
To fix this the only if the number%2 gives a value of 0, it will be logged as even.
*/
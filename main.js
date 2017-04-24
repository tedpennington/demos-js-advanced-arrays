console.log("Hello main.js")

var colors = ["red", "blue", "green", "orange", "teal"];

// **Anonymous function inside a forEach method:**

// colors.forEach(function(item){
//     var newColorString = "I like this color:" + item;
//     console.log(newColorString);
// });

// **This for loop gets you the same result as the above "for each" method**

for (var i = 0; i < colors.length; i++){
    var newColorString = "I like this color:" + colors[i];
    console.log(newColorString)
}

// **Map method is shorthand for creating a new array (makes a copy of the original array)**
var reversedColors = colors.map(function(color){
    return color.split("").reverse().join("");
});

console.log("reversedColors", reversedColors);

// var backwardColorList = colors.reverse();
// console.log("backwardColorList", backwardColorList)

// **The filter method creates a copy of the array, and filters based on what you specify**
var fourLetters = colors.filter(function(color){
    return color.length === 4;
});

console.log("fourLetters", fourLetters);

// **Reduce does some logic and...

var numbers = [51, 40, 4, 98, 3];
console.log("numbers", numbers);
var sum = numbers.reduce(function(prev, curr){
    console.log(prev, curr);
    return prev + curr;
});
console.log("sum", sum);



console.log("-------------")

/* **Sort nubers decending order,
Remove any greater than 19,
Multiply each remaining number by 1.5 and then subtract 1
Output in the console the sum of all resulting numbers*/

var integers = [13, 25, 4, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

var chainingResult = integers.
sort(function(a,b){
    // console.log("a is ", a, "b is ", b);
    return a - b})
.reverse()
.filter(function(num){
    // console.log("num", num)
    return num <= 19})
.map(function(num){
    // console.log("num", num);
    return (num * 1.5) - 1})
.reduce(function(prev, curr){
    // console.log ("prev", prev, "curr", curr);
    return prev + curr;
});
console.log("chainingResult", chainingResult);






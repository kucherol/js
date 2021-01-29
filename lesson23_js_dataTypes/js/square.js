let p = prompt("Enter the square perimeter");
let l = prompt("Enter the circle length");
let R = l/(2*3.14);
let r = (p/4)/2;

if (r >= R) {
alert("The circle could be inserted into the square");
} else {
alert("The circle could not be inserted into the square");
}
const num = prompt("Enter a three-digit number");


if (num[0] === num[1] || num[0] === num[2] || num[1] === num[2]) {
    alert ("There is a similar number");
} else {
    alert ("There is no similar numbers");
}
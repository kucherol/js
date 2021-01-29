const year = prompt("Enter a year");
const isYear = Number(year);

if (isYear % 4 == 0 && isYear % 100 !== 0 || isYear % 400 == 0) {
    alert("It is a leap year");
} else {
    alert("It is not a leap year");
}
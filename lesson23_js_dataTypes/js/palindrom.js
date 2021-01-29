const pal = prompt("Enter a five-digit number");

if (pal[0] === pal[4] && pal[1] === pal[3]) {
    alert("It is a palindrom");
} else {
    alert("It is not a palindrom");
}
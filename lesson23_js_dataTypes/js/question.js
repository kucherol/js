let first = prompt("What is the avarage distance from earth to the moon (km) ? Choose the correct answer: 382500, 155600, 550000.");
let second = prompt("What is the avarage radius od the earth (km) ? Choose the correct answer: 18150, 6371, 5284.");
let third = prompt("How fast our planet moves around the sun (km/s) ? Choose the correct answer: 100, 80, 30.");
let points = 0;


if (first == 382500) {
points = points + 2;
} 
if (second == 6371) {
points = points + 2;
}
if (third == 30) {
points = points + 2;
} 
if (points == 6) {
alert("Congratulations! U are a future astronaut!! ");
} else {
alert("Sorry, your score ");
}
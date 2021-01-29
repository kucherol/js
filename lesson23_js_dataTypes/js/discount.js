let summ = prompt("Enter the summ of goods");
let sum = Number(summ);

if (sum >= 200 && sum < 300) {
    sum=sum - (sum * 2 / 100);
alert(sum);
} else if (sum >= 300 && sum < 500) {
    sum=sum - (sum * 5 / 100);
    alert(sum); 
} else if (sum >= 500) {
    sum=sum - (sum * 7 / 100);
    alert(sum);
} else {
alert("The summ is too low");
}
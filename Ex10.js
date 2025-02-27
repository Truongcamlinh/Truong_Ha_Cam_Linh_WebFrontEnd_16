let number1 = parseInt(prompt("Nhap so thu nhat:"));
let number2 = parseInt(prompt("Nhap so thu hai:"));
min = Math.min(number1, number2);
max = Math.max(number1, number2);
randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
console.log("So ngau nhien trong khoang", min, "den", max, "la:", randomNum);
alert("So ngau nhien: " + randomNum);

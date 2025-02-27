let a = +prompt("Nhap so a");
let b = +prompt("Nhap so b");
let c = +prompt("Nhap so c");
let max = (a > b) * a + (a <= b) * b;
max = (max > c) * max + (max <= c) * c;
alert(max);

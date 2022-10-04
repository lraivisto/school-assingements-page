let a = 130e3;
let x = 0.1+0.2;
let y =  (0.2 * 10 + 0.1 * 10) / 10
let luku = 10;
let luku1 = 20;
let yht = luku+luku1;
let min = luku-luku1;
let krt = luku*luku1;
let ja = luku/luku1;
let kaava = 100/"Omena";
let kaava1 = 100/"10";
let luku2 = 9.656;
let n = luku2.toFixed();
let n1 = luku2.toFixed(1);
let n2 = luku2.toFixed(2);

function nap1() {
    document.getElementById("a").innerHTML =
    `${a}`;
}

function nap2() {
    document.getElementById("b").innerHTML =
    `x = ${x}`;
    document.getElementById("b2").innerHTML =
    `y = ${y}`;
}

function nap3() {
    document.getElementById("c").innerHTML =
    `Yhteen: ${yht}`;
    document.getElementById("c2").innerHTML =
    `Miinus: ${min}`;
    document.getElementById("c3").innerHTML =
    `Kerto: ${krt}`;
    document.getElementById("c4").innerHTML =
    `Jako: ${ja}`;
}

function nap4() {
    document.getElementById("d").innerHTML =
    `${kaava}`;
}
function nap5() {
    document.getElementById("e").innerHTML =
    `${kaava1}`;
}
function nap6() {
    document.getElementById("f").innerHTML =
    `${n}`;
    document.getElementById("f2").innerHTML =
    `${n1}`;
    document.getElementById("f3").innerHTML =
    `${n2}`;
}
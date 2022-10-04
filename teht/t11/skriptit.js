let nimet = ["Tapio", "Leela", "Matti", "Antti"];
let numerot = [1,7,45,32,27,86]

function osa1() {
    document.getElementById("osa1").innerHTML =
        `${nimet}`;
}
function osa2() {
    document.getElementById("osa2").innerHTML =
        `${nimet[2]}`;
}
function osa3() {
    document.getElementById("osa3").innerHTML =
        `Niitä on: ${nimet.length}`;
}
function osa4() {
    document.getElementById("osa4").innerHTML =
        `${nimet.slice(-1)[0]}`;
}
function osa5() {
    nimet.push("Pekka")
    document.getElementById("osa5").innerHTML =
        `${nimet}`;
}
function osa6() {
    document.getElementById("osa6").innerHTML =
        `${nimet.join(' ')}`;
}
function osa7() {
    nimet.splice(2,1, "Liisa","Laila");
    document.getElementById("osa7").innerHTML =
        `${nimet}`;
}
function osa8() {
    document.getElementById("osa8").innerHTML=
    `${nimet.sort()}`;
}
function osa9() {
    document.getElementById("osa9").innerHTML=
    `${numerot.sort((a, b) => a - b)}`;
}
function osa10() {
    document.getElementById("osa10").innerHTML=
    `${numerot.sort( () => .5 - Math.random() )}`;
}
function osa11() {
    let pien = numerot[0]
    let isoin = numerot[numerot.length-1]
    document.getElementById("osa11").innerHTML=
    `pienin = ${pien}, isoin = ${isoin}`;
}
"use strict";
function osa1() {
    x = 3.14; 
}

function osa3() {
    var x = document.getElementById("osote").value;
    let patt = /@/;
    console.log(patt.test(x));
    let kokeile = patt.test(x);
    if(kokeile==true) {
        document.getElementById("joo").innerHTML =
        `Sähköposti on validi. @-merkki löydetty.`;
    } else {
        document.getElementById("ei").innerHTML =
        `Sähköposti ei validi. @-merkkiä ei löydetty.`;
        }
}
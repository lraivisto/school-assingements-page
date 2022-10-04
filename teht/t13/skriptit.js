function osa1() {
    var x = document.getElementById("text1").value;
    var min = -1;
    var max = 41;
    if (x > min && x < max) {
        console.log("toimii");
    } else {
        document.getElementById("texxxt1").innerHTML =
            `Pistemäärä ei välillä 0 - 40.`;
    }
    if (x > min && x < 16) {
        document.getElementById("t1").innerHTML =
            `Arvosana: T1`;
    }
    if (x > 15 && x < 31) {
        document.getElementById("h3").innerHTML =
            `Arvosana: H3`;
    }
    if (x > 30 && x < 41) {
        document.getElementById("k5").innerHTML =
            `Arvosana: K5`;
    }
}

//ale20
//ale10
//eiale
function osa2() {
    var xx = document.getElementById("hinta").value;
    if (xx > 99) {
        var j = (0.2 * xx);
        var k = (xx - j);
        document.getElementById("ale20").innerHTML =
            `20 prossaa alea hinnasta ${xx} on: ${k}`;
    }
    if (xx > 49 && xx < 100) {
        var j = (0.1 * xx);
        var k = (xx - j);
        document.getElementById("ale10").innerHTML =
            `10 prossaa alea hinnasta ${xx} on: ${k}`;
    }
    if (xx < 50) {
        document.getElementById("eiale").innerHTML =
            `Ei ollenkaan alea!`;
    }
}
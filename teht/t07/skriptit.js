let luku1 = 5;
let luku2 = 3;
let f = 77;

function nappi() {
    laskija();
    muut();
}

function laskija() {
    let luku3 = luku1 + luku2;
    document.getElementById("lask").innerHTML =
        `Funktio palautti summaksi luvun ${luku3}.`;
}

function muut() {
    let kaava = (5 / 9) * (f - 32);
    document.getElementById("kaavtu").innerHTML =
        `${f} fahrenheit-astetta on ${kaava} celcius-astetta.`
}
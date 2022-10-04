function osa1() {
    //pid = osa1out
    let x = document.getElementById("osa1in").value;
    let numerot = [];

    for (let i = 2; i <= x; i += 2) {
        numerot.push(i);
    }
    console.log(numerot);
    document.getElementById("osa1out").innerHTML =
        `${numerot}`;
}
function osa2() {
    //pid = osa2out
    let numero = 0, yhteen = 0, numlasku = 0;
    do {
        numero = parseInt(prompt('Enter Number'));
        yhteen = numero >= 0 ? yhteen += numero : yhteen;
        if (numero != -1) numlasku++;
        keskiarvo = yhteen / numlasku;
    } while (numero != -1);
    console.log(yhteen, keskiarvo.toFixed(1));
    document.getElementById("osa2out").innerHTML =
        `Kaikki numerot yhteen ovat: ${yhteen} ja niitten keskiarvo on: ${keskiarvo.toFixed(1)}`;
}
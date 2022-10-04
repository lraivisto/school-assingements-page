let nimi = 'luka';
let luku = 20;
function paine() {
    console.log("Nimi " + nimi);
    console.log("Luku: " + luku);
    document.getElementById("nimi").innerHTML =
        nimi;
    document.getElementById("luku").innerHTML =
        luku;
    document.getElementById("yhtnl").innerHTML =
        nimi + "" + luku;
    document.getElementById("yhtnl2").innerHTML =
        nimi + "" + (luku + luku);
    let luku1 = 20;
    let luku2 = 21;
    document.getElementById("totuus1").innerHTML =
        luku == luku1;
    document.getElementById("totuus2").innerHTML =
        luku == luku2;
    let mopot =["Suzuki","Solifer","Honda"]
    console.log(mopot[0])
    document.getElementById("tau0").innerHTML =
        mopot[0];
    document.getElementById("tau2").innerHTML =
        mopot[2];
    let koira = {nimi:"Moppe", laji:"sekarotuinen", ikä:4, väri: "ruskea"}
    document.getElementById("tulostakoira").innerHTML =
        "Koira nimeltä "+koira.nimi+" on "+koira.laji+" ja sen ikä on "+koira.ikä+" ja väri on "+koira.väri+".";
}
function o1() {
    var str1 = "abcdefghijklmnopqrstuvwyxåäö";
    var n1 = str1.length;
    document.getElementById("o1").innerHTML =
    `${str1} ja ${n1}`;
}
function o2n3() {
    var str2 = "Ohjelmistokehittäjä osaa ohjelmoida, hyödyntää rajapintoja, käsitellä tietoa sekä käyttää versionhallintaa. Ohjelmistokehitystiimin jäsenenä toimiessaan hän kommunikoi asiakkaan kanssa, suunnittelee ohjelmiston toteutuksen ja varmistaa toteutettavien toimintojen laadun.";
    var n2 = str2.search("ohjelmoida");
    document.getElementById("o2").innerHTML =
    `alkaa ${n2}`;
    var mes = str2.slice(0, 107);
    document.getElementById("o3").innerHTML =
    `${mes}`;
}
function o5() {
    var str3 = "Ohjelmistokehittäjä osaa ohjelmoida, hyödyntää rajapintoja, käsitellä tietoa sekä käyttää versionhallintaa. Ohjelmistokehitystiimin jäsenenä toimiessaan hän kommunikoi asiakkaan kanssa, suunnittelee ohjelmiston toteutuksen ja varmistaa toteutettavien toimintojen laadun.";
    var mes2 = str3.slice(107, 1000);
    document.getElementById("o5").innerHTML =
    `${mes2}`;
}

function o6() {
    let str4 = "Ohjelmistokehittäjä osaa ohjelmoida, hyödyntää rajapintoja, käsitellä tietoa sekä käyttää versionhallintaa. Ohjelmistokehitystiimin jäsenenä toimiessaan hän kommunikoi asiakkaan kanssa, suunnittelee ohjelmiston toteutuksen ja varmistaa toteutettavien toimintojen laadun.";
    let m = str4.replace("versionhallintaa","github")
    document.getElementById("o6").innerHTML =
    `${m}`;
}
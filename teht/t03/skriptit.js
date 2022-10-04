function alertlaatikko() {
    alert("Toimii! :Dddd");
}
function konsolalert() {
    console.log("Toimii! :Ddd");
}
function kysel() {
    let nimi = prompt("Syötä nimesi:", "nimi");
    if (nimi != null) {
        document.getElementById("kyselte").innerHTML =
            "Päivää " + nimi + "! Miten voit?";
    }
}
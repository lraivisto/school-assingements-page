function tarkistaLomake() {
    var x = document.forms["lomake2"]["etnimi"].value;
    if (x == "") {
        alert("Etunimi pitää antaa");
        return false;
    }
}
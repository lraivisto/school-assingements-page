function nappi() {
    var x = parseInt(document.getElementById("numero1").value);
    var y = parseInt(document.getElementById("numero2").value);
    let fr = "";
    let i = 0;

    if (isNaN(x) || x < 1 || x > 10 || isNaN(y) || y < 1 || y > 10) {
        alert("Numeron pitää olla 1-10!");
    } else {
        let summa = x + y;
        let erotus = x - y;
        let kerto = x * y;
        let jako = x / y;
        document.getElementById("summa").innerHTML = `Luvut yhteen (${x}+${y}) = ${summa}`;
        document.getElementById("erotus").innerHTML = `Luvut erotettu (${x}-${y}) = ${erotus}`;
        document.getElementById("kerto").innerHTML = `Luvut kerrottu (${x}*${y}) = ${kerto}`;
        document.getElementById("jako").innerHTML = `Luvut jaettu (${x}/${y}) = ${jako}`;

        if (x <= y) {
            for (i = x; i <= y; i++) {
                fr = fr + i + " ";
            } document.getElementById("järj").innerHTML = `Luvut järjestykseen: ${fr}`;
        } if (y <= x) {
            for (i = y; i <= x; i++) {
                fr = fr + i + " ";
            } document.getElementById("järj").innerTML = `Luvut järjestykseen: ${fr}`;
        }
    }
}
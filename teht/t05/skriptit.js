function lask() {
    let a = 5;
    let b = 2;
    let c = a + b;
    let c2 = a * b;
    let c3 = a - b;
    let c4 = a / b;
    let c5 = a % b;
    let d = a ** b;
    document.getElementById("numeort").innerHTML =
        "A: " + a + " B: " + b;
    console.log("Yhteen: " + c);
    console.log("Kerto: " + c2);
    console.log("Miinus: " + c3);
    console.log("Jako: " + c4);
    console.log("Jakojäännös: " + c5);
    console.log("Potenssiin: " + d)
    document.getElementById("laskte").innerHTML =
        "Yhteen: " + c + "!";
    document.getElementById("lasktev").innerHTML =
        "(" + a + "+" + b + "=" + c + ")";
    document.getElementById("laskte2").innerHTML =
        "Kerto: " + c2 + "!";
    document.getElementById("lasktev2").innerHTML =
        "(" + a + "*" + b + "=" + c2 + ")";
    document.getElementById("laskte3").innerHTML =
        "Miinus: " + c3 + "!";
    document.getElementById("lasktev3").innerHTML =
        "(" + a + "-" + b + "=" + c3 + ")";
    document.getElementById("laskte4").innerHTML =
        "Jako: " + c4 + "!";
    document.getElementById("lasktev4").innerHTML =
        "(" + a + "/" + b + "=" + c4 + ")";
    document.getElementById("laskte5").innerHTML =
        "Jakojäännös: " + c5 + "!";
    document.getElementById("lasktev5").innerHTML =
        "(" + a + "%" + b + "=" + c5 + ")";
    document.getElementById("laskte6").innerHTML =
        "Potenssiin: " + d + "!";
    document.getElementById("lasktev6").innerHTML =
        "(" + a + "**" + b + "=" + d + ")";
}
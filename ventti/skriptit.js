
let cardsxd = [];
let plcD = "";

let a = 1;
while (a <= 4) {
    if (a == 1) { plcD = "&hearts;"}
    if (a == 2) { plcD = "&diams;" }
    if (a == 3) {plcD = "&clubs;"}
    if (a == 4) {plcD = "&spades;"
}
    let cardsxdnumber = 1;
    while (cardsxdnumber <= 13) {
        cardsxd.push([plcD, cardsxdnumber]);
        cardsxdnumber++;
    } a++;
}

cardsxd.sort(function (a, b) { return 0.5 - Math.random() });
let dp1 = 0; 

console.log(cardsxd);

let arvo = cardsxd[dp1][1];
let plcDk1 = cardsxd[dp1][0];
let sum = 0;

if (cardsxd[dp1][0] == "&hearts;" || cardsxd[dp1][0] == "&diams;") {
    document.getElementById("p1").innerHTML = cardsxd[dp1][1] + "<p id='plcD2'>" + plcDk1 + "</p> <p id='peili'>" + cardsxd[dp1][1] + "</p>";
}

else {
    document.getElementById("p1").innerHTML = cardsxd[dp1][1] + "<p id='plcD'>" + plcDk1 + "</p> <p id='peili'>" + cardsxd[dp1][1] + "</p>";
}
sum += cardsxd[dp1][1];
dp1++;


plcDk1 = cardsxd[dp1][0];

if (cardsxd[dp1][0] == "&hearts;" || cardsxd[dp1][0] == "&diams;") {
    document.getElementById("p2").innerHTML = cardsxd[dp1][1] + "<p id='plcD2'>" + plcDk1 + "</p> <p id='peili'>" + cardsxd[dp1][1] + "</p>";
}

else {
    document.getElementById("p2").innerHTML = cardsxd[dp1][1] + "<p id='plcD'>" + plcDk1 + "</p> <p id='peili'>" + cardsxd[dp1][1] + "</p>";
}
sum += cardsxd[dp1][1];
dp1++;

if (sum == 21) {
    document.getElementById("ilmoitus").innerHTML = sum + `" >>->> Voitit!`;
    document.getElementById("nappi").disabled = true;
    document.getElementById("nappi2").disabled = true;
}

if (sum > 21) {
    document.getElementById("ilmoitus").innerHTML = sum + `>>->> Hävisit. ;(`;
    document.getElementById("nappi").disabled = true;
    document.getElementById("nappi2").disabled = true;
}

if (sum < 21) {
    document.getElementById("ilmoitus").innerHTML = sum;
}
function nosta() {

    if (dp1 == 2) {

        plcDk1 = cardsxd[dp1][0];

        if (cardsxd[dp1][0] == "&hearts;" || cardsxd[dp1][0] == "&diams;") {
            document.getElementById("p3").innerHTML = cardsxd[dp1][1] + "<p id='plcD2'>" + plcDk1 + "</p> <p id='peili'>" + cardsxd[dp1][1] + "</p>";
        }

        else {
            document.getElementById("p3").innerHTML = cardsxd[dp1][1] + "<p id='plcD'>" + plcDk1 + "</p> <p id='peili'>" + cardsxd[dp1][1] + "</p>";
        }
        sum += cardsxd[dp1][1];

        if (sum == 21) {
            document.getElementById("ilmoitus").innerHTML = sum + `>>->> Voitit! ;)))`;
            document.getElementById("nappi").disabled = true;
            document.getElementById("nappi2").disabled = true;
        }

        if (sum > 21) {
            document.getElementById("ilmoitus").innerHTML = sum + `>>->> Hävisit. ;(`;
            document.getElementById("nappi").disabled = true;
            document.getElementById("nappi2").disabled = true;
        }

        if (sum < 21) {
            document.getElementById("ilmoitus").innerHTML = sum;
        }
    }

    if (dp1 == 3) {

        plcDk1 = cardsxd[dp1][0];

        if (cardsxd[dp1][0] == "&hearts;" || cardsxd[dp1][0] == "&diams;") {
            document.getElementById("p4").innerHTML = cardsxd[dp1][1] + "<p id='plcD2'>" + plcDk1 + "</p> <p id='peili'>" + cardsxd[dp1][1] + "</p>";
        }

        else {
            document.getElementById("p4").innerHTML = cardsxd[dp1][1] + "<p id='plcD'>" + plcDk1 + "</p> <p id='peili'>" + cardsxd[dp1][1] + "</p>";
        }
        sum += cardsxd[dp1][1];
        if (sum == 21) {
            document.getElementById("ilmoitus").innerHTML = sum + `>>->> Voitit. GG bro ;D`;
            document.getElementById("nappi").disabled = true;
            document.getElementById("nappi2").disabled = true;
        }

        if (sum > 21) {
            document.getElementById("ilmoitus").innerHTML = sum + `>>->> Hävisit. ;(`;
            document.getElementById("nappi").disabled = true;
            document.getElementById("nappi2").disabled = true;
        }

        if (sum < 21) {
            document.getElementById("ilmoitus").innerHTML = sum;
        }
    }


    if (dp1 == 4) {

        plcDk1 = cardsxd[dp1][0];

        if (cardsxd[dp1][0] == "&hearts;" || cardsxd[dp1][0] == "&diams;") {
            document.getElementById("p5").innerHTML = cardsxd[dp1][1] + "<p id='plcD2'>" + plcDk1 + "</p> <p id='peili'>" + cardsxd[dp1][1] + "</p>";
        }

        else {
            document.getElementById("p5").innerHTML = cardsxd[dp1][1] + "<p id='plcD'>" + plcDk1 + "</p> <p id='peili'>" + cardsxd[dp1][1] + "</p>";
        }
        sum += cardsxd[dp1][1];
        if (sum == 21) {
            document.getElementById("ilmoitus").innerHTML = sum + `>>->> Voitit. Onneks olkoo!`;
            document.getElementById("nappi").disabled = true;
            document.getElementById("nappi2").disabled = true;
        }
        if (sum > 21) {
            document.getElementById("ilmoitus").innerHTML = sum + `>>->> Hävisit. ;( better luck next time, i guess`;
            document.getElementById("nappi").disabled = true;
            document.getElementById("nappi2").disabled = true;
        }
        if (sum < 21) {
            document.getElementById("ilmoitus").innerHTML = sum + `>>->> Voitit! GGGGGGG`;
            document.getElementById("nappi").disabled = true;
            document.getElementById("nappi2").disabled = true;
        }
    }
    dp1++;
}

function jakaja() {

    document.getElementById("nappi").disabled = true;
    document.getElementById("nappi2").disabled = true;

    let jakajansum = 0;

    plcDk1 = cardsxd[dp1][0];

    if (cardsxd[dp1][0] == "&hearts;" || cardsxd[dp1][0] == "&diams;") {
        document.getElementById("j1").innerHTML = cardsxd[dp1][1] + "<p id='plcD2'>" + plcDk1 + "</p> <p id='peili'>" + cardsxd[dp1][1] + "</p>";
    }

    else {
        document.getElementById("j1").innerHTML = cardsxd[dp1][1] + "<p id='plcD'>" + plcDk1 + "</p> <p id='peili'>" + cardsxd[dp1][1] + "</p>";
    }

    jakajansum += cardsxd[dp1][1];

    if (jakajansum > sum) {
        document.getElementById("ilmoitus").innerHTML = sum + `>>->> Hävisit. awwww ;(((`;
    }

    if (jakajansum == 21) {
        document.getElementById("ilmoitus").innerHTML = sum + `>>->> Hävisit. ;(`;
    }

    if (jakajansum > 21) {
        document.getElementById("ilmoitus").innerHTML = sum + `>>->> Voitit. Vihdoin?`; 
    }

    console.log(jakajansum);
    document.getElementById("ilmoitus2").innerHTML = jakajansum;

    if (jakajansum < 21 && jakajansum < sum) {
        dp1++;
        plcDk1 = cardsxd[dp1][0];

        if (cardsxd[dp1][0] == "&hearts;" || cardsxd[dp1][0] == "&diams;") {
            document.getElementById("j2").innerHTML = cardsxd[dp1][1] + "<p id='plcD2'>" + plcDk1 + "</p> <p id='peili'>" + cardsxd[dp1][1] + "</p>";
        } else {
            document.getElementById("j2").innerHTML = cardsxd[dp1][1] + "<p id='plcD'>" + plcDk1 + "</p> <p id='peili'>" + cardsxd[dp1][1] + "</p>";
        } jakajansum += cardsxd[dp1][1];
    }
    if (jakajansum > sum) {
        document.getElementById("ilmoitus").innerHTML = sum + " ||" + " HÃ¤visit" // testi tÃ¤Ã¤l on virhe kait
    }
    if (jakajansum == 21) {
        document.getElementById("ilmoitus").innerHTML = sum + " ||" + " HÃ¤visit" // testi tÃ¤Ã¤l on virhe kait
    }
    if (jakajansum > 21) {
        document.getElementById("ilmoitus").innerHTML = sum + " ||" + " Voitit!"
    }

    console.log(jakajansum); 
    document.getElementById("ilmoitus2").innerHTML = jakajansum;

    if (jakajansum < 21 && jakajansum < sum) {
        dp1++;
        plcDk1 = cardsxd[dp1][0];
        if (cardsxd[dp1][0] == "&hearts;" || cardsxd[dp1][0] == "&diams;") {
            document.getElementById("j3").innerHTML = cardsxd[dp1][1] + "<p id='plcD2'>" + plcDk1 + "</p> <p id='peili'>" + cardsxd[dp1][1] + "</p>";
        } else {
            document.getElementById("j3").innerHTML = cardsxd[dp1][1] + "<p id='plcD'>" + plcDk1 + "</p> <p id='peili'>" + cardsxd[dp1][1] + "</p>";
        }
        jakajansum += cardsxd[dp1][1];
    }
    if (jakajansum > sum) {
        document.getElementById("ilmoitus").innerHTML = sum + " ||" + " HÃ¤visit"
    }
    if (jakajansum == 21) {
        document.getElementById("ilmoitus").innerHTML = sum + " ||" + " HÃ¤visit"
    }
    if (jakajansum > 21) {
        document.getElementById("ilmoitus").innerHTML = sum + " ||" + " Voitit!" // testi tÃ¤Ã¤l on virhe kait
    }
    console.log(jakajansum); // testi
    document.getElementById("ilmoitus2").innerHTML = jakajansum;
    if (jakajansum < 21 && jakajansum < sum) {
        dp1++;
        plcDk1 = cardsxd[dp1][0];
        if (cardsxd[dp1][0] == "&hearts;" || cardsxd[dp1][0] == "&diams;") {
            document.getElementById("j4").innerHTML = cardsxd[dp1][1] + "<p id='plcD2'>" + plcDk1 + "</p> <p id='peili'>" + cardsxd[dp1][1] + "</p>";
        }
        else {
            document.getElementById("j4").innerHTML = cardsxd[dp1][1] + "<p id='plcD'>" + plcDk1 + "</p> <p id='peili'>" + cardsxd[dp1][1] + "</p>";
        }
        jakajansum += cardsxd[dp1][1];
    }
    if (jakajansum > sum) {
        document.getElementById("ilmoitus").innerHTML = sum + " ||" + " HÃ¤visit" // testi tÃ¤Ã¤l on virhe kait
    }
    if (jakajansum == 21) {
        document.getElementById("ilmoitus").innerHTML = sum + " ||" + " HÃ¤visit" // testi tÃ¤Ã¤l on virhe kait
    }
    if (jakajansum > 21) {
        document.getElementById("ilmoitus").innerHTML = sum + " ||" + " Voitit!"
    }
    console.log(jakajansum); 
    document.getElementById("ilmoitus2").innerHTML = jakajansum;
    if (jakajansum < 21 && jakajansum < sum) {
        dp1++;
        plcDk1 = cardsxd[dp1][0];
        if (cardsxd[dp1][0] == "&hearts;" || cardsxd[dp1][0] == "&diams;") {
            document.getElementById("j5").innerHTML = cardsxd[dp1][1] + "<p id='plcD2'>" + plcDk1 + "</p> <p id='peili'>" + cardsxd[dp1][1] + "</p>";
        } else {
            document.getElementById("j5").innerHTML = cardsxd[dp1][1] + "<p id='plcD'>" + plcDk1 + "</p> <p id='peili'>" + cardsxd[dp1][1] + "</p>";
        }
        jakajansum += cardsxd[dp1][1];
    }
    if (jakajansum > sum) {
        document.getElementById("ilmoitus").innerHTML = sum + `>>->> Hävisit. ;(`;
    }
    if (jakajansum == 21) {
        document.getElementById("ilmoitus").innerHTML = sum + `>>->> Hävisit. ;(`;
    }
    if (jakajansum > 21) {
        document.getElementById("ilmoitus").innerHTML = sum + `>>->> Voitit!`; // testi tÃ¤Ã¤l on virhe kait
    }
    if (jakajansum < 21) {
        document.getElementById("ilmoitus").innerHTML = sum + `>>->> Hävisit. ;(`; // testi tÃ¤Ã¤l on virhe kait
    }
    document.getElementById("ilmoitus2").innerHTML = jakajansum;
}
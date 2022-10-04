function nappi() {

    let cark = [];
    let a = 13;
    let b = 1;

    while (b <= a) {
        cark.push(["Hertta", b]);
        b++;
    }

    b = 1;
    while (b <= a) {
        cark.push(["Ruutu", b]);
        b++;
    }

    b = 1;
    while (b <= a) {
        cark.push(["Risti", b]);
        b++;
    }

    b = 1;
    while (b <= a) {
        cark.push(["Pata", b]);
        b++;
    }
    var carkss = cark.join('   ');
    document.getElementById(`ktl1`).innerHTML = carkss;
    cark.sort(function (a, b) { return 0.5 - Math.random() });
    var carks = cark.join('   ');
    document.getElementById(`ktl2`).innerHTML = carks;
    let mk = `&hearts;`;
    if (cark[0][0] == `Hertta`) { mk = `&hearts;`; }
    else if (cark[0][0] == `Ruutu`) { mk = `&diams;`; }
    else if (cark[0][0] == `Risti`) { mk = `&clubs;`; }
    else { mk = `&spades;`; }

    document.getElementById(`kk`).innerHTML = `<div id='pyr'>` + cark[0][1] + `<p id='j'>` + mk + `</p> <p id='peps'>` + cark[0][1] + `</p></div>`;

    if (cark[0][0] == `Hertta`) {
        document.getElementById(`kk`).innerHTML = `<div id='pyr'>` + cark[0][1] + `<p id='jj'>` + mk + `</p> <p id='peps'>` + cark[0][1] + `</p></div>`;
    } else if (cark[0][0] == `Ruutu`) {
        document.getElementById(`kk`).innerHTML = `<div id='pyr'>` + cark[0][1] + `<p id='jj'>` + mk + `</p> <p id='peps'>` + cark[0][1] + `</p></div>`;
    }
}
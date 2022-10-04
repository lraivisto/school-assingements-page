function kaikki() {
    let x = document.getElementById("käsky").value;
    if(x===`robotto.wave();`) {
        document.getElementById("wave").innerHTML =
        `<img class="wave" src="robotto-vilkuttaa.png" width="39%"> <img class="wave" src="robotto-paikkalaan.png" width="39%">`;
        w3.slideshow(".wave", 670);
    } else if(x===`robotto.walk();`) {
        document.getElementById("walk").innerHTML =
        `<img class="walk" src="robotto-kävely1.png" width="39%"> <img class="walk" src="robotto-kävely2.png" width="39%">`;
        w3.slideshow(".walk", 670);
    }else if(x===`robotto.jump();`) {
        document.getElementById("jump").innerHTML =
        `<img class="jump" src="robotto-hyppää.png" width="39%"> <img class="jump" src="robotto-paikkalaan.png" width="39%">`;
        w3.slideshow(".jump", 670);
    } else {
        alert(`Syntax Error!`);
    }
}
function lopeta() {
    window.location.href=window.location.href;
    document.getElementById("lopetus").innerHTML =
    `<img class="jump" src="robotto-paikkalaan.png" width="39%">`;
}
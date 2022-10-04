window.addEventListener('DOMContentLoaded', function () {})

var muodot = ['clubs', 'diamonds', 'hearts', 'spades'];
var pakka = [];
var pelaajakasi = document.querySelector('#pelaaja-kasi');
var jakajakasi = document.querySelector('#jakaja-kasi');
var jakajakasipisteet = document.querySelector('#jakaja-pisteet');
var pelaajakasipisteet = document.querySelector('#pelaaja-pisteet');
var deal = document.querySelector('#aloita');
var nosta = document.querySelector('#nosta');
var pida = document.querySelector('#pida');
var alusta = document.querySelector('#aloita');
var nimet = document.querySelectorAll('.pelaaja-nimi2');
var pelaajapistemaaranakyvilla = document.querySelector('.pelaaja-pistemaara-nakyvilla')
var jakajapistemaaranakyvilla = document.querySelector('.jakaja-pistemaara-nakyvilla')
var jakajakasiList = [];
var pelaajakasiList = [];
var pelaajapisteet = 0;
var jakajapisteet = 0;
var pelaajapistemaara = 0;
var jakajapistemaara = 0;
var cardAmount = 52;

function buildpakka() {
  for (var i = 0; i < muodot.length; i++) {
    for (var j = 1; j < 14; j++) {
      var card = {};
      card.rank = j
      card.suit = muodot[i]
      card.img = `kuvat/${j}_of_${muodot[i]}.png`
      pakka.push(card)
    }
  }
}

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  } return array;
}

function jaaPakka() {
  let pelaajaCard1 = pakka.pop();
  let pelaajaCard2 = pakka.pop();
  pelaajakasiList.push(pelaajaCard1);
  pelaajakasiList.push(pelaajaCard2);
  let jakajaCard1 = pakka.pop();
  let jakajaCard2 = pakka.pop();
  jakajakasiList.push(jakajaCard1);
  jakajakasiList.push(jakajaCard2);
  for (i = 0; i < pelaajakasiList.length; i++) {
    let initialpelaajakasi = document.createElement('img');
    initialpelaajakasi.src = pelaajakasiList[i].img;
    pelaajakasi.appendChild(initialpelaajakasi);
  }
  for (i = 0; i < jakajakasiList.length; i++) {
    let initialjakajakasi = document.createElement('img');
    initialjakajakasi.src = jakajakasiList[i].img;
    jakajakasi.appendChild(initialjakajakasi);
  } cardAmount -= 4;
}

function nostapelaaja() {
  pelaajapisteet = 0;
  let pelaajaCard = pakka.pop();
  pelaajakasiList.push(pelaajaCard);
  let pelaajanostaCard = document.createElement('img');
  pelaajanostaCard.src = pelaajakasiList[pelaajakasiList.length - 1].img
  pelaajakasi.appendChild(pelaajanostaCard);
  cardAmount -= 1;
}

function nostajakaja() {
  jakajapisteet = 0;
  let jakajaCard = pakka.pop();
  jakajakasiList.push(jakajaCard);
  let jakajanostaCard = document.createElement('img');
  jakajanostaCard.src = jakajakasiList[jakajakasiList.length - 1].img
  jakajakasi.appendChild(jakajanostaCard);
  cardAmount -= 1;
}

function calculatepelaajapisteet() {
  pelaajakasiList.sort(function (a, b) {
    return b.rank - a.rank;
  })
  for (var i = 0; i < pelaajakasiList.length; i++) {
    if (pelaajakasiList[i].rank === 1) {
      if (pelaajapisteet < 11) {
        pelaajapisteet += 11;
      } else {
        pelaajapisteet += 1;
      }
    } else if (pelaajakasiList[i].rank > 1 && pelaajakasiList[i].rank < 11) {
      pelaajapisteet += pelaajakasiList[i].rank;
    } else {
      pelaajapisteet += 10;
    }
  } pelaajakasipisteet.innerHTML = pelaajapisteet.toString();
  let message = document.querySelector('.message');
  if (pelaajapisteet > 21) {
    message.textContent = "Hävisit. :( Menit yli! Jakaja/diileri voitti!"
    nosta.setAttribute('class', 'none');
    pida.setAttribute('class', 'none');
    alusta.setAttribute('class', '');
    jakajapistemaara++;
  }
}

function calculatejakajapisteet() {
  jakajakasiList.sort(function (a, b) {
    return b.rank - a.rank;
  })
  for (var i = 0; i < jakajakasiList.length; i++) {
    if (jakajakasiList[i].rank === 1) {
      if (jakajapisteet < 11) {
        jakajapisteet += 11;
      } else {
        jakajapisteet += 1;
      }
    } else if (jakajakasiList[i].rank > 1 && jakajakasiList[i].rank < 11) {
      jakajapisteet += jakajakasiList[i].rank;
    } else {
      jakajapisteet += 10;
    }
  } jakajakasipisteet.innerHTML = jakajapisteet.toString();
  let message = document.querySelector('.message');
  if (jakajapisteet > 21) {
    message.textContent = "Sä voitit! Jakaja/diileri meni yli! ";
    nosta.setAttribute('class', 'none');
    pida.setAttribute('class', 'none');
    alusta.setAttribute('class', '');
  }
}

function kleerkortt() {
  pelaajakasiList = [];
  pelaajakasi.innerHTML = "";
  jakajakasiList = [];
  jakajakasi.innerHTML = "";
}

buildpakka();
shuffleArray(pakka);

nosta.setAttribute('class', 'none');
pida.setAttribute('class', 'none');
alusta.setAttribute('class', 'none');
nimet[0].setAttribute('class', 'none pelaaja-nimi2');
nimet[1].setAttribute('class', 'none pelaaja-nimi2');

deal.addEventListener('click', () => {
  let message = document.querySelector('.message');
  message.textContent = "";
  nosta.setAttribute('class', '');
  pida.setAttribute('class', '');
  nimet[0].setAttribute('class', 'pelaaja-nimi2');
  nimet[1].setAttribute('class', 'pelaaja-nimi2');
  jaaPakka();
  calculatepelaajapisteet();
  calculatejakajapisteet();
  deal.setAttribute('class', 'none');
})

nosta.addEventListener('click', () => {
  nostapelaaja();
  calculatepelaajapisteet();
})

pida.addEventListener('click', () => {
  let message = document.querySelector('.message');
  while (jakajapisteet < 18 || jakajapisteet <= pelaajapisteet) {
    nostajakaja();
    calculatejakajapisteet();
  }

  if (jakajapisteet < pelaajapisteet && jakajapisteet < 22) {
    message.textContent = "Sä voitit!";
    pelaajapistemaara++
  } else if (jakajapisteet > pelaajapisteet && jakajapisteet < 22) {
    message.textContent = "Jakaja voitti, koita onneas uudessa pelissä.";
    jakajapistemaara++
  } else if (jakajapisteet === 21 && pelaajapisteet === 21) {
    message.textContent = "Tasapeli!";
  }
  nosta.setAttribute('class', 'none');
  pida.setAttribute('class', 'none');
  alusta.setAttribute('class', '');
})

alusta.addEventListener('click', () => {
  jakajapisteet = 0;
  pelaajapisteet = 0;
  nosta.setAttribute('class', '');
  pida.setAttribute('class', '');
  alusta.setAttribute('class', 'none');
  let message = document.querySelector('.message');
  message.innerHTML = "";
  kleerkortt();
  jaaPakka();
  calculatepelaajapisteet();
  calculatejakajapisteet();

})
function x() {
    suorita1();
    suorita2();
  }

function suorita1() {
  let arvo = "moro";
document.getElementById("p01").innerHTML=
`${arvo}`;
}
function suorita2() {
  document.getElementById("p02").innerHTML=
  `${typeof arvo}`;
}
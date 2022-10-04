var l = new Date();
var m = l.getTime();

function mPaa(obj) {
    obj.innerHTML = "Kiitos!"
}

function mUlos(obj) {
    obj.innerHTML = "Tuo hiiri tähän."
}

function displayDate() {
    document.getElementById("demo").innerHTML = Date();
}
function pien() {
    var x = document.getElementById("kent");
    x.value = x.value.toUpperCase();
}
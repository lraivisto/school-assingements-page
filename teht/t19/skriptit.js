var hello;

hello = function() {
    document.getElementById("p1").innerHTML += this;
}
window.addEventListener("load", hello);
document.getElementById("btn").addEventListener("click", hello);

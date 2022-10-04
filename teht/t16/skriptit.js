function xx() {
    let message, x;
    message = document.getElementById("p01");
    message.innerHTML = "";
    x = document.getElementById("x1").value;
    try {
      if(x == "") throw "tyhjää";
      if(isNaN(x)) throw "ei numero";
      x = Number(x);
      if(x < 0) throw "liian pieni numero";
      if(x > 100) throw "liian suuri numero";
    }
    catch(err) {
      message.innerHTML = "Syötetty tieto on " + err;
    }
  }
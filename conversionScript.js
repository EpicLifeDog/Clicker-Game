function convertCashtoClicks() {
  var cash = Num(localStorage.getItem("cashCount"));
  var clicks = Num(localStorage.getItem("clickCount"));
  var amount = document.getElementbyID("CA>CL");
  
  if (cash >= amount) {
    var x = document.getElementById("clicks");
    var y = document.getElementById("cash");
    
    clicks += (amount * 10);
    cash -= amount;

    x.innerHTML = clicks;
    y.innerHTML = cash;

    localStorage.setItem = ("cashCount", cash);
    localStorage.setItem = ("clickCount", clicks);
  }
}

function convertClickstoCash() {
  var amount = document.getElementbyID("CL>CA");
  var clicks = Num(localStorage.getItem("clickCount"));
  var cash = Num(localStorage.getItem("cashCount"));

  if (clicks >= amount) {
    var x = document.getElementById("clicks");
    var y = document.getElementById("cash");
    
    cash += floor(amount / 10);
    clicks -= amount;

    x.innerHTML = clicks;
    y.innerHTML = cash;

    localStorage.setItem = ("cashCount", cash);
    localStorage.setItem = ("clickCount", clicks);
  }
}

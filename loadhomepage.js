window.onload = function() {
    if (typeof(Storage) !== "undefined") {
        var clicks = localStorage.getItem("clickCount");
        if (clicks !== null) {
          document.getElementById("clicks").innerHTML = "Clicks: " + clicks;
        }
        var cash = localStorage.getItem("cash");
        if (cash !== null) {
          document.getElementById("cash").innerHTML = "$" + cash;
        }
    }
}

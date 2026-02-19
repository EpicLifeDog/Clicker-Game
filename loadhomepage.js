windows.onload = function() {
    if (typeof(Storage) !== "undefined") {
        var clicks = localStorage.getItem("clickCount");
        if (clicks !== "undefined") {
          document.getElementById("clicks").innerHTML = "Clicks: " + clicks;
        }
        var cash = localStorage.getItem("cash");
        if (cash !== "undefined") {
          document.getElementById("cash").innerHTML = "$" + cash;
        }
    }
}

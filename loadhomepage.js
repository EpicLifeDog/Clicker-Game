window.onload = function() {
    if (typeof(Storage) !== "undefined") {
        var clicks = localStorage.getItem("clickCount");
        if (clicks !== "undefined" || null) {
            document.getElementById("clicks").innerHTML = "Clicks: " + clicks;
        }
        else {
            document.getElementById("clicks").innerHTML = "Clicks: 0";
        }
        var cash = localStorage.getItem("cash");
        if (cash === "undefined" || null) {
            document.getElementById("cash").innerHTML = "$" + cash;
        }
        else {
            document.getElementById("cash").innerHTML = "$0";
        }
    }
}

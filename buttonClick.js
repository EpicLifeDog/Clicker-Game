function clickButton() {
  let x = document.getElementById("clicks");
  if (typeof(Storage) !== "undefined") {
    var clicks = localStorage.getItem("clickCount");
    if (clicks !== null) {
      clicks++;
    } else {
      clicks = 1;
    }
    x.innerHTML = "Clicks: " + clicks;
    localStorage.setItem("clickCount", clicks);
  } else {
    x.innerHTML = "Error";
  }

}

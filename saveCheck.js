window.onload = function() {
  let x = document.getElementById("save");

  if (typeof(Storage) !== "undefined") {
    x.innerHTML = "Gameplay will auto save.";
  } else {
    x.innerHTML = "There will be no save.";
  }
}

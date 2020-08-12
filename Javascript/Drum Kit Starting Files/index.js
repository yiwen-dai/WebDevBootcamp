var drums = document.querySelectorAll(".drum");

for (var i = 0; i < drums.length; i++) {
  drums[i].addEventListener("click", function () {
    outputSound(this.innerHTML);
    buttonFlash(this.innerHTML);
  });
}

document.addEventListener("keydown", function (event) {
  outputSound(event.key);
  buttonFlash(event.key);
});

function outputSound(key) {
  switch (key) {
    case "a":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "s":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "d":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "f":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "k":
      var bass = new Audio("sounds/kick-bass.mp3");
      bass.play();
      break;

    case "l":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    default:
      console.log(this.innerHTML);
      break;
  }
}

function buttonFlash(key) {
  var pressed = document.querySelector("." + key);
  pressed.classList.add("pressed");
  setTimeout(function () {
    document.querySelector("." + key).classList.remove("pressed");
  }, 100);
}

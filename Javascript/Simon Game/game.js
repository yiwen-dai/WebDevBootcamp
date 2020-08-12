var buttonColors = ["red", "yellow", "blue", "green"];

var pattern = [];
var userPattern = [];
var level = 0;
var started = false;

$(document).keydown(function () {
  if (!started) {
    $("#level-title").text("Level " + level);
    sequence();
    started = true;
  }
});

$(".btn").click(function () {
  var userChosenColour = $(this).attr("id");
  userPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userPattern.length - 1);
});

function sequence() {
  userPattern = [];
  level++;
  $("#level-title").text("Level " + level);

  var num = Math.floor(Math.random() * 4);
  var newColour = buttonColors[num];
  pattern.push(newColour);
  $("#" + newColour)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
  playSound(newColour);
}

function playSound(colour) {
  var sound = new Audio("sounds/" + colour + ".mp3");
  sound.play();
}

function animatePress(colour) {
  $("." + colour).addClass("pressed");
  setTimeout(function () {
    $("." + colour).removeClass("pressed");
  }, 100);
}

function checkAnswer(level) {
  if (pattern[level] === userPattern[level]) {
    if (pattern.length === userPattern.length) {
      setTimeout(function () {
        sequence();
      }, 1000);
    }
  } else {
    var wrongAudio = new Audio("sounds/wrong.mp3");
    wrongAudio.play();
    $("#level-title").text("Game Over, Press Any Key to Restart");
    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);
    startOver();
  }
}

function startOver() {
  pattern = [];
  userPattern = [];
  level = 0;
  started = false;
}

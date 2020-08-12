var leftImg = document.querySelector(".img1");
var rightImg = document.querySelector(".img2");

var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage1Src = "images/" + "dice" + randomNumber1 + ".png";
leftImg.setAttribute("src", randomDiceImage1Src);

var randomDiceImage2Src = "images/" + "dice" + randomNumber2 + ".png";
rightImg.setAttribute("src", randomDiceImage2Src);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 wins!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 wins! 🚩";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}

// ***************************************************************
// BETTING SECTION
var won = true;
var wager = document.querySelector(".wager-input");
var balance = document.querySelector(".balance");

if (randomNumber1 > randomNumber2) {
  if (document.querySelector(".radio1").checked) {
    won = true;
    balance += wager;
  } else {
    won = false;
    balance -= wager;
  }
} else if (randomNumber2 > randomNumber1) {
  if (document.querySelector(".radio2").checked) {
    won = true;
    balance += wager;
  } else {
    won = false;
    balance -= wager;
  }
}

document.querySelector(".balance").value = balance;

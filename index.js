function call() {
  let player1 = document.querySelector("#player1").value;
  let player2 = document.querySelector("#player2").value;
  let speed = 600 - document.querySelector("#speed").value;
  document.querySelector("h1").innerHTML = "Dice Game";
  let i = 0;
  const diceID = setInterval(function () {
    if (i === 10) {
      clearInterval(diceID);
    } else {
      i++;
      let s = randomDice(player1, player2);
      if (i === 10) {
        document.querySelector(".img1").style.transform = "rotate(0deg)";
        document.querySelector(".img2").style.transform = "rotate(0deg)";
        document.querySelector("h1").innerHTML = s;
      }
    }
  }, speed);
}

function randomDice(name1, name2) {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomImg1 = "images/dice" + randomNumber1 + ".png";
  let randomDeg1 = Math.floor(Math.random() * 91);
  document.querySelector(".img1").setAttribute("src", randomImg1);
  document.querySelector(".img1").style.transform =
    "rotate(" + randomDeg1 + "deg)";
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  var randomImg2 = "images/dice" + randomNumber2 + ".png";
  let randomDeg2 = Math.floor(Math.random() * 91);
  document.querySelector(".img2").setAttribute("src", randomImg2);
  document.querySelector(".img2").style.transform =
    "rotate(" + randomDeg2 + "deg)";
  if (randomNumber1 > randomNumber2) {
    return "🚩 " + name1 + " Wins!";
  } else if (randomNumber1 < randomNumber2) {
    return name2 + " Wins!🚩";
  } else {
    return "Draw!";
  }
}

document.querySelector(".btn").addEventListener("click", call);


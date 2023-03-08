let number = Math.floor(Math.random() * 50 + 1);
let guessCount = 0;

document.getElementById("guessBtn").onclick = function () {
  let guessNumber = document.getElementById("userInput").value;
  guessCount++;
  let winText = "YOU WON!";
  let loseText = "YOU LOSE!";

  if (guessNumber == number && guessCount < 5) {
    document.getElementById("messageField").innerText += winText;
    document.getElementById("messageField").style.border =
      "2px solid limegreen";
    document.getElementById("counterLabel").innerHTML = guessCount;
  } else if (guessNumber < number && guessCount < 5) {
    document.getElementById("hintLabel").innerHTML = "Too Small";
    document.getElementById("counterLabel").innerHTML = guessCount;
  } else if (guessNumber > number && guessCount < 5) {
    document.getElementById("hintLabel").innerHTML = "Too Big";
    document.getElementById("counterLabel").innerHTML = guessCount;
  } else {
    document.getElementById("messageField").innerText += loseText;
    document.getElementById("messageField").style.border = "2px solid red";
    document.getElementById("counterLabel").innerHTML = guessCount;
  }

  console.log(number);
};

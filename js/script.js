var gameStarted = false;
var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];

$(document).on("keydown", function(event) {
  if (gameStarted) {
    console.log("Game already in progress...");
  } else if (!gameStarted) {
    console.log("start game");
    gameStarted = true;
    startGame();  
  } else {
    console.log("Error starting!");
  }
});

function startGame() {
  var title = $("h1");
  title.text("Follow the pattern...");
  
}

function nextSequence() {
  var randomNumber = Math.floor(Math.random()*4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  console.log(gamePattern);
}
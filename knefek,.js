// Define variables
var score = 0;
var addScoreButton = document.getElementById("addScoreButton");
var scoreDisplay = document.getElementById("score");

// Add click event listener to button
addScoreButton.addEventListener("click", function() {
  // Increment score
  score += 1;
  // Update score display
  scoreDisplay.innerHTML = score;
});

// Define variables
var score = 0;
var addScoreButton = document.getElementById("addScoreButton");
var scoreDisplay = document.getElementById("score");
var rebirthButton = document.getElementById("rebirthButton");

// Add click event listener to "Add Score" button
addScoreButton.addEventListener("click", function() {
  // Increment score
  score += 1;
  // Update score display
  scoreDisplay.innerHTML = score;
});

// Add click event listener to "Rebirth" button
rebirthButton.addEventListener("click", function() {
  // Reset score to 0
  score = 0;
  // Update score display
  scoreDisplay.innerHTML = score;
});

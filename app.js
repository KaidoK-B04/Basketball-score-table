let homeScore = parseInt(document.getElementById("home_score").textContent);
let guestScore = parseInt(document.getElementById("guest_score").textContent);

function increment_home_one() {
  homeScore += 1;
  updateScore("home_score", homeScore);
}
function increment_home_two() {
  homeScore += 2;
  updateScore("home_score", homeScore);
}
function increment_home_three() {
  homeScore += 3;
  updateScore("home_score", homeScore);
}

function increment_guest_one() {
  guestScore += 1;
  updateScore("guest_score", guestScore);
}
function increment_guest_two() {
  guestScore += 2;
  updateScore("guest_score", guestScore);
}
function increment_guest_three() {
  guestScore += 3;
  updateScore("guest_score", guestScore);
}

//COLORS

function updateScore(elementId, score) {
  document.getElementById(elementId).textContent = score;

  if (homeScore > guestScore) {
    document.getElementById("home_score").classList.add("green");
    document.getElementById("home_score").classList.remove("red");
    document.getElementById("guest_score").classList.remove("green");
    document.getElementById("guest_score").classList.add("red");
  } else if (homeScore < guestScore) {
    document.getElementById("home_score").classList.remove("green");
    document.getElementById("home_score").classList.add("red");
    document.getElementById("guest_score").classList.add("green");
    document.getElementById("guest_score").classList.remove("red");
  } else {
    document.getElementById("home_score").classList.add("green");
    document.getElementById("home_score").classList.remove("red");
    document.getElementById("guest_score").classList.add("green");
    document.getElementById("guest_score").classList.remove("red");
  }
}

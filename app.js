// let homeScore = parseInt(document.getElementById("home_score").textContent);
// let guestScore = parseInt(document.getElementById("guest_score").textContent);

// function increment_home_one() {
//   homeScore += 1;
//   updateScore("home_score", homeScore);
// }
// function increment_home_two() {
//   homeScore += 2;
//   updateScore("home_score", homeScore);
// }
// function increment_home_three() {
//   homeScore += 3;
//   updateScore("home_score", homeScore);
// }

// function increment_guest_one() {
//   guestScore += 1;
//   updateScore("guest_score", guestScore);
// }
// function increment_guest_two() {
//   guestScore += 2;
//   updateScore("guest_score", guestScore);
// }
// function increment_guest_three() {
//   guestScore += 3;
//   updateScore("guest_score", guestScore);
// }

// //COLORS

// function updateScore(elementId, score) {
//   document.getElementById(elementId).textContent = score;

//   if (homeScore > guestScore) {
//     document.getElementById("home_score").classList.add("green");
//     document.getElementById("home_score").classList.remove("red");
//     document.getElementById("guest_score").classList.remove("green");
//     document.getElementById("guest_score").classList.add("red");
//   } else if (homeScore < guestScore) {
//     document.getElementById("home_score").classList.remove("green");
//     document.getElementById("home_score").classList.add("red");
//     document.getElementById("guest_score").classList.add("green");
//     document.getElementById("guest_score").classList.remove("red");
//   } else {
//     document.getElementById("home_score").classList.add("green");
//     document.getElementById("home_score").classList.remove("red");
//     document.getElementById("guest_score").classList.add("green");
//     document.getElementById("guest_score").classList.remove("red");
//   }
// }

let scores = {
  home: 0,
  guest: 0,
};

function updateScore(team, points) {
  scores[team] += points;
  document.getElementById(`${team}_score`).textContent = scores[team];
  updateColors();
}

function updateColors() {
  const homeScoreEl = document.getElementById("home_score");
  const guestScoreEl = document.getElementById("guest_score");

  if (scores.home > scores.guest) {
    homeScoreEl.classList.add("green");
    homeScoreEl.classList.remove("red");
    guestScoreEl.classList.add("red");
    guestScoreEl.classList.remove("green");
  } else if (scores.home < scores.guest) {
    homeScoreEl.classList.add("red");
    homeScoreEl.classList.remove("green");
    guestScoreEl.classList.add("green");
    guestScoreEl.classList.remove("red");
  } else {
    homeScoreEl.classList.add("green");
    guestScoreEl.classList.add("green");
    homeScoreEl.classList.remove("red");
    guestScoreEl.classList.remove("red");
  }
}

function resetScores() {
  scores.home = 0;
  scores.guest = 0;
  document.getElementById("home_score").textContent = scores.home;
  document.getElementById("guest_score").textContent = scores.guest;
  updateColors();
}

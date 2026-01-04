let score = 0;

document.getElementById("countBtn").onclick = function () {
  score++;
  document.getElementById("count").textContent = score;

  if (score === 10) {
    document.getElementById("message").textContent =
      "Nice! You reached 10 clicks 🔥";
  }

  if (score === 20) {
    document.getElementById("message").textContent =
      "20 clicks! You're cracked 😎";
  }
};
document.getElementById("home").addEventListener("click", function () {
  document.getElementById("content").innerHTML = `
      <div class="welcome">
        <img src="cute-kids.png" alt="Cute Kids">
        <p>Welcome to our adorable website! Click on the links above to explore.</p>
      </div>`;
});

document.getElementById("games").addEventListener("click", function () {
  document.getElementById("content").innerHTML =
    "<h2>Games</h2><p>Coming soon...</p>";
});

document.getElementById("stories").addEventListener("click", function () {
  document.getElementById("content").innerHTML =
    "<h2>Stories</h2><p>Coming soon...</p>";
});

document.getElementById("about").addEventListener("click", function () {
  document.getElementById("content").innerHTML =
    "<h2>About Us</h2><p>We are a team dedicated to creating fun and educational content for kids!</p>";
});

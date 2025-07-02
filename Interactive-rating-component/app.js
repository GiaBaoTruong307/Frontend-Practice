const ratingButtons = document.querySelectorAll(".rating-btn");
const submitBtn = document.getElementById("submit");
const ratingSection = document.querySelector(".rating-state");
const thankYouSection = document.querySelector(".thank-you");
const selectedRatingText = document.getElementById("selected-rating");

let selectedRating = null;

ratingButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove previous selection
    ratingButtons.forEach((btn) => btn.classList.remove("selected"));
    // Add selection
    button.classList.add("selected");
    selectedRating = button.getAttribute("data-rating");
  });
});

submitBtn.addEventListener("click", () => {
  if (selectedRating) {
    ratingSection.classList.add("hidden");
    thankYouSection.classList.remove("hidden");
    selectedRatingText.textContent = selectedRating;
  } else {
    alert("Please select a rating before submitting.");
  }
});

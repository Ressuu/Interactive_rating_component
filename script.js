const mainContainer = document.querySelector(".rating_box");
const thankYouContainer = document.querySelector(".thank_you");
const submitButton = document.querySelector("#submit");
const rating = document.querySelector(".rating");
const rates = document.querySelectorAll(".btn");
const rateAgain = document.querySelector(".rate_again");

submitButton.addEventListener("click", () => {
  thankYouContainer.classList.remove("hidden");
  mainContainer.style.display = "none";
});

rateAgain.addEventListener("click", () => {
  thankYouContainer.classList.add("hidden");
  mainContainer.style.display = "block";
});

rates.forEach((rate) => {
  rate.addEventListener("click", () => {
    rating.innerHTML = rate.innerHTML;
  });
});

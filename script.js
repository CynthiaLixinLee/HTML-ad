/* Define global variables */
var images = [
  "assets/JPGv4/300x250_1.jpg",
  "assets/JPGv4/300x250_2.jpg",
  "assets/JPGv4/300x250_3.jpg",
  "assets/JPGv4/300x250_ps4.jpg"
];
var index = 0; // image index
var countdown = 3; // countdown before expanding banner
var timerInterval; // interval for timer countdown
var img = document.getElementById("img");
var overlay = document.querySelector(".overlay");
var expandedBanner = document.querySelector(".expandable");
var numbers = document.querySelector(".numbers");

/* Update banner with different images */
function updateBanner() {
  if (images.length > index) {
    img.src = images[index];
    index++;
  } else {
      clearInterval(updateBanner);
  }
}

setInterval(updateBanner, 1500);

/* On mouse hover, countdown to expand banner */
overlay.addEventListener("mouseover", function() {
  timerInterval = setInterval(timer, 1000);
});

overlay.addEventListener("mouseleave", function() {
  numbers.textContent = "";
  numbers.classList.remove("animate");
  clearInterval(timerInterval);
  countdown = 3;
});

function timer() {
  if (countdown > 0) {
    numbers.classList.add("animate");
    numbers.textContent = countdown;
    countdown--;
  } else {
    expandedBanner.style.display = "flex";
  }
}

/* Expanded banner */
function closeModal() {
  expandedBanner.style.display = "none";
}

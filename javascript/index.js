let links = document.querySelectorAll("li a");
links.forEach(function (link) {
  // Check if there's a saved active link on page load
  const savedActiveLink = sessionStorage.getItem("active");
  if (savedActiveLink && link.getAttribute("href") === savedActiveLink) {
    link.classList.add("active");
  }

  link.addEventListener("click", () => {
    // Remove "active" class from all links
    links.forEach((link) => link.classList.remove("active"));

    // Add "active" class to the clicked link
    link.classList.add("active");

    // Save the href of the clicked link to local storage
    sessionStorage.setItem("active", link.getAttribute("href"));
  });
});
let bar = document.querySelector(".bar i");
let list = document.querySelector("ul.list");

// Add media query check inside event listener
bar.addEventListener("click", () => {
  if (window.innerWidth <= 992) {
    if (list.style.display === "flex") {
      list.style.display = "none";
    } else {
      list.style.display = "flex";
    }
  }
});

// Optional: Add resize listener to handle dynamic screen changes
window.addEventListener("resize", () => {
  if (window.innerWidth > 992) {
    list.style.display = ""; // Reset display for larger screens
  }
});
const backgrounds = [
  "./project-image/landing.jpg",
  "./project-image/design-features.jpg",
  "./project-image/subscribe.jpg",
];
const bullets = document.querySelectorAll(".bullets span");

// Retrieve current index from local storage or start at 0
let currentIndex =
  parseInt(localStorage.getItem("selectedBackgroundIndex")) || 0;
const imageContainer = document.querySelector(".header");

// Set initial background and bullets
imageContainer.style.backgroundImage = `url(${backgrounds[currentIndex]})`;
updateBullets();

document.querySelector(".arrow-first").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % backgrounds.length;
  imageContainer.style.backgroundImage = `url(${backgrounds[currentIndex]})`;
  localStorage.setItem("selectedBackgroundIndex", currentIndex);
  updateBullets();
});

document.querySelector(".arrow-second").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + backgrounds.length) % backgrounds.length;
  imageContainer.style.backgroundImage = `url(${backgrounds[currentIndex]})`;
  localStorage.setItem("selectedBackgroundIndex", currentIndex);
  updateBullets();
});

// Touch events for mobile
let touchStartX = 0;
imageContainer.addEventListener("touchstart", (e) => {
  touchStartX = e.touches[0].clientX;
});

imageContainer.addEventListener("touchend", (e) => {
  let touchEndX = e.changedTouches[0].clientX;
  if (touchStartX - touchEndX > 50) {
    nextImage(); // Swipe left
  } else if (touchEndX - touchStartX > 50) {
    prevImage(); // Swipe right
  }
});

function nextImage() {
  currentIndex = (currentIndex + 1) % backgrounds.length;
  updateBackground();
  updateBullets();
}

function prevImage() {
  currentIndex = (currentIndex - 1 + backgrounds.length) % backgrounds.length;
  updateBackground();
  updateBullets();
}

function updateBackground() {
  imageContainer.style.backgroundImage = `url(${backgrounds[currentIndex]})`;
  localStorage.setItem("selectedBackgroundIndex", currentIndex);
}

function updateBullets() {
  bullets.forEach((bullet, index) => {
    if (index === currentIndex) {
      bullet.classList.add("active");
    } else {
      bullet.classList.remove("active");
    }
  });
}
// looping to add class active on Elements
let elements = document.querySelectorAll(".portfolio .text p");
elements.forEach((element) => {
  element.addEventListener("click", () => {
    // Remove 'active' class from all elements
    elements.forEach((e) => e.classList.remove("active"));
    // Add 'active' class only to the clicked element
    element.classList.add("active");
  });
});

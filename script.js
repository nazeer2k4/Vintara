// Mobile menu toggle functionality
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("vNavbarHamburger");
  const mobileMenu = document.getElementById("vNavbarMobileMenu");
  const body = document.body;

  if (hamburger && mobileMenu) {
    hamburger.addEventListener("click", function () {
      const isActive = hamburger.classList.contains("active");

      if (isActive) {
        // Close menu
        hamburger.classList.remove("active");
        mobileMenu.classList.remove("active");
        body.style.overflow = "";
      } else {
        // Open menu
        hamburger.classList.add("active");
        mobileMenu.classList.add("active");
        body.style.overflow = "hidden"; // Prevent background scrolling
      }
    });

    // Close menu when clicking on mobile menu links
    const mobileMenuLinks = mobileMenu.querySelectorAll("a");
    mobileMenuLinks.forEach((link) => {
      link.addEventListener("click", function () {
        hamburger.classList.remove("active");
        mobileMenu.classList.remove("active");
        body.style.overflow = "";
      });
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (event) {
      if (
        !hamburger.contains(event.target) &&
        !mobileMenu.contains(event.target)
      ) {
        hamburger.classList.remove("active");
        mobileMenu.classList.remove("active");
        body.style.overflow = "";
      }
    });

    // Close menu on window resize if screen becomes larger
    window.addEventListener("resize", function () {
      if (window.innerWidth > 1024) {
        hamburger.classList.remove("active");
        mobileMenu.classList.remove("active");
        body.style.overflow = "";
      }
    });
  }
});

const img = document.querySelector(".parallax-image");
const maxMove = 80;

document.addEventListener("mousemove", (e) => {
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  const offsetX = ((e.clientX - centerX) / centerX) * maxMove;
  const offsetY = ((e.clientY - centerY) / centerY) * maxMove;

  img.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(1.07)`;
});

document.addEventListener("mouseleave", () => {
  img.style.transform = `translate(0px, 0px) scale(1)`;
});

// Cursor Logic
const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
  "#0c4833",
  "#0c4833",
  "#0c4833",
  "#0c4833",
  "#0c4833",
  "#0c4833",
  "#0c4833",
  "#0c4833",
  "#0c4833",
  "#0c4833",
  "#0c4833",
  "#0c4833",
  "#0c4833",
  "#0c4833",
  "#0c4833",
  "#0c4833",
  "#0c4833",
  "#0c4833",
  "#0c4833",
  "#0c4833",
  "#0c4833",
  "#0c4833",
  "#0c4833",
  "#0c4833",
  "#0c4833",
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function (e) {
  coords.x = e.clientX;
  coords.y = e.clientY;
});

function animateCircles() {
  let x = coords.x;
  let y = coords.y;

  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";

    circle.style.scale = (circles.length - index) / circles.length;

    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });

  requestAnimationFrame(animateCircles);
}

animateCircles();

document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".v-faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".v-faq-question");

    question.addEventListener("click", () => {
      const isActive = item.classList.contains("active");

      // Close all items
      faqItems.forEach((otherItem) => {
        otherItem.classList.remove("active");
      });

      // Open the clicked item only if it was not already active
      if (!isActive) {
        item.classList.add("active");
      }
    });
  });
});

// Update the year dynamically
document.addEventListener("DOMContentLoaded", function () {
  const year = new Date().getFullYear();
  const yearElements = document.querySelectorAll(".copyright");

  yearElements.forEach((element) => {
    element.innerHTML = element.innerHTML.replace("2024", year);
  });
});

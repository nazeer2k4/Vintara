// Scroll-based navbar + logo swap
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("StickyNavbar");
  // const logo = document.getElementById("navbarLogo");
  const links = document.querySelectorAll(".v-navbar-link");
  const scrolled = window.scrollY > 80;

  if (scrolled) {
    navbar.classList.add("v-sticky-navbar-scrolled");
    navbar.classList.remove("v-sticky-navbar-transparent");
    // logo.src = "images/vintaraLogoGreen.svg";
    links.forEach((link) => (link.style.color = "#0c4833"));
  } else {
    navbar.classList.remove("v-sticky-navbar-scrolled");
    navbar.classList.add("v-sticky-navbar-transparent");
  }
});

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

// JavaScript to auto-scroll the membership section card-by-card
const track = document.querySelector(".membership-track");
const cards = document.querySelectorAll(".membership-card");
let index = 0;

setInterval(() => {
  index = (index + 1) % cards.length;
  const scrollTo =
    cards[index].offsetLeft -
    (track.offsetWidth - cards[index].offsetWidth) / 2;
  track.scrollTo({ left: scrollTo, behavior: "smooth" });
}, 4000); // Every 4 seconds

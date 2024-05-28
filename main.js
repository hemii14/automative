const menuBtn = document.querySelector(".menu-button");
const navList = document.querySelector(".nav-list");

const menuClose = document.querySelector(".menu-close");

menuBtn.addEventListener("click", () => {
  navList.classList.remove("hidden");
});

menuClose.addEventListener("click", () => {
  navList.classList.add("hidden");
});

const titleHidden = document.querySelector(".header-text");

// Create a media condition that targets viewports at least 768px wide
const mediaQuery = window.matchMedia("(max-width: 850px)");
const mobileView = document.querySelector(".mobile-view");

function hiddenFunc(mediaQuery) {
  if (mediaQuery.matches) {
    titleHidden.classList.add("hidden");
    mobileView.classList.remove("hidden");
    document.querySelector(".header").style.filter = blur("8px");
  } else {
    titleHidden.classList.remove("hidden");
    mobileView.classList.add("hidden");
  }
}

hiddenFunc(mediaQuery);

// Attach listener function on state changes
mediaQuery.addEventListener("change", function () {
  hiddenFunc(mediaQuery);
});

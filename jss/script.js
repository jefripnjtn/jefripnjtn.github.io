// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");

// Ketika menu di klik
document.querySelector("#menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik di luar sidebar untuk menghilangkan nav

const pilihan = document.querySelector("#menu");

document.addEventListener("click", function (e) {
  if (!pilihan.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

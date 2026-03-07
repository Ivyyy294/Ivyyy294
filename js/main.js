// Load navbar
fetch("navbar_files/navbar.html")
      .then(res => res.text())
      .then(data => {
        document.getElementById("navbar").innerHTML = data;

        initNavbar();
      });


// Navbar functionality
function initNavbar() {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav-links");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("active");
    });
  }
}
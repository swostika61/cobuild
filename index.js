// navbar js effect
window.onscroll = function () { scrollFunction() };
var navbar = document.getElementById("navbar");
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

function toggleIcon() {
  let x = document.getElementById("myNav");
  if (x.className === "nav-links") {
    x.className += " responsive";
  } else {
    x.className = "nav-links";
  }
}
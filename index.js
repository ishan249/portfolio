mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function goTohashNode() {
  window.open("https://ishanpatel.hashnode.dev/", "_blank");
}
function goTohashNodeHotelBlog() {
  window.open(
    "https://ishanpatel.hashnode.dev/hotel-booking-system-with-express-js",
    "_blank"
  );
}
function goTohashHotelSite() {
  window.open("https://hotel-booking-pi.vercel.app/", "_blank");
}
function goTohashBillSite() {
  window.open("https://ishan249.github.io/Billnotes/", "_blank");
}
function goTohashBillBlog() {
  window.open("https://ishanpatel.hashnode.dev/learn-javascript-dom", "_blank");
}
function goToResume() {
  window.open(
    "https://drive.google.com/file/d/1MTdSt9EPfrXqpvMAAKVVfix7uc9w4L7j/view?usp=sharing",
    "_blank"
  );
}
function goToRedditSite() {
  window.open("https://best-of-reddit.vercel.app/", "_blank");
}
function goToRedditHashBlog() {
  window.open(
    "https://ishanpatel.hashnode.dev/web-scraping-using-cheerio-in-nodejs",
    "_blank"
  );
}

function classToggle() {
  const navs = document.querySelectorAll(".Navbar__Items");

  navs.forEach((nav) => nav.classList.toggle("Navbar__ToggleShow"));
}

document
  .querySelector(".Navbar__Link-toggle")
  .addEventListener("click", classToggle);

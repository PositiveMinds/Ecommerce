"use strict";

var _tns;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// ============================TIMER==================================
// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime(); // Update the count down every 1 second

var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime(); // Find the distance between now and the count down date

  var countdownDifference = countDownDate - now; // Time calculations for days, hours, minutes and seconds
  // var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  // var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  // var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  // var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  // Output the result in an element with id="demo"

  document.getElementById("countdown-timer").innerHTML = "\n    <ul>\n       <li><span id=\"days\">".concat(days = Math.floor(countdownDifference / (1000 * 60 * 60 * 24)), " </span><span class=\"counter\">days</span></li>\n\n        <li><span id=\"hours\">").concat(hours = Math.floor(countdownDifference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)), " </span><span class=\"counter\">Hours</span></li>\n\n        <li><span id=\"minutes\">").concat(minutes = Math.floor(countdownDifference % (1000 * 60 * 60) / (1000 * 60)), " </span><span class=\"counter\">Minutes</span></li>\n\n         <li><span id=\"seconds\">").concat(seconds = Math.floor(countdownDifference % (1000 * 60) / 1000), " </span><span class=\"counter\">Seconds</span></li>\n   </ul>\n  \n  "); // document.getElementById("demo").innerHTML =
  //   days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  // If the count down is over, write some text

  if (countdownDifference < 0) {
    clearInterval(x);
    document.getElementById("countdown-timer").innerHTML = "OFFER EXPIRED";
  }
}, 1000);
var slider = tns((_tns = {
  container: ".product-items",
  items: 6,
  slideBy: "page",
  autoplay: true
}, _defineProperty(_tns, "slideBy", 1), _defineProperty(_tns, "nav", false), _defineProperty(_tns, "loop", true), _defineProperty(_tns, "touch", true), _defineProperty(_tns, "mouseDrag", true), _defineProperty(_tns, "autoplayHoverPause", true), _defineProperty(_tns, "autoplayButtonOutput", false), _defineProperty(_tns, "controlsContainer", "#custom-control"), _defineProperty(_tns, "mode", "carousel"), _defineProperty(_tns, "speed", 300), _defineProperty(_tns, "responsive", {
  0: {
    items: 1
  },
  640: {
    // edgePadding: 20,
    // gutter: 20,
    items: 2
  },
  700: {// gutter: 30,
  },
  900: {
    items: 6
  },
  1440: {
    items: 6
  }
}), _tns)); // Slider==========================================

var hero = tns({
  container: ".slider-content",
  items: 1,
  // slideBy: "page",
  autoplay: true,
  slideBy: 1,
  nav: true,
  controlsPosition: "bottom",
  navPosition: "bottom",
  loop: true,
  touch: true,
  mouseDrag: true,
  autoplayHoverPause: true,
  autoplayButtonOutput: false,
  animateIn: "tns-fadeIn",
  controlsContainer: "#slider-buttons",
  // mode: "gallery",
  mode: "carousel",
  speed: 300
}); // Close modal popup===============

var modalOverlay = document.querySelector("#modalOverlay");
var closePopupModal = document.querySelector(".close-popup-modal");
closePopupModal.addEventListener("click", function (e) {
  closeModalPopup();
});

function closeModalPopup() {
  modalOverlay.style.display = "none";
} // ==================================================================
// document.addEventListener(
//   "click",
//   (event) => {
//     // If user either clicks X button OR clicks outside the modal window, then close modal by calling closeModal()
//     if (
//       event.target.matches(".close-popup-modal") ||
//       !event.target.closest("div").contains("#modalOverlay")
//     ) {
//       closeModal();
//     }
//   },
//   false
// );
// function closeModal() {
//   document.querySelector("#modalOverlay").style.display = "none";
// }
// ====================================================================
// setTimeout(function () {
//   modalOverlay.style.display = "none";
// }, 2000);
// const openAccountsmenu = document.querySelector(".openAccountMenu");
// const openAccountsMenuCheckbx = document.querySelector("#openAccountMenu");
// const accountMenu = document.querySelector(".account-menu");
// openAccountsmenu.addEventListener("click", (e) => {
//   openAccountsMenuCheckbx.checked = true;
// });
// ==================tabs=======================================
// CLOSE SIDE MENU=============================


window.addEventListener("click", function (e) {
  if (e.target.closest("div").classList.contains("mobile-sideMenu-overlay")) {
    // alert("hello");
    toggleSidemenu.checked = false;
  } else {// openResultModal.checked = true;
  }
});
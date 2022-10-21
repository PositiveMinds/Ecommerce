// ============================TIMER==================================

// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var countdownDifference = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  // var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  // var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  // var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  // var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("countdown-timer").innerHTML = `
    <ul>
       <li><span id="days">${(days = Math.floor(
         countdownDifference / (1000 * 60 * 60 * 24)
       ))} </span><span class="counter">days</span></li>

        <li><span id="hours">${(hours = Math.floor(
          (countdownDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ))} </span><span class="counter">Hours</span></li>

        <li><span id="minutes">${(minutes = Math.floor(
          (countdownDifference % (1000 * 60 * 60)) / (1000 * 60)
        ))} </span><span class="counter">Minutes</span></li>

         <li><span id="seconds">${(seconds = Math.floor(
           (countdownDifference % (1000 * 60)) / 1000
         ))} </span><span class="counter">Seconds</span></li>
   </ul>
  
  `;

  // document.getElementById("demo").innerHTML =
  //   days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  // If the count down is over, write some text
  if (countdownDifference < 0) {
    clearInterval(x);
    document.getElementById("countdown-timer").innerHTML = "OFFER EXPIRED";
  }
}, 1000);

var slider = tns({
  container: ".product-items",
  items: 6,
  slideBy: "page",
  autoplay: true,
  slideBy: 1,
  nav: false,
  loop: true,
  touch: true,
  mouseDrag: true,
  autoplayHoverPause: true,
  autoplayButtonOutput: false,
  controlsContainer: "#custom-control",
  // mode: "gallery",
  mode: "carousel",
  speed: 300,
  responsive: {
    0: {
      items: 1,
    },
    640: {
      // edgePadding: 20,
      // gutter: 20,
      items: 2,
    },
    700: {
      // gutter: 30,
    },
    900: {
      items: 6,
    },
    1440: {
      items: 6,
    },
  },
});

// Slider==========================================
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
  speed: 300,
});

// Close modal popup===============

const modalOverlay = document.querySelector("#modalOverlay");

const closePopupModal = document.querySelector(".close-popup-modal");

closePopupModal.addEventListener("click", (e) => {
  closeModalPopup();
});

function closeModalPopup() {
  modalOverlay.style.display = "none";
}

// ==================================================================

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

window.addEventListener("click", (e) => {
  if (e.target.closest("div").classList.contains("mobile-sideMenu-overlay")) {
    // alert("hello");
    toggleSidemenu.checked = false;
  } else {
    // openResultModal.checked = true;
  }
});

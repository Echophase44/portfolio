const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav_link");
const logo = document.querySelector(".logo_img");
const logoDiv = document.querySelector(".logo");
const subtitle = document.querySelector(".section_subtitle-intro");
const subtitleEgg = document.querySelector(".subtitle_egg");

console.log(
  `%c
  __          __  _                          _ 
  \\ \\        / / | |                        | |
   \\ \\  /\\  / /__| | ___ ___  _ __ ___   ___| |
    \\ \\/  \\/ / _ \\ |/ __/ _ \\| '_ ' _ \\ / _ \\ |
     \\  /\\  /  __/ | (_| (_) | | | | | |  __/_|
      \\/  \\/ \\___|_|\\___\\___/|_| |_| |_|\\___(_)
                                               
                                               
 `,
  "font-family:monospace"
);

// Nav
navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
  });
});

function factSelection() {
  console.log("You were a cop? getCopStats()");
}

// Egg
logoDiv.addEventListener("click", () => {
  logo.src = "img/logos/consolelogo.png";
  console.log("You found the Logo Easter Egg!");
  console.log(
    `Your reward: 
      Some facts from my 17lands.com Magic: The Gathering - 
      Premier Draft - stats:

      APPARENTLY - Azorius is my best, with a 58% win rate.
      Followed by Gruul with a 55% win rate.
      
      `
  );
});

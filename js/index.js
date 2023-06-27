const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav_link");
const logo = document.querySelector(".logo_img");
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

// Egg
logo.addEventListener("click", () => {
  logo.src = "img/logos/consolelogo.png";
  console.log("You found the Logo Egg!");
});

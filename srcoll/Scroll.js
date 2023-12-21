document.addEventListener("scroll", function () {
  for (let p of document.querySelectorAll(".aniTitle")) {
    if (p.getBoundingClientRect().top - window.innerHeight <= 0) {
      p.classList.add("Scrovisible");
    } else {
      p.classList.remove("Scrovisible");
    }
  }
});

//스크롤 배경1
document.addEventListener("scroll", () => {
  let lfBlue = document.querySelector("#lfBlue");
  let lfSky = document.querySelector("#lfSky");
  let rgBlue = document.querySelector("#rgBlue");
  let rgSky = document.querySelector("#rgSky");

  lfBlue.style.left = window.scrollY > 350 ? "-250px" : "-400px";
  lfSky.style.left = window.scrollY > 350 ? "-360px" : "-400px";
  rgBlue.style.right = window.scrollY > 750 ? "-90px" : "-140px";
  rgSky.style.right = window.scrollY > 750 ? "-170px" : "-220px";
});

document.addEventListener("scroll", () => {
  let lfBlue = document.querySelector("#lfBlue2");
  let lfSky = document.querySelector("#lfSky2");
  let rgBlue = document.querySelector("#rgBlue2");
  let rgSky = document.querySelector("#rgSky2");

  lfBlue.style.left = window.scrollY > 2100 ? "-300px" : "-400px";
  lfSky.style.left = window.scrollY > 2100 ? "-200px" : "-400px";
  rgBlue.style.right = window.scrollY > 2500 ? "-100px" : "-140px";
  rgSky.style.right = window.scrollY > 2500 ? "-200px" : "-220px";
});

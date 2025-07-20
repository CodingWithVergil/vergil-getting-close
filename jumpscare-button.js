/*
if (localStorage.getItem("dark") === "true") {
  document.body.classList.add("black");
}
document.getElementById("btn").addEventListener("click", () => {
  document.body.classList.toggle("black");
  localStorage.setItem("dark", document.body.classList.contains("black"));
});
*/ //with localStorage

isDark = false;
let clickTime = 0;
const img2 = document.getElementById("imgTwo");
const footStep = document.getElementById("footstep");
const fnaf = document.getElementById("fnaf");
const giggle = document.getElementById("giggle");

document.getElementById("btn").addEventListener("click", () => {
  clickTime++;
  if (!isDark) {
    document.body.classList.add("black");
    isDark = true;
    document.getElementById("img").classList.add("hidden");
    img2.classList.add("gone");
    footStep.play();
    fnaf.pause();
    fnaf.currentTime = 0;
  } else if (clickTime === 2) {
    document.getElementById("img").style.scale = 1.1;
    document.getElementById("img").classList.remove("hidden");
    document.body.classList.remove("black");
    isDark = false;
    footStep.pause();
    fnaf.play();
    footStep.currentTime = 0;
  } else if (clickTime === 4) {
    document.getElementById("img").style.scale = 1.2;
    document.getElementById("img").style.transform = "translateY(1px)";
    document.getElementById("img").classList.remove("hidden");
    document.body.classList.remove("black");
    isDark = false;
    footStep.pause();
    footStep.currentTime = 0;
    fnaf.play();
  } else if (clickTime === 6) {
    document.getElementById("img").style.scale = 1.5;
    document.getElementById("img").classList.remove("hidden");
    document.body.classList.remove("black");
    isDark = false;
    footStep.pause();
    footStep.currentTime = 0;
    fnaf.play();
  } else if (clickTime === 8) {
    document.getElementById("img").style.scale = 1.9;
    document.getElementById("img").classList.remove("hidden");
    document.body.classList.remove("black");
    isDark = false;
    footStep.pause();
    footStep.currentTime = 0;
    fnaf.play();
  } else if (clickTime === 10) {
    document.getElementById("img").classList.add("hidden");
    document.body.classList.remove("black");
    isDark = false;
    footStep.pause();
    footStep.currentTime = 0;
  } else if (clickTime === 12) {
    document.getElementById("img").classList.add("gone");
    img2.classList.remove("gone");
    isDark = false;
    document.body.classList.remove("black");
    footStep.pause();
    footStep.currentTime = 0;
    giggle.play();
  } else {
    document.body.classList.remove("black");
    isDark = true;
    footStep.pause();
    document.getElementById("P").classList.remove("gone");
    document.getElementById("pra").classList.remove("gone");
    document.getElementById("pra").classList.add("fadeIn");
  }
});

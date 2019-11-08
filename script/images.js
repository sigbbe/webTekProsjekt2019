var slideIndex = 0;
let time;
time = setInterval(carousel, 5000); // Endre bildet hvert 5 sekund
carousel();
function carousel() {
    var i;
    var x = document.getElementsByClassName("slides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
        x[slideIndex-1].style.display = "block";
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

let playPause = document.getElementById("playPause");
let imgSlideShow = document.getElementById("imageSlideShowDiv");
imgSlideShow.addEventListener("mouseover", () => {
    playPause.style.display = "flex";
    playPause.addEventListener("click", playPauseFunction);
});

imgSlideShow.addEventListener("mouseleave", () => {
    playPause.style.display = "none";
});
let isPlaying = true;
const navButtons = document.querySelectorAll(".imageSlideShowBtn");
navButtons[0].style.display = "flex !important";
function playPauseFunction () {
    if (isPlaying) {
        this.src="./media/playMusic.png"
        clearInterval(time);
        isPlaying = false;
        navButtons[0].style.display = "flex";
        navButtons[1].style.display = "flex";
    } else {
        this.src="./media/pauseMusic.png"
        time = setInterval(carousel, 5000);
        isPlaying = true;
        navButtons[0].style.display = "none";
        navButtons[1].style.display = "none";
    }
}
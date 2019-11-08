var slideIndex = 0;
carousel();
let time;
time = setInterval(carousel, 5000); // Change image every 5 seconds
function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
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
function playPauseFunction () {
    if (isPlaying) {
        this.src="./media/playMusic.png"
        clearInterval(time);
        isPlaying = false;
    } else {
        this.src="./media/pauseMusic.png"
        time = setInterval(carousel, 5000);
        isPlaying = true;
    }
    // console.log(isPlaying);
}
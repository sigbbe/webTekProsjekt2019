const imgGalleryElement = document.querySelectorAll(".imgGalleryElement");
var slideIndex = 0;
let time;
time = setInterval(carousel, 5000); // Endre bildet hvert 5 sekund
carousel();
function carousel() {
    let x = document.getElementsByClassName("slides");
    for (let i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {
        slideIndex = 1
    }
    x[slideIndex-1].style.display = "block";
    imgElementClickFunction(slideIndex - 1);
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}
function showDivs(n) {
    console.log(n);
    
    var x = document.getElementsByClassName("slides");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}

    for (let i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }

    imgElementClickFunction(slideIndex - 1);
    x[slideIndex-1].style.display = "block";  
}


// __________________________________________________________________________ 
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

// __________________________________________________________________________
for (let i = 0; i < imgGalleryElement.length; i++) {
    imgGalleryElement[i].addEventListener("click", liiiiion);
}

function liiiiion () {
    let slides = document.querySelectorAll(".slides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[getIndex(imgGalleryElement, this)].style.display = "block";    

    // time = setInterval(carousel, 5000)
    imgElementClickFunction(getIndex(imgGalleryElement, this));
}

function imgElementClickFunction (n) {
    for (let i = 0; i < imgGalleryElement.length; i++) {
        imgGalleryElement[i].zIndex = 0;
        imgGalleryElement[i].style.borderBottom = "none";
    }

    imgGalleryElement[n].style.borderBottom = "3px solid #d90769";
    imgGalleryElement[n].style.marginBottom = "-3px";
    imgGalleryElement[n].style.zIndex = 10;
}

function getIndex(list, element) {
    for (let i = 0; i < list.length; i++) {
        if (list[i] == element) {
            return i;
        }
    }
}
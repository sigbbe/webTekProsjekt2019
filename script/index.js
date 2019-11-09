let animationDelay = setTimeout(animationDelayFunction, 3000);
document.body.style.overflowY = "hidden";
const wallpaper = document.getElementById("wallpaper");


function animationDelayFunction () {
    wallpaper.style.height = "0px";
    document.body.style.overflowY = "auto";   
}
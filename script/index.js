let animationDelay = setTimeout(animationDelayFunction, 2600);
// document.body.style.overflowY = "hidden";
const wallpaper = document.getElementById("wallpaper");


function animationDelayFunction () {
    wallpaper.style.height = "0";
    wallpaper.style.visibility = "hidde";
    wallpaper.style.display = "none";
}
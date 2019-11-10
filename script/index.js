let animationDelay = setTimeout(animationDelayFunction, 2700);
// document.body.style.overflowY = "hidden";
const wallpaper = document.getElementById("wallpaper");


function animationDelayFunction () {
    // wallpaper.style.transition = "all .5s ease";
    wallpaper.style.height = "0";
    wallpaper.style.visibility = "hidde";
    wallpaper.style.display = "none";
    // document.body.style.overflowY = "auto";   
}
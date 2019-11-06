//about
function openContactform(){
    document.getElementById("contactForm").style.display = "flex";
    document.getElementById("contactButton").style.display = "none";
    document.getElementById("contactWrapper").style.width = "610px";
    document.getElementById("contactWrapper").style.height = "710px";
}

function closeContactform() {
    document.getElementById("contactWrapper").style.width = "215px";
    document.getElementById("contactWrapper").style.height = "60px";
    window.setTimeout(function(){
        document.getElementById("contactForm").style.display = "none";
    document.getElementById("contactButton").style.display = "flex";
    }, 500);
}
    
// images.js
const imageInImageGallery = document.querySelectorAll(".imgInImgGalleryElement");
// Make big image
const canvasImgParent = document.createElement("div");
canvasImgParent.id = "canvasImgParent";
canvasImgParent.style.display = "none";
document.body.appendChild(canvasImgParent);
const canvasImg = document.createElement("img")
canvasImg.id = "canvasImg";
canvasImgParent.appendChild(canvasImg);
const exit = document.createElement("img");
exit.src = "media/iconX.png";
exit.id = "exitCanvasImg";
exit.addEventListener("click",() => {
    document.getElementById("canvasImgParent").style.display = "none";
});
canvasImgParent.appendChild(exit);


for (let i = 0; i < imageInImageGallery.length; i++) {
    imageInImageGallery[i].addEventListener("click", canvasImgFunction);    
}


function canvasImgFunction () {
    document.getElementById("canvasImgParent").style.display = "block";
    canvasImg.src = this.src;
    console.log("ASS");
}


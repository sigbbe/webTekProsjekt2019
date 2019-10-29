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

// // Last image
// const lastImage = document.createElement("img");
// lastImage.src = "media/arrow.png";
// lastImage.className = "navigationArrow";
// lastImage.id = "navigationArrowLast"
// lastImage.addEventListener("click",() => {
//     console.log("last image");
// });
// canvasImgParent.insertBefore(lastImage, canvasImgParent.childNodes[0]);
// // canvasImgParent.appendChild(lastImage);

// // Next image
// const nextImage = document.createElement("img");
// nextImage.src = "media/arrow.png";
// nextImage.className = "navigationArrow";
// nextImage.id = "navigationArrowNext";
// nextImage.addEventListener("click",() => {
//     console.log("next image");
// });
// canvasImgParent.appendChild(nextImage);


const exit = document.createElement("img");
exit.src = "media/iconX.png";
exit.id = "exitCanvasImg";
exit.addEventListener("click",() => {
    document.getElementById("canvasImgParent").style.display = "none";
    document.body.style.overflowY = "auto";
});

canvasImgParent.appendChild(exit);


for (let i = 0; i < imageInImageGallery.length; i++) {
    imageInImageGallery[i].addEventListener("click", canvasImgFunction);
    imageInImageGallery[i].parentElement.addEventListener("mouseover", infoBoxFunction);
}


function canvasImgFunction () {
    document.getElementById("canvasImgParent").style.display = "block";
    canvasImg.style.top = (canvasImgParent.clientHeight-canvasImg.clientHeight)/8+"px";
    // console.log((this.parentElement.clientHeight-this.clientHeight)/2);
    
    
    canvasImg.src = this.src;
    // this.parentElement.style 
}

function infoBoxFunction () {
    // console.log("click on the card to display the image in full-screen mode!");
    // if (document.getElementById("infoDiv")) {
    //     document.body.removeChild(document.getElementById("infoDiv"));
    // }
    // let mouseX = event.clientX;
    // let mouseY = event.clientY;
    // let infoDiv = document.createElement("div")
    //     infoDiv.id = "infoDiv";
    //     infoDiv.innerHTML = "Click on the card to display the image in full-screen-mode!"
    //     infoDiv.style.position = "absolute";
    //     infoDiv.style.backgroundColor = "#ffffff";
    //     infoDiv.style.top = mouseY+"px";
    //     infoDiv.style.left = mouseX+"px";
    //     // infoDiv.style.position
    // document.body.appendChild(infoDiv);
    // // console.log("("+mouseX+", "+mouseY+")");
    // let counter = 1;
    // console.log(counter);
    // counter += 1;
    // this.addEventListener("mouseleav", () => {
    //     this.parentElement.removeElement(this)
    // });
}


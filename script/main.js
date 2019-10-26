// images.js
const imageInImageGallery = document.querySelectorAll(".imgInImgGalleryElement");
console.log(imageInImageGallery);



// let a = imageInImageGallery.map(image => addEventListener("click"), imgOnClick);
for (let i = 0; i < imageInImageGallery; i++) {
    imageInImageGallery[i].addEventListener("click", imgOnClick);
    console.log(imageInImageGallery[i]);
}


function imgOnClick () {

}
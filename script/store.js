function message() {
    alert('CDs are currently unavaliable for online sale, but can be found at any of josteins events')

}

var events = document.getElementsByClassName("eventElement");
var modals = document.getElementsByClassName("modal");

var event = events[0];
var modal = modals[0];
let span = modal.childNodes[1].childNodes[3];

event.addEventListener("click", () => {
    modal.style.display = "block";
});

span.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (skrt) => {
    if (skrt.target == modal) {
        modal.style.display = "none";
    }
});
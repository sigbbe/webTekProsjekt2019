// Format path-name of current file, to get name of current file
let path = window.location.pathname;
var page = path.split("/").pop();

const pageArray = [
    ["Home", "About", "Media", "Events", "Store"],
    ["index.html", "about.html", "media.html", "events.html", "store.html"],
];

const mediaSubPageArray = [
    ["music.html", "images.html", "videos.html"], 
    ["Music", "Images", "Videos"]
];

const someIcons = [
    {
        name: "spotify", 
        imageUrl: "media/spotify.svg",
        href: "https://open.spotify.com/artist/2bdiRuYITTUvQ8pzuOKpld"
    }, 
    {
        name: "youtube",
        imageUrl: "media/youtube.svg",
        href: "https://www.youtube.com/channel/UCcamKl2REwZXEadT8vcKApg"
    },
    {
        name: "facebook", 
        imageUrl: "media/facebook.svg",
        href: "https://www.facebook.com/josteinfhodne"
    },
    {
        name: "instagram", 
        imageUrl: "media/instagram.svg",
        href: "https://www.instagram.com/josteinhodne/"
    },
];


// Make top-navbar
let ul = document.createElement("ul");
    ul.id = "navigation";
for (let i = 0; i < pageArray[0].length; i++) {
    let a = document.createElement("a");
        a.href = pageArray[1][i];
        a.innerHTML = pageArray[0][i];
        a.className = "navigation_link";
    let li = document.createElement("li");
        li.className = "navigation_element";
        li.appendChild(a)
        ul.appendChild(li)
        if (i == 2) {
            li.className += " dropbtn";
            let dropDownDiv = document.createElement("div");
                dropDownDiv.className = "dropdown-content";
            for (let i = 0; i < mediaSubPageArray[0].length; i++) {
                let mediaSubPages = document.createElement("a");
                    mediaSubPages.href = mediaSubPageArray[0][i];
                    mediaSubPages.innerHTML = mediaSubPageArray[1][i]
                dropDownDiv.appendChild(mediaSubPages);
            }
            li.id = "hover_navigation_element";
            li.appendChild(dropDownDiv);
        }        
}
document.body.insertBefore(ul, document.body.childNodes[0])
// document.body.appendChild(ul);


// Make classes needed for animation of burger-navigation
let burgerNav = document.createElement("img");
    burgerNav.src = "./media/iconX.png";
    burgerNav.id = "burgerNav";
    let onOff = false;
    burgerNav.addEventListener("click", () => {
        const content = document.getElementById("content");
        if (onOff) {
            onOff = false;
            ul.classList.add("moveLeft")
            ul.classList.remove("moveRight")
            burgerNav.classList.remove("burgerNavTurn")
            content.classList.add("moveUp");
            content.classList.remove("moveDown");
        } else {
            onOff = true;
            ul.classList.add("moveRight")
            ul.classList.remove("moveLeft")
            burgerNav.classList.add("burgerNavTurn")
            content.classList.add("moveDown");
            content.classList.remove("moveUp");
        }
    });
document.body.insertBefore(burgerNav, document.body.childNodes[1]);


// Apply active class to the navigation element of current page
const all_list_items = document.querySelectorAll("li");
const dropdown = document.querySelector(".dropdown-content");
const all_links = document.querySelectorAll("a");
switch (page) {
    case "index.html":
        all_list_items[0].className += " active";
        all_links[0].className += " active";
        break
    case "about.html":
        all_list_items[1].className += " active";
        all_links[1].className += " active";
        break
    case "media.html":
        all_list_items[2].className += " active";
        all_links[2].className += " active";
        break
    case "music.html":
        dropdown.childNodes[0].className += " active";
        dropdown.style.display = "flex";
        break
    case "images.html":
        dropdown.childNodes[1].className += " active";
        dropdown.childNodes[1].style.color = "rgba(24, 24, 52, 0.5)";
        dropdown.style.display = "flex";
        break
    case "videos.html":
        dropdown[2].className += " active";
        dropdown.style.display = "flex";
        break
    case "events.html":
        all_list_items[3].className += " active";
        all_links[3].className += " active";
        break        
    case "store.html":
        all_list_items[4].className += " active";
        all_links[4].className += " active";
        break
}


// Make footer with social-media icons
const footer = document.createElement("footer");
for (let i = 0; i < someIcons.length; i++) {
    let link = document.createElement("a");
        link.href = someIcons[i].href;
        link.target = "_blank";
    let someImg = document.createElement("img");
        someImg.className = "fa";
        someImg.src = someIcons[i].imageUrl;
        someImg.alt = someIcons[i].name;
    link.appendChild(someImg);
    footer.appendChild(link)
}
document.body.appendChild(footer)


// Fix navigation-position-bug
// document.body.onresize = function () {
//     if (document.body.clientWidth >= 625) {
    //     console.log(document.getElementById("navigation").style.top);
        // document.getElementById("content").style.top = "0px";
    //     console.log(document.getElementById("navigation").style.top);
    //     console.log(document.body.clientWidth);
    // }
    // document.getElementById("navigation").style.top = "300px";

// };
let path = window.location.pathname;
var page = path.split("/").pop();

const pageArray = [
    ["Home", "About", "Media", "Events", "Store"],
    ["index.html", "about.html", "media.html", "events.html", "store.html"],
];

const aboutSubPageArray = [
    ["music.html", "images.html", "videos.html"], 
    ["Music", "Images", "Videos"]
];

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
            for (let i = 0; i < aboutSubPageArray[0].length; i++) {
                let aboutSubPages = document.createElement("a");
                    aboutSubPages.href = aboutSubPageArray[0][i];
                    aboutSubPages.innerHTML = aboutSubPageArray[1][i]
                dropDownDiv.appendChild(aboutSubPages);
            }
            li.id = "hover_navigation_element";
            li.appendChild(dropDownDiv);
        }        
}
document.body.insertBefore(ul, document.body.childNodes[0])
// document.body.appendChild(ul);

const all_list_items = document.querySelectorAll("li");
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
    case "events.html":
        all_list_items[3].className += " active";
        all_links[3].className += " active";
        break        
    case "store.html":
        all_list_items[4].className += " active";
        all_links[4].className += " active";
        break
}
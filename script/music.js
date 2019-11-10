// Music
const playButton = document.querySelectorAll(".playSlashPause");
const songsListElement = document.querySelectorAll(".songsListElement");
const audioPlayer = document.getElementById("songInMusicGallery")
audioPlayer.pause();
const songs = document.querySelectorAll(".songs")
let i;
for (i = 0; i < playButton.length; i++) {
    playButton[i].addEventListener("click", playThisSong);
    songs[i].addEventListener("click", playThisSong);
}

const songDataBase = [
    {
        song: "Inspired and named after the colour of a beautiful sunrise.   ",
        album: "Small steps",
        explicit: true,
        coverImage: "./media/amber.jpg",
        audioFile: "./media/amber-feat-jostein-hodne.mp3",
        paused: true
    },
    {
        song: "Inspired by the socio-economic difficulties currently troubling southern Italy. In local dialect a’fatij means «The burden». ",
        album: "SkrtSkrt",
        explicit: true,
        coverImage: "./media/smallSteps.jpg",
        audioFile: "./media/a-fatij.mp3",
        paused: true
    },
    {
        song: "An acoustic guitar interpretation of Kari Bremnes’ song by the same name. ",
        album: "SkrtSkrt",
        explicit: true,
        coverImage: "./media/smallSteps.jpg",
        audioFile: "./media/e-du-nord.mp3",
        paused: true
    },
    {
        song: "A very special song to me, this is the very first song I wrote.   ",
        album: "SkrtSkrt",
        explicit: true,
        coverImage: "./media/smallSteps.jpg",
        audioFile: "./media/feel.mp3",
        paused: true
    },
    {
        song: "One of my personal favourites, this tune is about when life takes a bad turn, and all you really want is someone to hold you tight, hence the title.",
        album: "SkrtSkrt",
        explicit: true,
        coverImage: "./media/smallSteps.jpg",
        audioFile: "./media/hold-me-tight.mp3",
        paused: true
    },
    {
        song: "My favourite irish folk tune that I have arranged for solo guitar, originally by Turlough O’Carolan.  ",
        album: "SkrtSkrt",
        explicit: true,
        coverImage: "./media/smallSteps.jpg",
        audioFile: "./media/si-beag-si-mo-r.mp3",
        paused: true
    },
    {
        song: "A song about the most beautiful thing",
        album: "SkrtSkrt",
        explicit: true,
        coverImage: "./media/tmbt.jpg",
        audioFile: "./media/the-most-beautiful-thing.mp3",
        paused: true
    }
];

audioPlayer.addEventListener("click", () => {
    console.log(this);

});

function playThisSong() {
    let li = this.parentElement.parentElement;
    let index = getIndex(songsListElement, li);
    const displaySongName = document.getElementById("displaySongName");
    displaySongName.innerHTML = songDataBase[index].song;
    for (let i = 0; i < playButton.length; i++) {
        if (i == index) {
        li.style.backgroundColor = "rgba(234, 12, 76, 0.3)";
            continue
        }
        songsListElement[i].style.backgroundColor = "rgb(42, 42, 42)";
        playButton[i].src = "./media/playMusic.png";
        songDataBase[i].paused = true;
        console.log(songsListElement[i]);
    }

    let time = audioPlayer.currentTime;
    if (songDataBase[index].paused) {
        let chosenSongSrcFormated = songDataBase[index].audioFile.split("/")[songDataBase[index].audioFile.split("/").length - 1];
        let currentSongSrcFormated = audioPlayer.src.split("/")[audioPlayer.src.split("/").length - 1];
        if (chosenSongSrcFormated != currentSongSrcFormated.replace("%20", " ")) {
            time = 0;
        }
        this.src = "./media/pauseMusic.png";
        audioPlayer.src = songDataBase[index].audioFile;
        audioPlayer.currentTime = time;
        audioPlayer.play();
        songDataBase[index].paused = false;
    } else {
        console.log("alerkglksag");

        this.src = "./media/playMusic.png";
        audioPlayer.src = songDataBase[index].audioFile;
        audioPlayer.currentTime = time;
        audioPlayer.pause();
        songDataBase[index].paused = true;
    }
    const coverImage = document.getElementById("coverImage");
    coverImage.src = songDataBase[index].coverImage;
}

function getIndex(list, element) {
    for (i = 0; i < list.length; i++) {
        if (list[i] == element) {
            return i;
        }
    }
}
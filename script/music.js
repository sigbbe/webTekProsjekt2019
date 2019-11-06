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
        song: "amber-feat-jostein-hodne",
        album: "Small steps",
        explicit: true,
        coverImage: "./media/amber.jpg",
        audioFile: "./media/amber-feat-jostein-hodne.mp3",
        paused: true
    },
    {
        song: "a' Fatij",
        album: "SkrtSkrt",
        explicit: true,
        coverImage: "./media/smallSteps.jpg",
        audioFile: "./media/a-fatij.mp3",
        paused: true
    },
    {
        song: "E du nord",
        album: "SkrtSkrt",
        explicit: true,
        coverImage: "./media/smallSteps.jpg",
        audioFile: "./media/e-du-nord.mp3",
        paused: true
    },
    {
        song: "Feel",
        album: "SkrtSkrt",
        explicit: true,
        coverImage: "./media/smallSteps.jpg",
        audioFile: "./media/feel.mp3",
        paused: true
    },
    {
        song: "Hold me tight",
        album: "SkrtSkrt",
        explicit: true,
        coverImage: "./media/smallSteps.jpg",
        audioFile: "./media/hold-me-tight.mp3",
        paused: true
    },
    {
        song: "Si beag si mo'r.mp3",
        album: "SkrtSkrt",
        explicit: true,
        coverImage: "./media/smallSteps.jpg",
        audioFile: "./media/si-beag-si-mo-r.mp3",
        paused: true
    },
    {
        song: "The most beautiful thing",
        album: "SkrtSkrt",
        explicit: true,
        coverImage: "./media/smallSteps.jpg",
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
    for (let i = 0; i < playButton.length; i++) {
        if (i == index) {
            li.style.backgroundColor = "rgba(234, 12, 76, 0.3)";
            continue
        }
        songsListElement[i].style.backgroundColor = "#000000";
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
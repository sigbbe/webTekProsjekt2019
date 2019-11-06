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

const songDataBase = [{
        song: "Smeke reven",
        album: "SkrtSkrt",
        explicit: true,
        coverImage: "./media/jostein.jpg",
        audioFile: "./media/song1.mp3",
        paused: true
    },
    {
        song: "Smeke reven",
        album: "SkrtSkrt",
        explicit: true,
        coverImage: "./media/nutFace.jpg",
        audioFile: "./media/song2.mp3",
        paused: true
    },
    {
        song: "Smeke reven",
        album: "SkrtSkrt",
        explicit: true,
        coverImage: "./media/dank2.jpg",
        audioFile: "./media/song3.mp3",
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
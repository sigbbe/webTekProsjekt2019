class playThisSong {
    constructor() {
        let li = this.parentElement.parentElement;
        let index = getIndex(songsListElement, li);
        for (let i = 0; i < playButton.length; i++) {
            if (i == index) {
                continue;
            }
            playButton[i].src = "./media/playMusic.png";
            songDataBase[i].paused = true;
        }
        let time = audioPlayer.currentTime;
        if (songDataBase[index].paused) {
            this.src = "./media/pauseMusic.png";
            audioPlayer.src = songDataBase[index].audioFile;
            audioPlayer.currentTime = time;
            audioPlayer.play();
        }
        else {
            console.log(audioPlayer.paused);
            this.src = "./media/playMusic.png";
            audioPlayer.src = songDataBase[index].audioFile;
            audioPlayer.pause();
        }
        songDataBase[index].paused = !songDataBase[index].paused;
        const coverImage = document.querySelector(".coverImage");
        // let index = getIndex(songsListElement, li);
        // coverImage.src = songDataBase[index].coverImage;
        // audioPlayer.src = songDataBase[index].audioFile;
    }
}
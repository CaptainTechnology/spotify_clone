let songIndex = 0;
let audioEle = new Audio("1.mp3");
let masterplay = document.getElementById("masterPlay");
let mayProgressBar = document.getElementById("myprogressbar");
let gif = document.getElementById("gif");
gif.style.opacity = 1;
let mastersongname = document.getElementById("mastersongname");


let song = [
    { songname: "Legend", filepath: "1.mp3", coverpath: "1.jpg" },
    { songname: "Trap", filepath: "2.mp3", coverpath: "2.jpg" },
    { songname: "They made", filepath: "3.mp3", coverpath: "3.jpg" },
    { songname: "Rich kid", filepath: "4.mp3", coverpath: "4.jpg" },
    { songname: "Long title", filepath: "5.mp3", coverpath: "5.jpg" },
    { songname: "Safety Dance", filepath: "6.mp3", coverpath: "6.jpg" },
    { songname: "Back it up", filepath: "7.mp3", coverpath: "7.jpg" },
    { songname: "Dharia  sugar", filepath: "8.mp3", coverpath: "8.jpg" },
    { songname: "Baby", filepath: "9.mp3", coverpath: "9.jpg" },
    { songname: "True love", filepath: "10.mp3", coverpath: "10.jpg" }

]


masterplay.addEventListener("click", () => {
    if (audioEle.paused || audioEle.currentTime <= 0) {
        audioEle.play();
        masterplay.classList.remove("fa-play-circle");
        masterplay.classList.add("fa-pause-circle");
        gif.style.opacity = 1;
    }
    else {
        audioEle.pause();
        masterplay.classList.remove("fa-pause-circle");
        masterplay.classList.add("fa-play-circle");
        gif.style.opacity = 0;

    }

})





audioEle.addEventListener("timeupdate", () => {
    progress = audioEle.currentTime / audioEle.duration * 100;
    mayProgressBar.value = progress;
})

mayProgressBar.addEventListener("change", () => {
    audioEle.currentTime = mayProgressBar.value * audioEle.duration / 100;
})



const makeallplays = () => {
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
        // element.target.classList.remove("fa-pause-circle");
        // element.target.classList.add("fa-play-circle");
    })
}

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
    element.addEventListener("click", (e) => {
        // console.log(e.target);
        makeallplays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove("fa-play-circle");
        e.target.classList.add("fa-pause-circle");
        audioEle.src = `${songIndex + 1}.mp3`
        mastersongname.innerText = song[songIndex].songname;
        audioEle.currentTime = 0;
        audioEle.play();
        masterplay.classList.remove("fa-play-circle");
        masterplay.classList.add("fa-pause-circle");
        gif.style.opacity = 1;



    })
})


document.getElementById("next").addEventListener("click", () => {
    if (songIndex > 9) {
        songIndex = 0;
    }
    else {
        songIndex += 1;
    }
    audioEle.src = `${songIndex + 1}.mp3`
    mastersongname.innerText = song[songIndex].songname;

    audioEle.currentTime = 0;
    audioEle.play();
    masterplay.classList.remove("fa-play-circle");
    masterplay.classList.add("fa-pause-circle");

})
document.getElementById("previous").addEventListener("click", () => {
    if (songIndex <= 0) {
        songIndex = 9;
    }
    else {
        songIndex -= 1;
    }
    audioEle.src = `${songIndex + 1}.mp3`;
    mastersongname.innerText = song[songIndex].songname;
    audioEle.currentTime = 0;
    audioEle.play();
    masterplay.classList.remove("fa-play-circle");
    masterplay.classList.add("fa-pause-circle");

})
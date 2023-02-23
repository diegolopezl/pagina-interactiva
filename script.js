const playPause = document.querySelector(".play-pause");
const music = document.querySelector(".music");
const playButton = document.querySelector(".play-button");
const cd = document.querySelector(".cd");

playButton.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    playPause.classList.add("fa-circle-pause");
    playPause.classList.remove("fa-circle-play");
    cd.classList.add("spin");
  } else if (music.play) {
    music.pause();
    playPause.classList.add("fa-circle-play");
    playPause.classList.remove("fa-circle-pause");
    cd.classList.remove("spin");
  }
});

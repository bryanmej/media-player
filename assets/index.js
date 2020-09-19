import MediaPlayer from "./MediaPlayer.js";

const video = document.querySelector("video");
const playPause = document.querySelector(".playPause");
const muteUnmute = document.querySelector(".muteUnmute");

const player = new MediaPlayer({
  el: video,
  plugins: [],
});

playPause.onclick = () => player.play();
muteUnmute.onclick = () => player.mute();

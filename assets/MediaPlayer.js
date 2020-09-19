function MediaPlayer(config) {
  this.media = config.el;
  this.plugins = config.plugins || [];
}

MediaPlayer.prototype.play = function () {
  if (this.media.paused) {
    this.media.play();
  } else {
    this.media.pause();
  }
};

MediaPlayer.prototype.mute = function () {
  if (this.media.muted) {
    this.media.muted = false;
  } else {
    this.media.muted = true;
  }
};

export default MediaPlayer;

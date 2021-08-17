import MediaPlayer from './player.mjs';
import AutoPlay from './plugins/auto-play.mjs';
const playBtn = document.querySelector('#playButton'),
	video = document.querySelector('video'),
	muteBtn = document.querySelector('#muteButton');

const player = new MediaPlayer({
	media: video,
	//  plugins: [new AutoPlay()]
});
playBtn.onclick = () => {
	player.media.paused ? player.play() : player.pause();
};
muteBtn.onclick = () => {
	player.media.muted ? player.unmute() : player.mute();
};

import MediaPlayer from './player.mjs';
import AutoPlay from './plugins/auto-play.mjs';
import AutoPause from './plugins/auto-pause.mjs';
const playBtn = document.querySelector('#playButton'),
	video = document.querySelector('video'),
	muteBtn = document.querySelector('#muteButton');

const player = new MediaPlayer({
	media: video,
	plugins: [new AutoPlay(), new AutoPause()],
});
playBtn.onclick = () => {
	player.media.paused ? player.play() : player.pause();
};
muteBtn.onclick = () => {
	player.media.muted ? player.unmute() : player.mute();
};

/* if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('/sw.js').catch((err) => console.error(err));
} */

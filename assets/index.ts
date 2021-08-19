import MediaPlayer from './player';
import AutoPlay from './plugins/auto-play';
import AutoPause from './plugins/auto-pause';
const playBtn: HTMLElement = document.querySelector('#playButton'),
	video: HTMLMediaElement = document.querySelector('video'),
	muteBtn: HTMLElement = document.querySelector('#muteButton');

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

if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('/sw.js').catch((err) => console.error(err));
}

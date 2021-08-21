import MediaPlayer from '@aebb27/media-player';
import AutoPlay from '@aebb27/media-player/lib/plugins/auto-play';
import AutoPause from '@aebb27/media-player/lib/plugins/auto-pause';
import AdsPlugin from '@aebb27/media-player/lib/plugins/adds/ad-pulgin';
const playBtn: HTMLElement = document.querySelector('#playButton'),
	video: HTMLMediaElement = document.querySelector('video'),
	muteBtn: HTMLElement = document.querySelector('#muteButton');

const player = new MediaPlayer({
	media: video,
	plugins: [new AutoPlay(), new AutoPause(), new AdsPlugin()],
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

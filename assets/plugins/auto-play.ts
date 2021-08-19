import MediaPlayer from '../player';
class AutoPlay {
	run(player: MediaPlayer) {
		player.mute();
		player.play();
	}
}

export default AutoPlay;

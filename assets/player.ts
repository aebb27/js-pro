class MediaPlayer {
	media: HTMLMediaElement;
	plugins: Array<any>;
	constructor(props) {
		this.media = props.media;
		this.plugins = props.plugins || [];
		this.initPlugins();
	}
	play() {
		this.media.play();
	}

	pause() {
		this.media.pause();
	}

	private initPlugins() {
		this.plugins.forEach((plugin) => {
			plugin.run(this);
		});
	}

	mute() {
		this.media.muted = true;
	}

	unmute() {
		this.media.muted = false;
	}
}

export default MediaPlayer;

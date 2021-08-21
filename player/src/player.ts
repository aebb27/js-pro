class MediaPlayer {
	media: HTMLMediaElement;
	plugins: Array<any>;
	container: HTMLElement;
	constructor(props) {
		this.media = props.media;
		this.plugins = props.plugins || [];
		this.initPlayer();
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

	private initPlayer() {
		this.container = document.createElement('div');
		this.container.style.position = 'relative';
		this.media.parentNode.insertBefore(this.container, this.media);
		this.container.appendChild(this.media);
	}

	mute() {
		this.media.muted = true;
	}

	unmute() {
		this.media.muted = false;
	}
}

export default MediaPlayer;

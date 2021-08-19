class AutoPause {
	run(player) {
		this.player = player;
		const observer = new IntersectionObserver(this.handleIntersection, {
			threshold: 0.25,
		});
		observer.observe(player.media);
		document.addEventListener('visibilitychange', this.handleVisibilityChange);
	}

	handleIntersection = (entries) => {
		entries.forEach((entry) => {
			entry.isIntersecting ? this.player.play() : this.player.pause();
		});
	};

	handleVisibilityChange = () => {
		const state = document.visibilityState === 'visible';
		state ? this.player.play() : this.player.pause();
	};
}

export default AutoPause;

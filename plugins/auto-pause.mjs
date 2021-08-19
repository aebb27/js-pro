class AutoPause {
	run(player) {
		this.player = player;
		const observer = new IntersectionObserver(this.handleIntersection, {
			threshold: 0.25,
		});
		observer.observe(player.media);
	}

	handleIntersection = (entries) => {
		entries.forEach((entry) => {
			console.log(this);
			if (entry.isIntersecting) {
				this.player.play();
			} else {
				this.player.pause();
			}
		});
	};
}

export default AutoPause;

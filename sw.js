const version = 'v1';
self.addEventListener('install', (ev) => {
	ev.waitUntil(precache());
});

self.addEventListener('fetch', (ev) => {
	const req = ev.request;
	if (req.method !== 'GET') return;

	ev.respondWith(cachedResponse(req));

	ev.waitUntil(updateCache(req));
});

async function precache() {
	const cache = await caches.open(version);
	return cache.addAll([
		'/',
		'/index.html',
		'/assets/index.js',
		'/assets/player.mjs',
		'/assets/styles.css',
		'/assets/plugins/auto-pause.mjs',
		'/assets/plugins/auto-play.mjs',
		'/assets/BigBuckBunny.mp4',
	]);
}

async function cachedResponse(request) {
	const cache = await caches.open(version);
	const res = await cache.match(request);
	return res || fetch(request);
}
async function updateCache(request) {
	try {
		const cache = await caches.open(version);
		const res = await fetch(request);
		return res.status === 200
			? cache.put(request, res)
			: new Promise((resolve, reject) => resolve('D'));
	} catch (error) {
		console.error(error.message);
	}
}

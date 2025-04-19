const CACHE_NAME = 'snake_game_250419';
const urlsToCache = [
    '/snake_game/',
    '/snake_game/index.html',
    '/snake_game/manifest.json',
    'https://i.ibb.co/Rk3KVws6/maskable-icon-x192.png',
    'https://i.ibb.co/qFmNMcRq/maskable-icon-x512.png'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })
            .catch(() => {
                return new Response('오프라인 상태입니다.');
            })
    );
});

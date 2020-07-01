var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
  'custom-home-js.js',
  'home.html'
];
self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
    .then(function (cache) {
      console.log('Opened cache');
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys()
    .then(function (cacheNames) {
      return Promise.all(
        cacheNames.filter(function (cacheNames) {
          return cacheNames != CACHE_NAME
        })
        .map(function (cacheName) {
			console.log(cacheName);
          return caches.delete(cacheName)
        })
      );
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(caches.match(event.request));
});
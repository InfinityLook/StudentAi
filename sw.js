const cacheName = 'studentai-v1';
const assets = [
  '/',
  '/index.html',
  '/manifest.json'
];

// Instalace - uložení souborů do cache
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(assets);
    })
  );
});

// Fetch - vracení souborů z cache, když není internet
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});

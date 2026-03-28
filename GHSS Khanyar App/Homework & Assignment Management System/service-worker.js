// GGHSS Khanyar – Homework System Service Worker
const CACHE_NAME = 'gghss-homework-v1';

const CACHE_URLS = [
  './',
  './index.html',
  './manifest.json',
  './author.jpg',
  './principal.jpg'
];

self.addEventListener('install', event => {
  console.log('[SW-HW] Installing…');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(CACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  if (event.request.url.startsWith('chrome-extension://')) return;

  event.respondWith(
    caches.match(event.request).then(cached => {
      const networkFetch = fetch(event.request).then(res => {
        if (res && res.status === 200) {
          caches.open(CACHE_NAME).then(c => c.put(event.request, res.clone()));
        }
        return res;
      }).catch(() => cached);
      return cached || networkFetch;
    })
  );
});

console.log('[SW-HW] GGHSS Homework System Service Worker loaded ✓');

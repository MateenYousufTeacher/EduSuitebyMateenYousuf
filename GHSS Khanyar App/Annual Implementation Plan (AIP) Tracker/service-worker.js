// GGHSS Khanyar – AIP Tracker Service Worker
const CACHE_NAME = 'gghss-aip-tracker-v1';

const CACHE_URLS = [
  './',
  './index.html',
  './manifest.json',
  './author.jpg',
  './principal.jpg'
];

// INSTALL – cache core assets
self.addEventListener('install', event => {
  console.log('[SW-AIP] Installing…');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(CACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

// ACTIVATE – clean old caches
self.addEventListener('activate', event => {
  console.log('[SW-AIP] Activating…');
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

// FETCH – cache-first strategy for assets, network-first for navigation
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  if (event.request.url.startsWith('chrome-extension://')) return;

  const isNavigation = event.request.mode === 'navigate';

  if (isNavigation) {
    // Network first for navigation, fallback to cache
    event.respondWith(
      fetch(event.request)
        .then(res => {
          const clone = res.clone();
          caches.open(CACHE_NAME).then(c => c.put(event.request, clone));
          return res;
        })
        .catch(() => caches.match('./index.html'))
    );
  } else {
    // Cache first for assets
    event.respondWith(
      caches.match(event.request).then(cached => {
        if (cached) return cached;
        return fetch(event.request).then(res => {
          if (res && res.status === 200) {
            caches.open(CACHE_NAME).then(c => c.put(event.request, res.clone()));
          }
          return res;
        }).catch(() => cached);
      })
    );
  }
});

console.log('[SW-AIP] GGHSS AIP Tracker Service Worker loaded ✓');

// GGHSS Khanyar – Service Worker
// Provides full offline caching for the Admission Management PWA

const CACHE_NAME = 'gghss-admission-v1';
const CACHE_URLS = [
  './',
  './index.html',
  './manifest.json',
  './author.jpg',
  './principal.jpg',
  'https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Nunito:wght@400;600;700;800&display=swap'
];

// INSTALL – cache all core files
self.addEventListener('install', event => {
  console.log('[SW] Installing GGHSS Service Worker…');
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('[SW] Caching app shell');
      return cache.addAll(CACHE_URLS.filter(url => !url.startsWith('https://fonts')));
    }).then(() => self.skipWaiting())
  );
});

// ACTIVATE – remove old caches
self.addEventListener('activate', event => {
  console.log('[SW] Activating…');
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

// FETCH – serve from cache, fall back to network
self.addEventListener('fetch', event => {
  // Skip non-GET and chrome-extension requests
  if (event.request.method !== 'GET') return;
  if (event.request.url.startsWith('chrome-extension://')) return;

  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) {
        // Return cached version and update in background
        const fetchPromise = fetch(event.request)
          .then(networkResponse => {
            if (networkResponse && networkResponse.status === 200) {
              caches.open(CACHE_NAME).then(cache => {
                cache.put(event.request, networkResponse.clone());
              });
            }
            return networkResponse;
          }).catch(() => cached);
        return cached;
      }

      // Not in cache – try network
      return fetch(event.request)
        .then(networkResponse => {
          if (!networkResponse || networkResponse.status !== 200 || networkResponse.type === 'opaque') {
            return networkResponse;
          }
          const toCache = networkResponse.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, toCache);
          });
          return networkResponse;
        })
        .catch(() => {
          // Offline fallback
          if (event.request.destination === 'document') {
            return caches.match('./index.html');
          }
        });
    })
  );
});

// BACKGROUND SYNC (optional future use)
self.addEventListener('sync', event => {
  if (event.tag === 'sync-admissions') {
    console.log('[SW] Background sync triggered');
  }
});

console.log('[SW] GGHSS Khanyar Service Worker loaded ✓');

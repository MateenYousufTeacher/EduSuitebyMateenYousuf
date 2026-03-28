// GGHSS Khanyar – Service Worker
// Handles offline caching for the School Messaging PWA

const CACHE_NAME = 'gghss-messaging-v1';
const CACHE_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './author.jpg',
  './principal.jpg'
];

// ─── INSTALL: Cache all assets ───
self.addEventListener('install', event => {
  console.log('[SW] Installing GGHSS Messaging Service Worker...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[SW] Caching app shell');
        // Cache what exists; skip if images not present
        return Promise.allSettled(
          CACHE_ASSETS.map(url =>
            cache.add(url).catch(err => console.warn('[SW] Failed to cache:', url, err))
          )
        );
      })
      .then(() => self.skipWaiting())
  );
});

// ─── ACTIVATE: Clean old caches ───
self.addEventListener('activate', event => {
  console.log('[SW] Activating...');
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(k => k !== CACHE_NAME)
          .map(k => {
            console.log('[SW] Deleting old cache:', k);
            return caches.delete(k);
          })
      )
    ).then(() => self.clients.claim())
  );
});

// ─── FETCH: Serve from cache, fallback to network ───
self.addEventListener('fetch', event => {
  // Skip non-GET and chrome-extension requests
  if (event.request.method !== 'GET') return;
  if (event.request.url.startsWith('chrome-extension://')) return;

  event.respondWith(
    caches.match(event.request)
      .then(cachedResponse => {
        if (cachedResponse) {
          // Return cached version
          return cachedResponse;
        }

        // Try network, then cache new response
        return fetch(event.request)
          .then(networkResponse => {
            if (!networkResponse || networkResponse.status !== 200 || networkResponse.type === 'opaque') {
              return networkResponse;
            }

            // Clone and cache
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then(cache => {
              cache.put(event.request, responseClone);
            });

            return networkResponse;
          })
          .catch(() => {
            // Offline fallback – serve index.html for navigation
            if (event.request.mode === 'navigate') {
              return caches.match('./index.html');
            }
            return new Response('Offline', {
              status: 503,
              statusText: 'Service Unavailable',
              headers: new Headers({ 'Content-Type': 'text/plain' })
            });
          });
      })
  );
});

// ─── MESSAGE: Handle skip-waiting from client ───
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// ─── PUSH (future): Notification support placeholder ───
self.addEventListener('push', event => {
  const data = event.data ? event.data.json() : {};
  const options = {
    body: data.body || 'New message from GGHSS Khanyar',
    icon: './icons/icon-192.png',
    badge: './icons/icon-72.png',
    tag: 'gghss-notification',
    requireInteraction: false,
    data: { url: './' }
  };
  event.waitUntil(
    self.registration.showNotification(data.title || '📢 GGHSS Khanyar', options)
  );
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow(event.notification.data.url || './')
  );
});

console.log('[SW] GGHSS Khanyar Messaging Service Worker loaded v1');

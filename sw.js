const CACHE_NAME = 'sbr-dashboard-v1';

// Install service worker (tanpa membebani load awal)
self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(clients.claim());
});

// Fetch event (Bisa dikembangkan nanti kalau butuh fitur offline)
self.addEventListener('fetch', event => {
  // Sementara biarkan kosong, default ambil dari network
});

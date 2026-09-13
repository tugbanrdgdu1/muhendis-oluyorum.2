const ONBELLEK = "mo-v1";
const DOSYALAR = ["/", "/index.html", "/content.js", "/manifest.webmanifest",
  "/icons/icon-192.png", "/icons/icon-512.png", "/icons/apple-touch-icon.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(ONBELLEK).then(c => c.addAll(DOSYALAR)));
  self.skipWaiting();
});

self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks =>
    Promise.all(ks.filter(k => k !== ONBELLEK).map(k => caches.delete(k)))));
  self.clients.claim();
});

self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    caches.match(e.request).then(cached => {
      const agi = fetch(e.request).then(res => {
        if (res && res.status === 200 && res.type === "basic")
          caches.open(ONBELLEK).then(c => c.put(e.request, res.clone()));
        return res;
      }).catch(() => cached);
      return cached || agi;
    })
  );
});

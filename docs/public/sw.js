// Retire stale development service workers without routing their update request
// through the Docus content catch-all.
self.addEventListener('activate', (event) => {
  event.waitUntil(self.registration.unregister())
})

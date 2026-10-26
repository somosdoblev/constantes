// Service worker mínimo de Constantes: permite instalar la app en el celular.
// No guarda copias de la app, así siempre se carga la versión más reciente.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET' || e.request.mode !== 'navigate') return;
  e.respondWith(fetch(e.request).catch(() => new Response(
    '<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><body style="font-family:system-ui;background:#F4EEE2;color:#1E1C19;display:grid;place-items:center;height:100vh;margin:0;text-align:center;padding:24px"><div><h2>Sin conexión</h2><p>Conéctate a internet para ver tu reto.</p></div>',
    { headers: { 'Content-Type': 'text/html; charset=utf-8' } })));
});

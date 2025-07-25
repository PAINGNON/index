// service-worker.js
self.addEventListener('push', function(event) {
  const data = event.data.json();

  const options = {
    body: data.body,
    icon: 'Logo.png', // icon สำหรับแจ้งเตือน
    badge: 'Logo.png' // รูปเล็กๆ ที่มุม notification
  };

  event.waitUntil(
    self.registration.showNotification(data.title, options)
  );
});

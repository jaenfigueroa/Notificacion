// Solicitar permiso para mostrar notificaciones
Notification.requestPermission()
  .then((permission) => {
    if (permission === 'granted') {
      // Crear y mostrar la notificación
      new Notification('Hola mundo')
    }
  })
  .catch((error) => {
    console.error('Error al solicitar permiso para mostrar notificaciones:', error)
  })

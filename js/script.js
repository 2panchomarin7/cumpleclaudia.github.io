'use strict'

window.addEventListener('load', function() {
    var video = document.getElementById('background-video');
  
    // Reproducir el video automáticamente
    video.play();
  
    // Controlar la reproducción del video al hacer clic en el botón de retroceso
    window.addEventListener('pageshow', function(event) {
      if (event.persisted) {
        video.play();
      }
    });
  });
  
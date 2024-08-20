// Mostrar/ocultar secciones específicas basadas en los clics en la barra lateral
function showSection(sectionId) {
  // Ocultar todas las secciones
  var sections = document.querySelectorAll('.section-content');
  sections.forEach(function(section) {
      section.style.display = 'none';
  });

  // Mostrar la sección seleccionada
  var sectionToShow = document.getElementById(sectionId);
  if (sectionToShow) {
      sectionToShow.style.display = 'block';
  }
}

// Mostrar la sección de bienvenida por defecto cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
  var welcomeSection = document.getElementById('welcome');
  if (welcomeSection) {
      welcomeSection.style.display = 'block';
  }

  // Seleccionar el botón de Dark Mode
  const toggleButton = document.getElementById('toggle-dark-mode');
  const modeIcon = document.getElementById('mode-icon');

  // Verificar si hay un tema guardado en localStorage
  if (localStorage.getItem('theme') === 'dark') {
      document.body.classList.add('dark-mode');
      modeIcon.classList.remove('fa-moon');
      modeIcon.classList.add('fa-sun'); // Cambiar icono a sol
  }

  // Manejar el evento de clic en el botón
  if (toggleButton && modeIcon) { // Verifica que los elementos existan
      toggleButton.addEventListener('click', function() {
          document.body.classList.toggle('dark-mode');

          // Cambiar el icono y guardar la preferencia en localStorage
          if (document.body.classList.contains('dark-mode')) {
              modeIcon.classList.remove('fa-moon');
              modeIcon.classList.add('fa-sun'); // Cambiar a icono de sol
              localStorage.setItem('theme', 'dark');
          } else {
              modeIcon.classList.remove('fa-sun');
              modeIcon.classList.add('fa-moon'); // Cambiar a icono de luna
              localStorage.setItem('theme', 'light');
          }
      });
  }
});


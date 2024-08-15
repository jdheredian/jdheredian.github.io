document.getElementById('notion-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    // Obtener los valores del formulario
    const title = document.getElementById('notion-title').value;
    const url = document.getElementById('notion-url').value;
  
    // Crear un nuevo elemento de lista
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.textContent = title;
    a.href = url;
    a.target = "_blank";
  
    // Agregar el enlace al elemento de lista
    li.appendChild(a);
  
    // Agregar el elemento de lista a la lista de enlaces de Notion
    document.getElementById('notion-links').appendChild(li);
  
    // Limpiar el formulario
    document.getElementById('notion-title').value = '';
    document.getElementById('notion-url').value = '';
  });
function elegirOpcion() {
    const opciones = document.getElementById('opciones').value.split(',').map(opcion => opcion.trim());
  
    if (opciones.length === 0 || opciones[0] === '') {
      alert('Por favor, ingresa al menos una opción.');
      return;
    }
  
    if (opciones.length > 10) {
      alert('Por favor, ingresa un máximo de 10 opciones.');
      return;
    }
  
    const opcionesDiv = document.getElementById('opcionesList');
    opcionesDiv.innerHTML = '';
  
    let ultimoSpan;

    opciones.forEach((opcion, index) => {
      setTimeout(() => {
        const span = document.createElement('span');
        span.textContent = opcion;
        span.classList.add('opcion');
        opcionesDiv.innerHTML = '';
        opcionesDiv.appendChild(span);
        ultimoSpan = span; // Almacenar la referencia al último elemento creado
      }, (index + 1) * 300); 
    });
    
    // Código para eliminar el último elemento después de que termine el tiempo
    setTimeout(() => {
      if (ultimoSpan && ultimoSpan.parentNode) {
        ultimoSpan.parentNode.removeChild(ultimoSpan);
      }
    }, opciones.length * 300 + 200); // Ajusta el tiempo adecuadamente para eliminar después de que termine el bucle setTimeout
    
  
    setTimeout(() => {
      const indiceAleatorio = Math.floor(Math.random() * opciones.length);
      const opcionElegida = opciones[indiceAleatorio];
      document.getElementById('opcionElegida').textContent = opcionElegida;
    }, opciones.length * 300); 
  
  }

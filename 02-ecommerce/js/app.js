

const modalImagen = document.querySelector('#modal-imagen');

if(modalImagen){

    // cuando se muestra el modal
    modalImagen.addEventListener('show.bs.modal', function(event) {
    //   nos dice a que le hemos dado click
        const enlace = event.relatedTarget;
        const rutaImagen = enlace.getAttribute('data-bs-imagen')
        // console.log(rutaImagen);
    
        // Construir la imagen
        const imagen = document.createElement('IMG');
        imagen.src = `img/${rutaImagen}.jpg`;
        // con este le agrego la clase 
        imagen.classList.add('img-fluid')
        imagen.alt = 'Imagen Galería'
    
        // donde lo voy a mostar
        const contenidoModal = document.querySelector('.modal-body')
        contenidoModal.appendChild(imagen)
        // console.log(imagen);
    
    })
    // ocultado modal
    modalImagen.addEventListener('hidden.bs.modal', function(){
        const contenidoModal = document.querySelector('.modal-body')
        contenidoModal.textContent = '';
    })
}


(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()
const uploadform = document.getElementById('uploadForm');
const imagen = document.getElementById('imagen');
const msg = document.getElementById('msg');

uploadform.addEventListener('submit', (e) => {
    e.preventDefault();
    msg.textContent = '';
    
    const file = imagen.files[0];
    if (!file) {
        msg.textContent = 'Por favor seleccione un archivo.';
        msg.className = 'msg err';
        return;
    }
});
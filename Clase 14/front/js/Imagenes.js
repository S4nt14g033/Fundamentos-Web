const uploadform = document.getElementById('uploadForm');
const imagen = document.getElementById('imagen');
const msg = document.getElementById('msg');

uploadform.addEventListener('submit', async (e) => {
    e.preventDefault();
    msg.textContent = '';
    
    const file = imagen.files[0];
    if (!file) {
        msg.textContent = 'Por favor seleccione un archivo.';
        msg.className = 'msg err';
        return;
    }

    const formData = new FormData();
    formData.append('image', file);

    try {

        const res = await fetch('http://localhost:3000/upload', {
            method: 'POST',
            body: formData
        });

        const data = await res.json();
        console.log(data);
        
        msg.textContent = 'Archivo subido correctamente.';
        msg.className = 'msg ok';

    } catch (error) {
        console.error(err);
        msg.textContent = 'Error al subir la imagen.';
        msg.className = 'msg err';
    }
});
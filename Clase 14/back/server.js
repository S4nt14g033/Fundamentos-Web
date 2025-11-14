// back/server.js
const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const cors = require('cors');

const app = express();
app.use(cors());

// 1. ruta donde vamos a guardar: uploads/students
const uploadDir = path.join(__dirname, 'uploads', 'students');

// si no existe, la creamos
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// función para generar 8 caracteres aleatorios
function generarCodigo8() {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let out = '';
  for (let i = 0; i < 8; i++) {
    out += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return out;
}

// 2. configuración de multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir); // uploads/students
  },
  filename: (req, file, cb) => {
    // obtenemos extensión original
    const ext = path.extname(file.originalname);
    // generamos nombre nuevo
    const nuevoNombre = `${generarCodigo8()}-id${ext}`;

    // imprimimos en consola
    console.log('Nombre original:', file.originalname);
    console.log('Nuevo nombre   :', nuevoNombre);

    cb(null, nuevoNombre);
  }
});

const upload = multer({ storage });

// 3. endpoint que recibe la imagen
app.post('/upload', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No se envió archivo' });
  }

  return res.json({
    message: 'Imagen subida correctamente',
    originalName: req.file.originalname,
    newName: req.file.filename,
    path: `uploads/students/${req.file.filename}`
  });
});

// 4. levantar servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

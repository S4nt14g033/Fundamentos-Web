# 🖥️ Backend – Subida de Imágenes (`CLASE14/back`)

## 📋 Descripción
Este backend está desarrollado con **Node.js**, **Express** y **Multer**, y permite recibir una imagen desde el frontend, asignarle un nombre aleatorio con formato `xxxxxxxx-id.ext` y guardarla en la carpeta `uploads/students`.

---

## ⚙️ Requisitos previos
1. Tener instalado **Node.js** (versión 16 o superior).
2. Contar con la siguiente estructura de carpetas:

```
CLASE14/
 ├── back/
 │    └── server.js
 └── front/
      ├── index.html
      └── js/
           └── imagenes.js
```

---

## 🚀 Pasos de configuración

### 1. Acceder a la carpeta del backend
```bash
cd CLASE14/back
```

### 2. Inicializar el proyecto Node.js
```bash
npm init -y
```

### 3. Instalar las dependencias necesarias
```bash
npm install express multer cors
```

### 4. Crear el archivo principal del servidor
Crea un archivo llamado **`server.js`** dentro de la carpeta `back/` y copia allí el código del servidor.

---

## 🗂️ Estructura esperada después de la configuración

```
CLASE14/
 ├── back/
 │    ├── server.js
 │    ├── package.json
 │    ├── package-lock.json
 │    └── uploads/
 │         └── students/
 └── front/
      ├── index.html
      └── js/
           └── imagenes.js
```

> ⚠️ La carpeta `uploads/students` se crea automáticamente al ejecutar el servidor, si no existe.

---

## ▶️ Ejecución del servidor

Para iniciar el backend:

```bash
node server.js
```

El servidor se ejecutará en:

```
http://localhost:3000
```

---

## 📤 Envío de la imagen desde el frontend

- El **frontend** debe enviar la imagen a la ruta:
  ```
  POST http://localhost:3000/upload
  ```
- El campo del formulario debe tener el nombre `image`.

---

## ✅ Resultado

Cuando se suba una imagen correctamente:

- Se guardará dentro de la carpeta `uploads/students/`.
- El archivo tendrá un nombre aleatorio de 8 caracteres seguido de `-id`, por ejemplo:
  ```
  7dA4pQz9-id.jpg
  ```
- En la consola del servidor aparecerán los mensajes:
  ```
  Nombre original: foto.png
  Nuevo nombre   : 7dA4pQz9-id.png
  ```

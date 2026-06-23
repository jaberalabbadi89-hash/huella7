# Estructura y Documentación del Proyecto H5P - AHC

Este documento centraliza la arquitectura de la Biblioteca H5P para la Asociación Huella de Carbono (AHC), asegurando su escalabilidad, calidad y fácil mantenimiento a largo plazo.

---

## 1. Estructura de Carpetas 📁

Para mantener la biblioteca organizada y facilitar el trabajo colaborativo, se establece la siguiente estructura de directorios:

- **`01_Catalogo/`**: Contiene el inventario general de todos los Objetos de Aprendizaje (OA) disponibles, su metadata principal y estado de desarrollo (ej. `Catalogo_H5P.md`).
- **`02_Fichas/`**: Almacena las Fichas Técnicas individuales de cada OA en formato Markdown o PDF. Cada ficha documenta los objetivos, nivel de Bloom, instrucciones y detalles pedagógicos.
- **`03_H5P/`**: Carpeta principal de los entregables. Contiene los archivos `.h5p` finales, listos para ser importados a Moodle.
- **`04_Media/`**: Repositorio centralizado de recursos multimedia originales (imágenes en alta resolución, videos fuente sin editar, audios, iconos) utilizados en los OA.
- **`05_Documentacion/`**: Manuales internos, lineamientos de diseño instruccional corporativos, guías de estilo y documentación general del proyecto.
- **`06_Checklists/`**: Plantillas y registros de control de calidad (QA) completados antes del lanzamiento de cada recurso.
- **`07_Guia_Docente/`**: Materiales de apoyo, manuales de uso y orientaciones didácticas dirigidas a los profesores y facilitadores que implementarán los OA.
- **`08_Backups/`**: Copias de seguridad periódicas de los archivos `.h5p` y bases de datos para prevenir pérdidas de información.
- **`09_Versiones/`**: Archivo histórico de versiones anteriores de los OA (`v1.0`, `v1.1`, etc.) para trazabilidad y posible reversión (rollback).
- **`10_Recursos/`**: Enlaces externos, bibliografía, plantillas base (wireframes) y otros materiales de apoyo para la creación de nuevos contenidos H5P.

---

## 2. Checklist de Calidad (QA) ✅

Antes de publicar cualquier Objeto de Aprendizaje en Moodle, el creador o revisor debe validar los siguientes puntos:

- [ ] **Objetivos:** El OA cumple claramente con el objetivo de aprendizaje establecido en su Ficha Técnica.
- [ ] **Competencias:** Las actividades están alineadas con las competencias que se buscan desarrollar.
- [ ] **Feedback:** Todas las interacciones, aciertos y errores proporcionan retroalimentación clara, constructiva e inmediata.
- [ ] **Navegación:** El flujo de la actividad es intuitivo, sin callejones sin salida ni confusiones para el usuario.
- [ ] **Responsive:** El contenido se visualiza y funciona correctamente en dispositivos móviles (smartphones y tablets) y ordenadores de escritorio.
- [ ] **Accesibilidad WCAG:** Uso correcto de contrastes, textos alternativos (ALT) en imágenes, y soporte para navegación por teclado / lectores de pantalla.
- [ ] **Compatibilidad Moodle:** El archivo `.h5p` ha sido probado en un entorno Moodle de prueba y reporta calificaciones correctamente.
- [ ] **Compatibilidad H5P:** Solo se utilizan tipos de contenido oficiales y estables, sin modificaciones de código no soportadas.
- [ ] **Metadatos:** El archivo H5P incluye el título correcto, autor, año y etiquetas (tags) dentro del editor.
- [ ] **Licencia:** Los derechos de autor están correctamente atribuidos y todos los recursos multimedia usados son libres de derechos o pertenecen a la AHC.
- [ ] **Calidad visual:** Alineación coherente con la identidad corporativa de la AHC (colores, tipografías institucionales, calidad de imágenes).
- [ ] **Ortografía:** Revisión exhaustiva de gramática, ortografía y redacción en español.
- [ ] **Revisión final:** Aprobación final por parte del coordinador del proyecto o diseñador instruccional principal.

---

## 3. Guía de Reutilización para Docentes 🔄

Esta guía rápida explica cómo los docentes pueden adaptar los Objetos de Aprendizaje existentes para nuevos contextos.

### 📝 Cómo reutilizar un OA
1. Localiza el archivo `.h5p` deseado en la carpeta `03_H5P`.
2. Sube el archivo a tu curso en Moodle o ábrelo en un editor H5P local (ej. Lumi).
3. Haz clic en **Editar** para acceder a la interfaz de autoría y realizar los cambios necesarios.
4. Guarda el nuevo recurso bajo un nombre diferente para no sobreescribir el original.

### ✍️ Cómo modificar textos
- En el modo edición, haz clic sobre cualquier campo de texto (títulos, descripciones, preguntas).
- Borra y redacta el nuevo contenido. Asegúrate de mantener la longitud adecuada para no romper el diseño visual.

### 🖼️ Cómo cambiar imágenes
- Busca el elemento de imagen en el editor.
- Haz clic en la "X" (Eliminar) de la imagen actual.
- Haz clic en **Añadir** y selecciona la nueva imagen desde tu equipo (respeta las proporciones originales).
- **Importante:** No olvides actualizar el texto alternativo (ALT) y los metadatos de copyright de la nueva imagen.

### 🎥 Cómo sustituir vídeos
- Dentro del contenido (ej. Interactive Video), ve a la pestaña "Añadir vídeo".
- Elimina el vídeo original y sube el nuevo (o pega el nuevo enlace de YouTube/Vimeo).
- **Nota:** Al cambiar el vídeo, las interacciones previas perderán la sincronización temporal. Deberás arrastrarlas al nuevo minuto/segundo correspondiente.

### ❓ Cómo actualizar preguntas
- Selecciona la interacción tipo pregunta (Multiple Choice, True/False, etc.).
- Modifica el texto de la pregunta, las opciones y marca cuál es la correcta.
- Revisa siempre que los mensajes de **Feedback** coincidan con la nueva pregunta.

### 📤 Cómo exportar H5P
- Si estás en Moodle, visualiza la actividad como estudiante.
- En la esquina inferior izquierda del cuadro H5P, haz clic en **"Reutilizar" (Reuse)**.
- Selecciona **"Descargar como un archivo .h5p"**.

### 📥 Cómo importar en Moodle
- Ve a tu curso en Moodle y activa la edición.
- Haz clic en "Añadir una actividad o recurso" y selecciona **H5P** o **Contenido Interactivo**.
- En lugar de crear uno nuevo, utiliza la opción **Subir** (Upload) y selecciona tu archivo `.h5p`.
- Guarda los cambios.

### 🌟 Buenas prácticas
- Crea siempre una **copia de seguridad** antes de modificar un OA complejo.
- Respeta los **niveles de dificultad** originales al cambiar las preguntas.
- Utiliza **imágenes optimizadas** (comprimidas) para no ralentizar la carga en Moodle.

### ⚠️ Errores frecuentes
- **"El archivo es demasiado grande"**: Ocurre al subir vídeos pesados directamente al H5P. Solución: Sube el vídeo a YouTube/Vimeo y enlaza la URL.
- **Interacciones desfasadas en Interactive Video**: Sucede si cambias el vídeo por uno más corto. Solución: Revisa la línea de tiempo y reposiciona los puntos de interacción.
- **"Faltan bibliotecas" al importar**: Ocurre si tu Moodle tiene una versión de H5P muy antigua. Solución: Pide al administrador de Moodle que actualice el plugin H5P.

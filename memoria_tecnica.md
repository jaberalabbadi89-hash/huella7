# Memòria Tècnica: Rediseño Digital y Objetos de Aprendizaje Interactivos (AHC)

**Autor:** Equipo de Desarrollo Técnico / Estudiante en Prácticas  
**Institución:** Asociación Huella de Carbono (AHC)  
**Duración del Proyecto:** 60 Horas  

---

## 1. Introducción y Contexto Institucional

La Asociación Huella de Carbono (AHC) es una organización comprometida con la concienciación climática y la formación en sostenibilidad. Para canalizar su oferta educativa, la asociación cuenta con un ecosistema digital compuesto por un portal web principal desarrollado en WordPress (maquetador Divi) y un entorno virtual de aprendizaje (EVA) basado en Moodle (con el tema Edwiser RemUI). 

En este contexto, el presente proyecto de 60 horas se centra en resolver la desconexión visual y la falta de interactividad dinámica dentro de sus recursos formativos. El objetivo principal ha sido conceptualizar, diseñar y programar un conjunto de prototipos interactivos funcionales para cuatro Objetos de Aprendizaje (OA) de alta prioridad pedagógica, garantizando una experiencia de usuario (UX) unificada, accesible y de alto rendimiento.

---

## 2. Alineación Estratégica con el "Plan Rediseño Digital 2026"

Durante la fase de análisis técnico, se identificó que realizar modificaciones directamente sobre las plantillas PHP del núcleo de Moodle o los archivos estructurales de WordPress presentaba graves riesgos de escalabilidad, incompatibilidad y alto coste de mantenimiento ante futuras actualizaciones de software.

Para mitigar este riesgo, la estrategia adoptada se alinea con el "Plan Rediseño Digital 2026" de la asociación a través de dos decisiones de arquitectura clave:
1. **Centralización de Estilos mediante Capa de Sobreescritura (`h5p-overrides.css`):** En lugar de editar los temas base, se diseñó una hoja de estilos de sobreescritura específica para el motor H5P. Esto permite que cualquier módulo interactivo creado de forma nativa en H5P herede automáticamente la identidad visual de la asociación, sin importar si está embebido en WordPress o Moodle.
2. **Prototipado Desacoplado de Micro-Frontends:** La lógica y la estructura de las interacciones se programaron de forma aislada e independiente en el lado del cliente (Client-Side). Esto asegura que los desarrolladores puedan testear las interacciones de forma local y ágil, reduciendo a cero la dependencia del servidor durante la fase de control de calidad (QA).

---

## 3. Tecnologías Utilizadas y Filosofía de Diseño Visual

El desarrollo técnico se ha ejecutado estrictamente bajo el estándar de desarrollo nativo web, garantizando ligereza, rendimiento y compatibilidad sin librerías externas:

* **HTML5 Semántico:** Utilizado para estructurar las secciones, optimizar el posicionamiento (SEO) y cumplir con las directrices de accesibilidad (A11y), implementando elementos nativos de interfaz de usuario como `<dialog>` para el control de ventanas modales.
* **CSS3 (Grid & Flexbox):** Uso intensivo de CSS Grid para construir la estructura modular de la página de control (Bento Box) y Flexbox para alinear de forma fluida los controles multimedia, botones de interacción y elementos arrastrables.
* **Vanilla JavaScript (ES6):** Implementación de JavaScript nativo para gestionar el estado de las interacciones, temporizadores, lógica de puntuación y el control del ciclo de vida de los componentes multimedia.

### Filosofía de Diseño Visual:
* **Diseño Bento Box:** Estructuración de la interfaz general mediante un sistema de rejilla modular y limpio, facilitando la lectura secuencial de los datos de progreso del curso y el acceso a los módulos didácticos.
* **Efecto Glassmorphic:** Aplicación de estilos de "vidrio esmerilado" mediante la propiedad `backdrop-filter: blur()`, sombras sutiles y bordes semi-transparentes para conferir una estética visual moderna y premium a las cabeceras y popups interactivos.
* **Diseño Adaptativo (Responsive Design):** Configuración de las dimensiones internas, coordenadas de hotspots y márgenes mediante unidades flexibles y porcentajes (`%`) para garantizar que la experiencia sea idéntica en dispositivos móviles, tabletas y ordenadores de escritorio.

---

## 4. Arquitectura del Proyecto e Inyección de Código

La arquitectura del proyecto está diseñada de forma modular y desacoplada, facilitando una inyección por fases que previene conflictos en el DOM y reduce la carga del servidor. La estructura de archivos del prototipo se compone de:

* **`index.html`:** Documento contenedor principal que actúa como portal de aprendizaje interactivo.
* **`custom-style.css`:** Contiene los tokens de diseño de la marca (colores oficiales como el verde `#4F9447`, tipografías corporativas, etc.), las reglas estructurales de la Bento Box y los estilos específicos de cada objeto de aprendizaje.
* **`script.js`:** Núcleo de la lógica interactiva. Controla el lanzamiento de las modales y el ciclo de vida de los datos de cada actividad (volteo de tarjetas, zonas de drop, sistema de penalización temporal en video y control selectivo de tooltips).
* **`custom-interactions.js`:** Archivo aislado que ejecuta una instancia de `Intersection Observer` para aplicar animaciones de entrada (`ahc-reveal`) a los elementos de la interfaz solo cuando entran en el viewport del navegador, optimizando el uso de CPU.
* **`h5p-overrides.css`:** Hoja de estilos externa para inyectar sobre los iframes nativos de H5P. Este archivo aplica selectores de alta especificidad (ej. `.h5p-joubelui-button`) para redefinir el color de los botones del sistema de H5P al verde de la asociación, redondear esquinas y unificar el muelle visual de los diálogos interactivos, todo de manera aislada y sin interferir con las hojas de estilo nativas de Moodle (Edwiser).

---

## 5. Desarrollo Técnico de los Objetos de Aprendizaje (OA-01 a OA-04)

Se han programado funcionalmente cuatro componentes interactivos basados en especificaciones reales de los módulos de aprendizaje:

1. **OA-01 (Dialog Cards - Conceptos Climáticos):** Componente dinámico de tarjetas didácticas. Emplea transiciones CSS 3D (`transform-style: preserve-3d` y `backface-visibility: hidden`) para simular el volteo de tarjetas física mediante la adición selectiva de clases. Soporta navegación secuencial y control de estado idiomático (Español/Catalán).
2. **OA-02 (Drag and Drop - Abastos de Emisión):** Panel interactivo de clasificación de emisiones. Incorpora algoritmos de barajado aleatorio (Shuffle) al inicializar el objeto de aprendizaje para evitar memorización posicional. Utiliza eventos nativos de arrastre (`dragstart`, `dragover`, `drop`) y valida las respuestas aplicando clases de éxito (`.ahc-draggable--correct`) o error (`.ahc-draggable--incorrect`) según el contenedor de destino.
3. **OA-03 (Interactive Video - Calculadora Corporativa):** Simulación controlada de reproductor multimedia educativo. Implementa un hilo de ejecución periódica (`setInterval`) para sincronizar el tiempo del video con puntos de control preestablecidos. Al alcanzar paradas obligatorias, pausa el flujo y bloquea la interfaz con un cuestionario modal. Si la respuesta es incorrecta, ejecuta un efecto visual de parpadeo de pantalla en rojo (`@keyframes red-flash`) y retrocede de forma punitiva el video 45 segundos para reforzar el aprendizaje.
4. **OA-04 (Image Hotspots - Emisiones Ocultas):** Plano interactivo de una vivienda. Emplea un contenedor con posicionamiento relativo e imágenes fluidas (`width: 100%; height: auto;`), sobre el cual se disponen marcadores absolutos configurados al milímetro con porcentajes (`top` y `left`). Esto asegura que los botones interactivos permanezcan inmóviles sobre sus electrodomésticos correspondientes ante cambios de escala. Los marcadores integran una animación de pulsación constante (`@keyframes hotspot-pulse`) y despliegan tooltips con comportamiento tipo acordeón (abrir un punto cierra automáticamente los demás).

### Accesibilidad e Inclusión (A11y):
Se ha prestado especial atención al cumplimiento de las pautas WCAG 2.1:
* **Navegación Teclado:** Todos los marcadores y botones interactivos utilizan la etiqueta semántica `<button>` permitiendo el enfoque mediante la tecla Tabulador y el disparo mediante la barra espaciadora o Enter.
* **Semántica y Atributos Aria:** Se implementaron los atributos `aria-expanded` en tooltips y marcadores, `aria-label` descriptivos de los iconos embebidos, y textos `alt` detallados en las imágenes del plano estructural del hogar.
* **Contraste de Color:** La paleta de colores empleada (incluyendo el verde `#4F9447` y los avisos de error) cumple con la tasa de contraste mínimo de 4.5:1 exigido para textos de lectura.

---

## 6. Gestión de Rendimiento, Accesibilidad y Prevención de Fugas de Memoria

El aseguramiento de la eficiencia del micro-frontend en entornos de producción limitados como Moodle se estructuró bajo tres pilares:

### Optimización del DOM:
En lugar de cargar estructuras pesadas estáticas, la inyección del DOM se realiza bajo demanda (Lazy Injection) al hacer clic en cada ficha didáctica. El contenido HTML de cada actividad se inyecta dinámicamente mediante `innerHTML` y se limpia automáticamente en la función de cierre.

### Prevención de Fugas de Memoria (Memory Leaks):
El mayor riesgo de inyección de lógica en reproductores interactivos dentro de ventanas modales es la permanencia de temporizadores de fondo cuando el usuario cierra la ventana. Para mitigar esto, se ha integrado un protocolo de limpieza estricto en la función de cierre global `closeModal()`, la cual detiene la ejecución del temporizador del reproductor mediante `clearInterval(videoPlaybackTimer)`, resetea las variables de estado y restaura los flujos de scroll originales del cuerpo del documento.

### Optimización de Rendimiento en Animaciones:
El script `custom-interactions.js` optimiza los ciclos de CPU del navegador al apagar el motor del `Intersection Observer` mediante `observer.unobserve(entry.target)` en el instante en que un elemento de la Bento Grid se vuelve visible en pantalla, deteniendo el consumo de recursos de monitorización.

---

## 7. Control de Versiones y Protocolo de Despliegue

La gestión del ciclo de vida del código ha seguido un flujo de trabajo riguroso de ingeniería:

* **Control de Versiones (Git):** Organización del repositorio local bajo una estructura limpia. Se crearon las ramas `develop` para la integración de los componentes en fase de prueba y `main` para los lanzamientos funcionales estables listos para producción.
* **Sincronización Remota (GitHub):** Puesta en común del código y control de copias mediante la subida de los commits al repositorio en la nube (`origin/main`).
* **Protección de Archivos (`.gitignore`):** Configuración del filtro para ignorar empaquetados pesados de entrega (como `.zip`) o carpetas de configuración del entorno de desarrollo local, protegiendo el repositorio de basura técnica.
* **Documentación de Despliegue (`DEPLOYMENT_NOTES.md`):** Redacción de un documento técnico que describe paso a paso el plan de contingencia (copias de seguridad previas de Divi y Edwiser), el método de inyección de estilos y scripts en los paneles de control de producción, y el método de actualización centralizado de tokens de color corporativos.

---

## 8. Resultados Obtenidos y Conclusiones

Tras el desarrollo de las 60 horas de trabajo práctico, se han alcanzado los siguientes hitos:
1. **Unificación Visual:** Se logró dotar al ecosistema digital (WordPress y Moodle) de una interfaz moderna bajo la estética Bento Grid y Glassmorphism, sin modificar los archivos estructurales de los CMS.
2. **Entorno de Aprendizaje Dinámico:** Los prototipos programados en Vanilla JS demostraron una interactividad superior a las diapositivas estáticas utilizadas anteriormente, elevando la retención de conceptos del estudiante.
3. **Escalabilidad de Diseño:** Con la creación de `h5p-overrides.css`, cualquier docente de la asociación podrá crear nuevas actividades en el editor nativo de H5P y estas adoptarán automáticamente los colores y tipografías corporativas, garantizando la consistencia a largo plazo.

---

## 9. Propuestas de Mejora

A modo de evolución futura para los desarrolladores de la asociación, se proponen las siguientes líneas de trabajo:
* **Escalabilidad del Sistema de Diseño:** Si bien este proyecto ha establecido con éxito las reglas visuales prioritarias en el motor H5P, la migración integral de todas las páginas de WordPress Divi y el cuadro de mando Edwiser Moodle a esta arquitectura unificada se plantea como una fase futura de integración.
* **Migración a Web Components:** Encapsular las interacciones de Vanilla JS desarrolladas (como los hotspots o las tarjetas modales) en *Web Components* nativos e independientes para facilitar su reutilización en otros desarrollos futuros de la asociación sin dependencia de plantillas específicas.

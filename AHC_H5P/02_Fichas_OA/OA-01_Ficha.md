# Ficha documental — OA-01: Conceptos Climáticos Básicos

> **Coherencia verbo-formato (obligatoria):** El tipo **H5P.Dialogcards (Dialog Cards)** es un mazo de tarjetas de doble cara para repaso (anverso = pregunta, reverso = definición); permite recoger la evidencia de los verbos **Recordar / Comprender**, ya que el usuario gira cada tarjeta para reconocer y recordar la definición de los conceptos clave, que es exactamente la evidencia esperada.

---

## 1. Identificación

| Campo | Valor |
|---|---|
| Código OA | OA-01 |
| Título | Conceptos Climáticos Básicos |
| Tipo H5P | H5P.Dialogcards (Dialog Cards) — versión de librería 1.9 |
| Curso destino | Huella de Carbono Personal |
| Versión | 1.0.0 |
| Autor | Jaber Al Abbadi — Becario H5P |
| Revisor | Diseñador Instruccional — pendiente de validación |
| Fecha | 2026-06 |
| Estado | Validado / listo para Moodle (con incidencias menores documentadas en §8) |

---

## 2. Diseño pedagógico

| Campo | Valor |
|---|---|
| Público objetivo | Ciudadanía (nivel básico, sin conocimientos previos de clima) |
| Objetivo de aprendizaje | Que el usuario reconozca y recuerde los conceptos climáticos básicos (CO2e, Net Zero y Huella de Carbono) repasando el mazo de tarjetas. |
| Competencia | Alfabetización climática básica: comprensión del vocabulario fundamental para medir y reducir la huella de carbono. |
| Verbo observable (Bloom) | Recordar / Comprender |
| Evidencia observable | El usuario gira las 3 tarjetas del mazo y reconoce/recuerda la definición de CO2e, Net Zero y Huella de Carbono. |
| Duración estimada | 3–5 min (dentro del rango 3–10 min) |
| Prerequisitos | Ninguno. Es un OA de entrada / nivelación conceptual. |
| Momento de uso | Inicio del curso (activación de conocimientos previos y nivelación de vocabulario antes del desarrollo). |

---

## 3. Contenido

| Campo | Valor |
|---|---|
| Tema | Conceptos climáticos: CO2e, Net Zero (Cero Neto) y Huella de Carbono. |
| Mensaje clave | CO2e, Net Zero y Huella de Carbono son los tres conceptos base para entender cómo se mide y se reduce el impacto de los gases de efecto invernadero. |
| Pantallas / Preguntas | Mazo de tarjetas en modo `normal`. El `content.json` define **4 ranuras de tarjeta, de las cuales solo 3 tienen contenido** (la 4ª está vacía: anverso y reverso en blanco — ver incidencia en §8). Descripción de inicio del mazo: *"Gira las tarjetas para repasar los conceptos clave del cambio climático."* Las 3 tarjetas con contenido son: **(1)** «¿Qué significa CO2e?»; **(2)** «¿Qué es el Net Zero (Cero Neto)?»; **(3)** «¿Qué es la Huella de Carbono?». No contiene imágenes, audio ni pistas (tips). |
| Respuestas correctas (reverso real de cada tarjeta) | **(1) CO2e** → "Equivalente de Dióxido de Carbono. Es una métrica para comparar las emisiones de varios gases de efecto invernadero basada en su potencial de calentamiento global." · **(2) Net Zero** → "Lograr un equilibrio entre la cantidad de gases de efecto invernadero producidos y la cantidad eliminada de la atmósfera." · **(3) Huella de Carbono** → "El total de emisiones de gases de efecto invernadero causadas directa e indirectamente por las elecciones de un individuo o de una organización." |
| Feedback | No hay feedback evaluativo por ítem. Al ser modo `normal`, el reverso de la tarjeta actúa como retroalimentación (la definición correcta). El usuario puede autoevaluarse con el botón de reintento. No hay pistas (tips) configuradas. |
| Fuentes | Definiciones conceptuales estándar de divulgación climática (IPCC / glosarios de huella de carbono). Pendiente de citar fuente bibliográfica explícita por el revisor. |
| Licencia | Creative Commons CC BY-NC-SA 4.0. *Nota: el `h5p.json` del paquete trae el campo `license` como "U" (sin declarar); debe corregirse a CC BY-NC-SA 4.0 en metadatos — ver §8.* |

---

## 4. Configuración H5P

| Campo | Valor |
|---|---|
| Ajustes de comportamiento | Modo de tarjetas: `normal` (repaso por giro, sin rondas de puntuación). `disableBackwardsNavigation: false` (se puede navegar hacia atrás). `scaleTextNotCard: false`. `quickProgression: false`. `maxProficiency: 5`. |
| Reintentos | Sí — `enableRetry: true` (botón de reintento / volver a empezar disponible). |
| Puntuación | No. El modo `normal` de Dialog Cards no genera puntuación numérica; es repaso/autoevaluación. |
| Aleatorización | No — `randomCards: false` (las tarjetas se muestran siempre en el mismo orden). |
| Condiciones de finalización | Por interacción/visualización del mazo (recorrer las tarjetas). No hay umbral de aprobado al no existir puntuación. |
| Compatibilidad móvil | Sí. Dialog Cards es responsive y operable en táctil; embebido por iframe. |

---

## 5. Accesibilidad

| Campo | Valor |
|---|---|
| ALT en imágenes | N/A — el OA no contiene imágenes. |
| Subtítulos (VTT) | N/A — no contiene vídeo. |
| Transcripción | N/A — no contiene audio ni vídeo (todo el contenido es texto). |
| Contraste alto | Hereda el tema por defecto de H5P/Moodle (texto oscuro sobre tarjeta clara). Verificar contraste ≥ 4.5:1 en el tema de Moodle de destino. |
| No depender solo del color | Cumple: la información se transmite por texto; no hay códigos de color. |
| Lectura fácil | Definiciones breves y en lenguaje claro, adecuadas a público de Ciudadanía / nivel básico. |
| Operable por teclado | Sí — Dialog Cards permite girar y navegar con teclado (Tab/Enter). **Incidencia:** las etiquetas de los botones de navegación están en inglés (Turn/Next/Previous), lo que afecta a lectores de pantalla en español — ver §8. |
| Carga cognitiva baja | Sí — solo 3 conceptos, una idea por tarjeta, sin elementos distractores. |

---

## 6. Moodle

| Campo | Valor |
|---|---|
| Curso | Huella de Carbono Personal |
| Sección | Módulo 1 — Introducción / Conceptos básicos |
| Enlace | Pendiente de publicación (se generará al subir el .h5p al curso). |
| Visibilidad | Visible para estudiantes una vez publicado. |
| Calificación | No — actividad de repaso sin puntuación (modo `normal`). |
| Finalización | Condición: «ver/interactuar con la actividad» (recorrer las tarjetas). No usar condición de nota. |
| Banco de contenido | Almacenar en el Banco de contenido de Moodle (Content Bank) como `AHC_H5P_DialogCards_ConceptosClimaticos_Basico_HuellaCarbono_v1.0.0.h5p` para reutilización. |
| Etiquetas / Tags | `huella-carbono`, `conceptos-climaticos`, `CO2e`, `net-zero`, `basico`, `ciudadania`, `dialog-cards`, `OA-01` |

---

## 7. Reutilización

| Campo | Valor |
|---|---|
| Qué se puede adaptar | Texto de las tarjetas (preguntas y definiciones), el texto de descripción de inicio, el número de tarjetas, las etiquetas de UI (idioma) y las pistas (tips) si se desean añadir. |
| Qué NO debe cambiarse | El tipo de actividad (Dialog Cards) y el modo `normal`, que son los que garantizan la coherencia con el verbo Recordar/Comprender; tampoco el código OA-01 ni la definición conceptual validada de CO2e, Net Zero y Huella de Carbono (deben mantenerse alineadas con la fuente). |
| Variables / parámetros del OA | `mode` (normal), `dialogs[]` (texto/answer/tips por tarjeta), `behaviour.enableRetry`, `behaviour.randomCards`, `behaviour.disableBackwardsNavigation`, `behaviour.maxProficiency`, `description`. |
| Cursos compatibles | Cualquier curso AHC de sostenibilidad/clima de nivel introductorio (p. ej. «Huella de Carbono Corporativa», «Sostenibilidad para Ciudadanía»), siempre que se mantenga el nivel básico. |

---

## 8. QA y mejora

### Checklist de verificación
- [x] El paquete abre y carga como H5P.Dialogcards 1.9.
- [x] Las 3 tarjetas con contenido muestran pregunta (anverso) y definición (reverso) correctas.
- [x] El verbo Bloom (Recordar/Comprender) es coherente con el formato (Dialog Cards de repaso).
- [x] Reintento habilitado y navegación hacia atrás permitida.
- [x] Sin imágenes/audio/vídeo → sin requisitos de ALT/subtítulos/transcripción.
- [x] Compatible con móvil (responsive, iframe).
- [ ] **Pendiente:** eliminar la 4ª tarjeta vacía del `content.json`.
- [ ] **Pendiente:** traducir las etiquetas de UI al español (Turn/Next/Previous → Girar/Siguiente/Anterior) y fijar `language: es`.
- [ ] **Pendiente:** corregir el metadato de licencia del paquete (`license: "U"` → CC BY-NC-SA 4.0).
- [ ] **Pendiente:** validación final del Diseñador Instruccional y cita de fuente de las definiciones.

### Incidencias
1. **Tarjeta vacía:** el `content.json` declara 4 ranuras pero la 4ª tiene anverso y reverso en blanco; aparecerá como tarjeta vacía al usuario. Severidad media — debe eliminarse.
2. **Idioma de la interfaz:** `h5p.json` tiene `language: "en"` / `defaultLanguage: "en"` y las etiquetas de navegación están en inglés, pese a que el contenido es en español. Severidad media (afecta UX y accesibilidad por lector de pantalla).
3. **Licencia sin declarar:** campo `license` = "U" en el paquete; la licencia del proyecto es CC BY-NC-SA 4.0. Severidad baja (metadato).

### Métricas posteriores
Pendientes de uso real en Moodle: nº de visualizaciones, tasa de finalización (recorrido del mazo), tiempo medio de interacción y nº de reintentos. (No hay métrica de puntuación al ser modo `normal`.)

### Decisiones de versión
- **v1.0.0** — versión inicial del OA con 3 tarjetas de conceptos (CO2e, Net Zero, Huella de Carbono) en modo `normal`.
- Criterio de versionado semántico (MAJOR.MINOR.PATCH):
  - **MAJOR**: cambio de tipo de actividad, de objetivo de aprendizaje o de modelo de evaluación.
  - **MINOR**: añadir/quitar tarjetas o conceptos, añadir imágenes/pistas, cambiar el modo (p. ej. a `repetition` con puntuación).
  - **PATCH**: correcciones sin cambio pedagógico (eliminar la tarjeta vacía, traducir UI, corregir el metadato de licencia, erratas).

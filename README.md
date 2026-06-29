# Proyecto 7 — Web de contenido y elementos (Rediseño Digital AHC)

Prototipo y capa de **CSS/JS personalizado** para la web institucional (WordPress/Divi) y el Campus
(Moodle/Edwiser) de la Asociación Huella de Carbono, según el *Plan de Acción: Rediseño Digital 2026*.

> **No es una SPA React/Vite.** El plan exige explícitamente *"CSS y JS personalizado para superar las
> limitaciones de Divi y Edwiser"* (inyección de código), Vanilla JS + IntersectionObserver, Bento Box y
> Glassmorphism. El enfoque HTML/CSS/JS es el correcto para este encargo.

## Archivos
| Archivo | Función |
|:--|:--|
| `index.html` | Showcase del prototipo (Campus AHC, Bento grid, tarjetas, componentes interactivos). |
| `style.css` | Tokens de marca y estilos base de la web. |
| `custom-style.css` | Rediseño avanzado (Bento, glassmorphism, componentes interactivos, modales). |
| `custom-interactions.js` | IntersectionObserver para revelar elementos al hacer scroll. |
| `script.js` | Lógica de los componentes interactivos del prototipo. |
| `h5p-overrides.css` | Sobreescritura de estilos para unificar los H5P embebidos en Moodle/WordPress. |
| `DEPLOYMENT_NOTES.md` | Guía de inyección en Divi (Theme Options → Custom CSS / Integration) y Edwiser. |

## Homogeneización con EcoGestos (identidad AHC oficial)
Se alineó el diseño con la guía de marca AHC y con la web app EcoGestos (misma identidad que el chatbot),
para que **todas las entregas se vean idénticas en calidad y apariencia**:

| Elemento | Antes (Jaber) | Ahora (AHC/EcoGestos) |
|:--|:--|:--|
| Verde de marca | `#62a144` | **`#4F9447`** |
| Verde de acción (hover) | `#4d8235` | **`#2F6D36`** |
| Tinte verde claro | `#f0f7ed` | **`#EAF1E6`** |
| Texto / tinta | `#222222` / `#1e293b` | **`#222A1A`** |
| Texto apagado | `#666666` | **`#65705C`** |
| Fondo claro | `#f8fafc` | **`#F4F1E9`** (crema) |
| Bordes | `#e5e7eb` / `#f2f2f2` | **`#E1D7C0`** (cálido) |
| Acento prioridad alta | rojo `#cf2e2e` | **`#9B4D39`** (óxido) |
| Acento prioridad media | naranja `#ff6900` | **`#C9893F`** (ocre) |
| Tipografía títulos | Outfit | **Source Sans 3** |
| Tipografía cuerpo | Open Sans (Outfit no renderizaba) | **Nunito Sans** |

La estructura, componentes, Bento grid, glassmorphism e IntersectionObserver de Jaber **se conservan**
(estaban bien y cumplen el plan); solo se cambiaron los **tokens de color y las tipografías**.

## Despliegue
Ver `DEPLOYMENT_NOTES.md`: el CSS va a *Divi → Theme Options → Custom CSS* (y al Custom CSS de Edwiser RemUI),
y el JS a *Divi → Integration → body* (envuelto en `DOMContentLoaded`). `index.html` sirve como referencia
visual del resultado.

## Crédito
Prototipo y componentes: **Jaber Al Abbadi**. Homogeneización de identidad visual con la marca AHC/EcoGestos:
equipo AHC.

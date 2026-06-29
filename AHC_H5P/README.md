# Biblioteca de componentes H5P de formación — AHC

Biblioteca inicial de **Objetos de Aprendizaje (OA) H5P** reutilizables para el Campus de la Asociación
Huella de Carbono (AHC), lista para insertarse en Moodle. Reconstruida para cumplir **exactamente** los
requisitos del documento *"Biblioteca de componentes H5P de formación — Plan de trabajo"* (v1.0) y la
*Guía Curricular AHC*.

## Estado de cumplimiento

| Requisito del plan | Estado |
|:--|:--|
| Estructura oficial de carpetas (§4.1) | ✅ 8 carpetas `01_…`–`08_…` |
| Nomenclatura oficial `AHC_H5P_[Tipo]_[Tema]_[Nivel]_[Curso]_[vX.Y.Z]` (§4.2) | ✅ los 10 paquetes |
| 10 OA terminados y empaquetados (§1) | ✅ 10/10 `.h5p` válidos |
| Ficha documental de 8 bloques por OA (§4.3) | ✅ 10 fichas en `02_Fichas_OA/` |
| Catálogo documentado que coincide con los entregables | ✅ `01_Catalogo_general/Catalogo_H5P.md` |
| Checklist de calidad (§9) | ✅ `06_Revisiones_DI/Checklist_Calidad_QA.md` |
| Checklist de accesibilidad (Guía Curricular) | ✅ `06_Revisiones_DI/Checklist_Accesibilidad.md` |
| Guía de reutilización para docentes (§1) | ✅ `01_Catalogo_general/Guia_Reutilizacion_Docentes.md` |
| Licencia CC BY-NC-SA 4.0 | ✅ declarada en cada ficha |
| Mínimo 10 **tipos distintos** + gamificación (§1, §5) | ⚠️ 9 tipos distintos; falta gamificación → ver gap |
| Subida y piloto en Moodle (§8) | ⏳ requiere entorno Moodle real |

## Estructura
```text
01_Catalogo_general/   Catálogo, backlog y guía de reutilización
02_Fichas_OA/          10 fichas documentales (8 bloques c/u)
03_H5P_exportables/    10 paquetes .h5p finales (nomenclatura oficial)
04_Assets_imagen_audio_video/   Recursos fuente (pendiente de extraer)
05_Capturas_y_tutoriales/       Capturas (pendiente: tras piloto Moodle)
06_Revisiones_DI/      Checklists de calidad y accesibilidad
07_Publicado_Moodle/   Evidencia de publicación (pendiente: entorno Moodle)
08_Obsoleto_o_sustituido/       Archivado de artefactos retirados
```

## Qué se corrigió respecto a la versión original (huella7)
- **Tipo y título no coincidían**: el catálogo antiguo declaraba tipos H5P (Interactive Video, Branching
  Scenario, Memory Game…) que **no** eran los del `.h5p` real. El catálogo nuevo refleja el contenido real.
- **Nomenclatura**: los archivos eran `OA-XX_Nombre.h5p`; ahora siguen la convención oficial.
- **Fichas**: ninguna cubría los 8 bloques; ahora las 10 sí, con contenido extraído del propio `.h5p`.
- **Defectos de empaquetado**: 2 archivos tenían extensión rota (`.h5p.`), 1 no tenía extensión, y había
  duplicados; corregidos y consolidados los 10 en `03_H5P_exportables/`.
- **Estructura de carpetas**: ahora es la oficial del plan (antes mezclaba nombres no oficiales).

## Gap pendiente (no resoluble sin editor H5P)
Para cumplir el "mínimo 10 tipos distintos + gamificación", falta **producir 1+ OA de un tipo nuevo**
(Memory Game o Branching Scenario) en un editor H5P real (Moodle/Lumi). Ver `01_Catalogo_general/backlog.md`.

## Crédito
Contenido H5P original: **Jaber Al Abbadi** (becario). Reorganización, fichas y documentación conforme a
requisitos: equipo AHC. Licencia: CC BY-NC-SA 4.0.

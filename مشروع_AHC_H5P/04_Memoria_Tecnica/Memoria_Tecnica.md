# Memoria Técnica: Proyecto Educativo Interactivo "Asociación Huella de Carbono (AHC)"

## 1. Introducción y Objetivos

El presente documento constituye la Memoria Técnica del proyecto de desarrollo de recursos educativos digitales para la **Asociación Huella de Carbono (AHC)**. Este proyecto nace de la necesidad imperante de fomentar la concienciación y la alfabetización ambiental en la sociedad actual, abordando temáticas críticas como el cambio climático, la medición y mitigación de la huella de carbono, y los principios fundamentales de la sostenibilidad.

Para lograr este propósito, el proyecto se ha centrado en el diseño, desarrollo y despliegue de **10 Objetos de Aprendizaje (OA) interactivos**, empleando el estándar de código abierto **H5P** a través de la herramienta de autoría **Lumi**. La elección de esta tecnología se fundamenta en su alta interoperabilidad, su diseño responsivo y su capacidad para integrarse fluidamente en sistemas de gestión de aprendizaje (LMS) como Moodle.

El desarrollo de este proyecto persigue tres objetivos estratégicos fundamentales:
* **Educar:** Proporcionar información rigurosa, accesible y estructurada sobre conceptos climáticos y prácticas sostenibles, traduciendo datos científicos en conocimiento digerible para estudiantes y el público general.
* **Interactuar:** Superar las limitaciones del aprendizaje pasivo mediante la implementación de dinámicas gamificadas y exploratorias (ej. *Interactive Video*, *Drag and Drop*, *Dialog Cards*), garantizando un mayor índice de retención y *engagement* por parte del usuario final.
* **Evaluar:** Incorporar mecanismos de retroalimentación inmediata (*feedback*) y autoevaluación dentro de las propias actividades, permitiendo al usuario medir su nivel de comprensión en tiempo real y consolidar los aprendizajes adquiridos.

---

## 2. Organización y Distribución de Tareas

La ejecución del proyecto se ha llevado a cabo mediante un equipo de trabajo compuesto por dos desarrolladores/diseñadores instruccionales. Para garantizar la máxima eficiencia y la entrega continua de valor, se ha adoptado un enfoque basado en **metodologías ágiles**, permitiendo una adaptación iterativa y una revisión constante de cada uno de los Objetos de Aprendizaje.

La carga de trabajo se estructuró y dividió de manera equitativa, estableciendo roles complementarios que cubrieron todas las fases del ciclo de vida del desarrollo:
1. **Diseño Pedagógico y Estructuración:** Definición de los objetivos de aprendizaje, selección de los tipos de actividades H5P más adecuados según la competencia a evaluar, y redacción de los contenidos curriculares y el *feedback*.
2. **Desarrollo Técnico en Lumi:** Implementación práctica de las actividades, configuración de los parámetros de comportamiento, validación de la accesibilidad (WCAG 2.1 AA) y exportación de los paquetes funcionales `.h5p`.
3. **Documentación Técnica (Markdown):** Elaboración de las "Fichas Técnicas" detalladas para cada actividad, garantizando la trazabilidad, estandarización y facilidad de mantenimiento futuro.

### Infraestructura Colaborativa y Control de Versiones
Uno de los pilares técnicos fundamentales para el éxito de esta colaboración ha sido la implementación de un flujo de trabajo basado en **Git y GitHub**. Esta infraestructura ha proporcionado un entorno seguro y estructurado para el control de versiones, aportando los siguientes beneficios:
* **Trabajo asíncrono y sin conflictos:** El uso de ramas (*branches*) permitió a ambos miembros del equipo trabajar en distintas actividades y fichas documentales de forma simultánea, minimizando el riesgo de sobrescritura de código o pérdida de información.
* **Trazabilidad y Auditoría:** Cada avance (desarrollo de un nuevo OA o actualización documental) fue registrado mediante *commits* atómicos y descriptivos, manteniendo un historial claro de la evolución del proyecto.
* **Integración y Despliegue:** La sincronización constante con los repositorios remotos (orígenes `origin` y `official`) aseguró que el código base y los recursos empaquetados estuvieran siempre respaldados, centralizados y listos para su eventual despliegue en entornos de producción.

---

## 3. Desarrollo del Contenido Interactivo

La fase de desarrollo y autoría de los 10 Objetos de Aprendizaje (OA) se ejecutó íntegramente utilizando **Lumi**, una aplicación de escritorio *open-source* que permite crear, editar y visualizar contenido H5P sin necesidad de estar conectado a un LMS durante la fase de diseño. Esta herramienta facilitó un entorno de desarrollo ágil y local, permitiendo iteraciones rápidas y pruebas en tiempo real.

Para asegurar una cobertura didáctica integral y atender a diversos estilos de aprendizaje, se implementó una estrategia de diversificación técnica, empleando una amplia gama de componentes (tipos de contenido) H5P. Entre ellos destacan:
* **Interactive Video:** Para el análisis guiado de contenido multimedia.
* **Drag and Drop & Fill in the Blanks:** Para la evaluación formativa y el refuerzo de la memoria activa.
* **Dialog Cards:** Como herramienta de memorización y asimilación de vocabulario técnico.
* **Accordion:** Para la estructuración y síntesis de información densa.

Cada uno de los 10 OAs fue configurado bajo estrictos criterios de usabilidad y accesibilidad (alineados con las normativas WCAG 2.1 AA). Una vez validados, los recursos fueron exportados como archivos autónomos (paquetes `.h5p` *all-in-one*). Esta decisión arquitectónica es crucial, ya que empaqueta los metadatos, las bibliotecas de código (`.js`, `.css`) y los recursos multimedia en un único archivo comprimido, garantizando así su absoluta **portabilidad y compatibilidad** para ser desplegados sin dependencias externas en plataformas educativas como Moodle, WordPress o Canvas.

---

## 4. Documentación Pedagógica

Paralelamente al desarrollo técnico, se diseñó e implementó una estrategia robusta de documentación basada en la creación de **Fichas Técnicas** estandarizadas. Estas fichas fueron redactadas utilizando el lenguaje de marcado ligero **Markdown (`.md`)**, garantizando su legibilidad tanto para sistemas (parseo automatizado) como para seres humanos.

Se generó una Ficha Técnica individual por cada una de las 10 actividades desarrolladas. Estos documentos no son meras descripciones, sino que actúan como **metadatos estructurados** y formales que encapsulan la lógica instruccional del recurso. Cada ficha consolida campos críticos como:
* **Identificación y Propósito:** Código del OA, título, público objetivo y tipo de componente H5P.
* **Marco Competencial:** Objetivos de aprendizaje explícitos, competencias asociadas y verbos de acción observables (taxonomía de Bloom).
* **Parámetros de Evaluación:** Evidencias observables de aprendizaje, respuestas correctas y directrices de retroalimentación (*feedback*).
* **Metadatos Técnicos:** Licenciamiento (CC BY-NC-SA 4.0), duración estimada, directrices de accesibilidad y parámetros de configuración recomendados para su ingesta en el LMS (calificación y rastreo de finalización).

En definitiva, esta arquitectura documental sirve como el **puente indispensable entre el diseño pedagógico y el despliegue técnico**, asegurando que cualquier administrador de sistemas o docente futuro comprenda la intencionalidad exacta de la actividad antes de su publicación, facilitando enormemente la mantenibilidad y escalabilidad del proyecto.

---

## 5. Resultados y Conclusiones

El balance general del proyecto es altamente satisfactorio, habiéndose cumplido íntegramente los objetivos planteados desde su concepción. Se ha logrado consolidar un repositorio estructurado compuesto por **10 Objetos de Aprendizaje (OA) interactivos** listos para su despliegue y uso inmediato. Este ecosistema de recursos cumple con el propósito central de concienciar y formar a estudiantes y público general sobre la huella de carbono y la sostenibilidad ambiental.

El éxito técnico del proyecto radica en la sinergia de las metodologías y herramientas utilizadas. Por un lado, el uso de **H5P** (tecnología abierta y estándar *de facto* en educación digital) ha permitido la creación de contenido rico e interactivo sin depender de plataformas propietarias cerradas. Por otro lado, la integración de **Git y GitHub** como infraestructura de control de versiones y trabajo colaborativo ha demostrado ser una metodología óptima, resultando en un flujo de trabajo altamente eficiente, libre de conflictos de integración y fácilmente escalable para futuros colaboradores.

---

## 6. Trabajo Futuro y Recomendaciones

Si bien el repositorio actual constituye una base sólida y funcional, el carácter modular del proyecto permite vislumbrar diversas vías de evolución y mejora continua. Se sugieren los siguientes próximos pasos para maximizar el alcance y la eficacia de los recursos desarrollados:

1. **Integración y Despliegue en LMS:** Proceder con la importación estructurada de los paquetes `.h5p` a una plataforma de e-learning formal (preferentemente **Moodle**). Esto requerirá la configuración de los libros de calificaciones (*gradebooks*) y las condiciones de finalización para asegurar el seguimiento adecuado del progreso de los estudiantes.
2. **Implementación de Analíticas de Aprendizaje (Learning Analytics):** Explorar la integración de un *Learning Record Store* (LRS) mediante el estándar **xAPI** (soportado nativamente por H5P). Esto permitirá recopilar datos granulares sobre la interacción de los usuarios con cada actividad, facilitando la toma de decisiones basadas en datos para optimizar futuras versiones del contenido.
3. **Expansión y Adaptación del Repositorio:** Diseñar nuevas actividades y adaptar las existentes para cubrir diferentes niveles de complejidad cognitiva y distintos rangos de edad (por ejemplo, versiones simplificadas para educación primaria o versiones con mayor rigor técnico para educación superior).
4. **Traducción y Localización:** Aprovechar la flexibilidad estructural de las Fichas Técnicas en Markdown y de los propios paquetes H5P para iniciar un proceso de traducción (ej. al inglés o al catalán), ampliando así el impacto demográfico del proyecto de concienciación climática de la Asociación Huella de Carbono.

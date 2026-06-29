// Global language state
let currentLanguage = 'es';

document.addEventListener("DOMContentLoaded", () => {
    // -------------------------------------------------------------
    // 1. INTERSECTION OBSERVER FOR FADE-IN-UP CARDS
    // -------------------------------------------------------------
    const courseCards = document.querySelectorAll('.course-card');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const cardObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    courseCards.forEach(card => {
        cardObserver.observe(card);
    });

    // Initialize default language
    setLanguage('es');
});

// -------------------------------------------------------------
// 2. DICTIONARIES & TRANSLATIONS
// -------------------------------------------------------------
const translations = {
    es: {
        pageTitle: "Campus AHC - Plataforma de Aprendizaje Interactivo",
        navDashboard: "Panel de Control",
        navBacklog: "Backlog",
        heroTitle: "Plataforma de Excelencia Ambiental",
        heroSubtitle: "Desarrollo de objetos de aprendizaje interactivos H5P para el cálculo de la huella de carbono y concienciación climática de la Asociación Huella de Carbono (AHC).",
        activeOasTitle: "Objetos de Aprendizaje Activos (OAs)",
        backlogSectionTitle: "Mapa de la Biblioteca y Lista de Tareas (H5P Backlog)",
        thCode: "Código",
        thTopic: "Tema",
        thGoal: "Objetivo / Acción",
        thType: "Tipo H5P Sugerido",
        thPriority: "Prioridad",
        thStatus: "Estado",
        
        // Cards
        cardTag01: "OA-01 | Alta",
        cardTitle01: "Conceptos Climáticos Básicos",
        cardInst01: "Instructor: Dra. Anya Sharma",
        cardDesc01: "Conceptos de calentamiento global, huella de carbono y Net Zero mediante tarjetas didácticas (Dialog Cards).",
        cardProgLbl01: "Progreso del desarrollo",
        cardBtn01: "Ver detalles",

        cardTag02: "OA-02 | Alta",
        cardTitle02: "Alcances de Emisiones (1, 2, 3)",
        cardInst02: "Instructor: Asociación AHC",
        cardDesc02: "Clasificación de fuentes de emisiones directas e indirectas para organizaciones usando arrastrar y soltar (Drag and Drop).",
        cardProgLbl02: "Progreso del desarrollo",
        cardBtn02: "Ver ficha",

        cardTag03: "OA-03 | Alta",
        cardTitle03: "Calculadora de Huella de Carbono",
        cardInst03: "Instructor: Equipo de Desarrollo Técnico",
        cardDesc03: "Video interactivo que detalla los pasos para usar e ingresar datos en la calculadora corporativa.",
        cardProgLbl03: "Progreso del desarrollo",
        cardBtn03: "Ver ficha",

        cardTag04: "OA-04 | Alta",
        cardTitle04: "Emisiones Ocultas en el Hogar",
        cardInst04: "Instructor: Ing. Khaled Al-Mansouri",
        cardDesc04: "Exploración de fuentes de desperdicio de energía y emisiones en el hogar mediante puntos calientes (Image Hotspots).",
        cardProgLbl04: "Progreso del desarrollo",
        cardBtn04: "Ver detalles",

        cardTag05: "OA-05 | Alta",
        cardTitle05: "Mitos y Realidades del Clima",
        cardInst05: "Instructor: Asociación AHC",
        cardDesc05: "Juzga si una afirmación común sobre el cambio climático es un mito o una realidad (Verdadero/Falso).",
        cardProgLbl05: "Progreso del desarrollo",
        cardBtn05: "Ver ficha",

        cardTag06: "OA-06 | Alta",
        cardTitle06: "Glosario Climático",
        cardInst06: "Instructor: Equipo de Desarrollo Técnico",
        cardDesc06: "Repasa el vocabulario climático básico (Huella, GEI, Neutralidad) girando tarjetas didácticas (Dialog Cards).",
        cardProgLbl06: "Progreso del desarrollo",
        cardBtn06: "Ver detalles",

        cardTag07: "OA-07 | Alta",
        cardTitle07: "Identificación de Energías Renovables",
        cardInst07: "Instructor: Asociación AHC",
        cardDesc07: "Identifica las fuentes de energía renovable haciendo clic sobre ellas (Find the Hotspot).",
        cardProgLbl07: "Progreso del desarrollo",
        cardBtn07: "Ver ficha",

        cardTag08: "OA-08 | Alta",
        cardTitle08: "Mitigación vs Adaptación",
        cardInst08: "Instructor: Dra. Anya Sharma",
        cardDesc08: "Distingue mitigación de adaptación completando el texto al arrastrar las palabras (Drag the Words).",
        cardProgLbl08: "Progreso del desarrollo",
        cardBtn08: "Ver ficha",

        cardTag09: "OA-09 | Alta",
        cardTitle09: "Beneficios de la Acción Climática",
        cardInst09: "Instructor: Asociación AHC",
        cardDesc09: "Consulta los beneficios ambientales, económicos y de salud de la acción climática (Accordion).",
        cardProgLbl09: "Progreso del desarrollo",
        cardBtn09: "Ver detalles",

        cardTag10: "OA-10 | Alta",
        cardTitle10: "Evaluación Final Integrada",
        cardInst10: "Instructor: Equipo de Desarrollo Técnico",
        cardDesc10: "Demuestra lo aprendido en la evaluación final integrada de 2 preguntas (Question Set).",
        cardProgLbl10: "Progreso del desarrollo",
        cardBtn10: "Ver ficha"
    },
    ca: {
        pageTitle: "Campus AHC - Plataforma d'Aprenentatge Interactiu",
        navDashboard: "Taulell de Control",
        navBacklog: "Backlog",
        heroTitle: "Plataforma d'Excel·lència Ambiental",
        heroSubtitle: "Desenvolupament d'objectes d'aprenentatge interactius H5P per al càlcul de la petjada de carboni i conscienciació climàtica de l'Associació Petjada de Carboni (AHC).",
        activeOasTitle: "Objectes d'Aprenentatge Actius (OAs)",
        backlogSectionTitle: "Mapa de la Biblioteca i Llista de Tasques (H5P Backlog)",
        thCode: "Codi",
        thTopic: "Tema",
        thGoal: "Objectiu / Acció",
        thType: "Tipus H5P Proposat",
        thPriority: "Prioritat",
        thStatus: "Estat",
        
        // Cards
        cardTag01: "OA-01 | Alta",
        cardTitle01: "Conceptes Climàtics Bàsics",
        cardInst01: "Instructor: Dra. Anya Sharma",
        cardDesc01: "Conceptes d'escalfament global, petjada de carboni i Net Zero mitjançant targetes didàctiques (Dialog Cards).",
        cardProgLbl01: "Progrés del desenvolupament",
        cardBtn01: "Veure detalls",

        cardTag02: "OA-02 | Alta",
        cardTitle02: "Abasts d'Emissions (1, 2, 3)",
        cardInst02: "Instructor: Associació AHC",
        cardDesc02: "Classificació de fonts d'emissions directes i indirectes per a organitzacions mitjançant arrossegar i deixar anar (Drag and Drop).",
        cardProgLbl02: "Progrés del desenvolupament",
        cardBtn02: "Veure fitxa",

        cardTag03: "OA-03 | Alta",
        cardTitle03: "Calculadora de Petjada de Carboni",
        cardInst03: "Instructor: Equip de Desenvolupament Tècnic",
        cardDesc03: "Vídeo interactiu que detalla els passos per utilitzar i introduir dades a la calculadora corporativa.",
        cardProgLbl03: "Progrés del desenvolupament",
        cardBtn03: "Veure fitxa",

        cardTag04: "OA-04 | Alta",
        cardTitle04: "Emissions Ocultes a la Llar",
        cardInst04: "Instructor: Eng. Khaled Al-Mansouri",
        cardDesc04: "Exploració de fonts de malbaratament d'energia i emissions a la llar mitjançant punts calents (Image Hotspots).",
        cardProgLbl04: "Progrés del desenvolupament",
        cardBtn04: "Veure detalls",

        cardTag05: "OA-05 | Alta",
        cardTitle05: "Mites i Realitats del Clima",
        cardInst05: "Instructor: Associació AHC",
        cardDesc05: "Jutja si una afirmació comuna sobre el canvi climàtic és un mite o una realitat (Vertader/Fals).",
        cardProgLbl05: "Progrés del desenvolupament",
        cardBtn05: "Veure fitxa",

        cardTag06: "OA-06 | Alta",
        cardTitle06: "Glossari Climàtic",
        cardInst06: "Instructor: Equip de Desenvolupament Tècnic",
        cardDesc06: "Repassa el vocabulari climàtic bàsic (Petjada, GEH, Neutralitat) girant targetes didàctiques (Dialog Cards).",
        cardProgLbl06: "Progrés del desenvolupament",
        cardBtn06: "Veure detalls",

        cardTag07: "OA-07 | Alta",
        cardTitle07: "Identificació d'Energies Renovables",
        cardInst07: "Instructor: Associació AHC",
        cardDesc07: "Identifica les fonts d'energia renovable fent clic sobre elles (Find the Hotspot).",
        cardProgLbl07: "Progrés del desenvolupament",
        cardBtn07: "Veure fitxa",

        cardTag08: "OA-08 | Alta",
        cardTitle08: "Mitigació vs Adaptació",
        cardInst08: "Instructor: Dra. Anya Sharma",
        cardDesc08: "Distingeix mitigació d'adaptació completant el text arrossegant les paraules (Drag the Words).",
        cardProgLbl08: "Progrés del desenvolupament",
        cardBtn08: "Veure fitxa",

        cardTag09: "OA-09 | Alta",
        cardTitle09: "Beneficis de l'Acció Climàtica",
        cardInst09: "Instructor: Associació AHC",
        cardDesc09: "Consulta els beneficis ambientals, econòmics i de salut de l'acció climàtica (Accordion).",
        cardProgLbl09: "Progrés del desenvolupament",
        cardBtn09: "Veure detalls",

        cardTag10: "OA-10 | Alta",
        cardTitle10: "Avaluació Final Integrada",
        cardInst10: "Instructor: Equip de Desenvolupament Tècnic",
        cardDesc10: "Demostra el que has après en l'avaluació final integrada de 2 preguntes (Question Set).",
        cardProgLbl10: "Progrés del desenvolupament",
        cardBtn10: "Veure fitxa"
    }
};

// Estado real de la Biblioteca H5P AHC (proyecto 6): 10 OA terminados y
// empaquetados (v1.0.0, CC BY-NC-SA 4.0). Fuente: 01_Catalogo_general/Catalogo_H5P.md.
const backlogData = [
    {
        code: "OA-01",
        h5p: "Dialog Cards",
        priority: { es: "🔴 Alta", ca: "🔴 Alta" },
        status: { es: "✅ Terminado", ca: "✅ Acabat" },
        class: "status-ready",
        rowClass: "highlight-row",
        topic: {
            es: "Conceptos Climáticos (CO2e, Net Zero)",
            ca: "Conceptes Climàtics (CO2e, Net Zero)"
        },
        goal: {
            es: "Recordar 3 conceptos clave",
            ca: "Recordar 3 conceptes clau"
        }
    },
    {
        code: "OA-02",
        h5p: "Drag and Drop",
        priority: { es: "🔴 Alta", ca: "🔴 Alta" },
        status: { es: "✅ Terminado", ca: "✅ Acabat" },
        class: "status-ready",
        rowClass: "highlight-row",
        topic: {
            es: "Alcances de Emisiones (1, 2, 3)",
            ca: "Abasts d'Emissions (1, 2, 3)"
        },
        goal: {
            es: "Clasificar 6 fuentes por alcance",
            ca: "Classificar 6 fonts per abast"
        }
    },
    {
        code: "OA-03",
        h5p: "Fill in the Blanks",
        priority: { es: "🔴 Alta", ca: "🔴 Alta" },
        status: { es: "✅ Terminado", ca: "✅ Acabat" },
        class: "status-ready",
        rowClass: "highlight-row",
        topic: {
            es: "Conceptos de Sostenibilidad",
            ca: "Conceptes de Sostenibilitat"
        },
        goal: {
            es: "Completar 3 términos clave",
            ca: "Completar 3 termes clau"
        }
    },
    {
        code: "OA-04",
        h5p: "Image Hotspots",
        priority: { es: "🔴 Alta", ca: "🔴 Alta" },
        status: { es: "✅ Terminado", ca: "✅ Acabat" },
        class: "status-ready",
        rowClass: "highlight-row",
        topic: {
            es: "Emisiones Ocultas en el Hogar",
            ca: "Emissions Ocultes a la Llar"
        },
        goal: {
            es: "Explorar 5 focos de emisión",
            ca: "Explorar 5 focus d'emissió"
        }
    },
    {
        code: "OA-05",
        h5p: "True/False",
        priority: { es: "🔴 Alta", ca: "🔴 Alta" },
        status: { es: "✅ Terminado", ca: "✅ Acabat" },
        class: "status-ready",
        rowClass: "highlight-row",
        topic: {
            es: "Mitos y Realidades del Clima",
            ca: "Mites i Realitats del Clima"
        },
        goal: {
            es: "Discriminar mito de realidad",
            ca: "Discriminar mite de realitat"
        }
    },
    {
        code: "OA-06",
        h5p: "Dialog Cards",
        priority: { es: "🔴 Alta", ca: "🔴 Alta" },
        status: { es: "✅ Terminado", ca: "✅ Acabat" },
        class: "status-ready",
        rowClass: "highlight-row",
        topic: {
            es: "Glosario Climático",
            ca: "Glossari Climàtic"
        },
        goal: {
            es: "Repasar el glosario (Huella, GEI)",
            ca: "Repassar el glossari (Petjada, GEH)"
        }
    },
    {
        code: "OA-07",
        h5p: "Find the Hotspot",
        priority: { es: "🔴 Alta", ca: "🔴 Alta" },
        status: { es: "✅ Terminado", ca: "✅ Acabat" },
        class: "status-ready",
        rowClass: "highlight-row",
        topic: {
            es: "Energías Renovables",
            ca: "Energies Renovables"
        },
        goal: {
            es: "Identificar fuentes renovables",
            ca: "Identificar fonts renovables"
        }
    },
    {
        code: "OA-08",
        h5p: "Drag the Words",
        priority: { es: "🔴 Alta", ca: "🔴 Alta" },
        status: { es: "✅ Terminado", ca: "✅ Acabat" },
        class: "status-ready",
        rowClass: "highlight-row",
        topic: {
            es: "Mitigación vs Adaptación",
            ca: "Mitigació vs Adaptació"
        },
        goal: {
            es: "Distinguir mitigación de adaptación",
            ca: "Distingir mitigació d'adaptació"
        }
    },
    {
        code: "OA-09",
        h5p: "Accordion",
        priority: { es: "🔴 Alta", ca: "🔴 Alta" },
        status: { es: "✅ Terminado", ca: "✅ Acabat" },
        class: "status-ready",
        rowClass: "highlight-row",
        topic: {
            es: "Beneficios de la Acción Climática",
            ca: "Beneficis de l'Acció Climàtica"
        },
        goal: {
            es: "Consultar 3 beneficios clave",
            ca: "Consultar 3 beneficis clau"
        }
    },
    {
        code: "OA-10",
        h5p: "Question Set",
        priority: { es: "🔴 Alta", ca: "🔴 Alta" },
        status: { es: "✅ Terminado", ca: "✅ Acabat" },
        class: "status-ready",
        rowClass: "highlight-row",
        topic: {
            es: "Evaluación Final Integrada",
            ca: "Avaluació Final Integrada"
        },
        goal: {
            es: "Evaluar (cuestionario final ≥50%)",
            ca: "Avaluar (qüestionari final ≥50%)"
        }
    }
];

// -------------------------------------------------------------
// 3. SET LANGUAGE FUNCTION
// -------------------------------------------------------------
function setLanguage(lang) {
    currentLanguage = lang;
    
    // Toggle active buttons + sync accessible pressed state
    const btnEs = document.getElementById('btn-lang-es');
    const btnCa = document.getElementById('btn-lang-ca');
    btnEs.classList.toggle('active', lang === 'es');
    btnCa.classList.toggle('active', lang === 'ca');
    btnEs.setAttribute('aria-pressed', String(lang === 'es'));
    btnCa.setAttribute('aria-pressed', String(lang === 'ca'));

    // Update HTML attributes
    document.documentElement.setAttribute('lang', lang);
    
    // Translate static strings
    const t = translations[lang];
    document.getElementById('page-title').textContent = t.pageTitle;
    document.getElementById('nav-dashboard').textContent = t.navDashboard;
    document.getElementById('nav-backlog').textContent = t.navBacklog;
    document.getElementById('hero-title').textContent = t.heroTitle;
    document.getElementById('hero-subtitle').textContent = t.heroSubtitle;
    document.getElementById('active-oas-title').textContent = t.activeOasTitle;
    document.getElementById('backlog-section-title').textContent = t.backlogSectionTitle;
    
    // Table Headers
    document.getElementById('th-code').textContent = t.thCode;
    document.getElementById('th-topic').textContent = t.thTopic;
    document.getElementById('th-goal').textContent = t.thGoal;
    document.getElementById('th-type').textContent = t.thType;
    document.getElementById('th-priority').textContent = t.thPriority;
    document.getElementById('th-status').textContent = t.thStatus;

    // Card 1
    document.getElementById('card-tag-01').textContent = t.cardTag01;
    document.getElementById('card-title-01').textContent = t.cardTitle01;
    document.getElementById('card-inst-01').textContent = t.cardInst01;
    document.getElementById('card-desc-01').textContent = t.cardDesc01;
    document.getElementById('card-prog-lbl-01').textContent = t.cardProgLbl01;
    document.getElementById('card-btn-01').textContent = t.cardBtn01;

    // Card 2
    document.getElementById('card-tag-02').textContent = t.cardTag02;
    document.getElementById('card-title-02').textContent = t.cardTitle02;
    document.getElementById('card-inst-02').textContent = t.cardInst02;
    document.getElementById('card-desc-02').textContent = t.cardDesc02;
    document.getElementById('card-prog-lbl-02').textContent = t.cardProgLbl02;
    document.getElementById('card-btn-02').textContent = t.cardBtn02;

    // Card 3
    document.getElementById('card-tag-03').textContent = t.cardTag03;
    document.getElementById('card-title-03').textContent = t.cardTitle03;
    document.getElementById('card-inst-03').textContent = t.cardInst03;
    document.getElementById('card-desc-03').textContent = t.cardDesc03;
    document.getElementById('card-prog-lbl-03').textContent = t.cardProgLbl03;
    document.getElementById('card-btn-03').textContent = t.cardBtn03;

    // Card 4
    document.getElementById('card-tag-04').textContent = t.cardTag04;
    document.getElementById('card-title-04').textContent = t.cardTitle04;
    document.getElementById('card-inst-04').textContent = t.cardInst04;
    document.getElementById('card-desc-04').textContent = t.cardDesc04;
    document.getElementById('card-prog-lbl-04').textContent = t.cardProgLbl04;
    document.getElementById('card-btn-04').textContent = t.cardBtn04;

    // Cards 05–10 (data-driven para evitar 36 líneas repetidas)
    for (let i = 5; i <= 10; i++) {
        const n = String(i).padStart(2, '0');
        const set = (id, key) => {
            const el = document.getElementById(id);
            if (el && t[key] !== undefined) el.textContent = t[key];
        };
        set(`card-tag-${n}`, `cardTag${n}`);
        set(`card-title-${n}`, `cardTitle${n}`);
        set(`card-inst-${n}`, `cardInst${n}`);
        set(`card-desc-${n}`, `cardDesc${n}`);
        set(`card-prog-lbl-${n}`, `cardProgLbl${n}`);
        set(`card-btn-${n}`, `cardBtn${n}`);
    }

    // Render Backlog Table Row Content
    renderBacklogTable(lang);
}

function renderBacklogTable(lang) {
    const tbody = document.getElementById('backlog-table-body');
    tbody.innerHTML = '';
    
    backlogData.forEach(row => {
        const tr = document.createElement('tr');
        if (row.rowClass) {
            tr.className = row.rowClass;
        }
        
        tr.innerHTML = `
            <td><strong>${row.code}</strong></td>
            <td>${row.topic[lang]}</td>
            <td>${row.goal[lang]}</td>
            <td><span class="badge-type">${row.h5p}</span></td>
            <td><span class="priority">${row.priority[lang]}</span></td>
            <td><span class="status ${row.class}">${row.status[lang]}</span></td>
        `;
        tbody.appendChild(tr);
    });
}

// -------------------------------------------------------------
// 4. DYNAMIC FICHA DOCUMENTAL MODAL IN ES & CA
// -------------------------------------------------------------
const fichasData = {
    'es': {
        'OA-01': {
            code: 'AHC_H5P_DialogCards_Conceptos_v1.0',
            title: 'Conceptos Climáticos Básicos (CO2e, Net Zero)',
            type: 'Tarjetas Didácticas (Dialog Cards)',
            body: `
                <h4>Información de la Ficha Técnica:</h4>
                <ul>
                    <li><strong>Objetivo:</strong> Recordar los conceptos clave del cambio climático y la neutralidad de carbono.</li>
                    <li><strong>Público Objetivo:</strong> Todos los estudiantes y nuevos voluntarios.</li>
                    <li><strong>Duración Estimada:</strong> 3 a 5 minutos.</li>
                </ul>
                <h4>Contenido Científico de las Tarjetas:</h4>
                <table>
                    <thead>
                        <tr>
                            <th>Cara 1 (Pregunta/Término)</th>
                            <th>Cara 2 (Respuesta/Definición)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>¿Qué significa CO2e?</td>
                            <td>Equivalente de Dióxido de Carbono (Carbon Dioxide Equivalent). Es una métrica para comparar las emisiones de varios gases de efecto invernadero basada en su potencial de calentamiento global.</td>
                        </tr>
                        <tr>
                            <td>¿Qué es el Net Zero (Cero Neto)?</td>
                            <td>Lograr un equilibrio entre la cantidad de gases de efecto invernadero producidos y la cantidad eliminada de la atmósfera.</td>
                        </tr>
                        <tr>
                            <td>¿Qué es la Huella de Carbono?</td>
                            <td>El total de emisiones de gases de efecto invernadero causadas directa e indirectamente por las elecciones de un individuo o de una organización.</td>
                        </tr>
                    </tbody>
                </table>
            `
        },
        'OA-02': {
            code: 'AHC_H5P_DragDrop_Alcances_v1.0',
            title: 'Alcances de Emisiones (Scope 1, 2, 3)',
            type: 'Arrastrar y soltar (Drag and Drop)',
            body: `
                <h4>Información de la Ficha Técnica:</h4>
                <ul>
                    <li><strong>Objetivo:</strong> Clasificar las fuentes de emisiones según el alcance correcto.</li>
                    <li><strong>Elementos Arrastrables:</strong> 6 elementos de texto interactivos.</li>
                    <li><strong>Zonas de Destino:</strong> 3 zonas (Alcance 1, Alcance 2, Alcance 3).</li>
                </ul>
                <h4>Distribución Correcta de los Elementos:</h4>
                <table>
                    <thead>
                        <tr>
                            <th>Elemento a Arrastrar</th>
                            <th>Alcance Correcto (Zona de Destino)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Vehículos de la empresa (combustión)</td>
                            <td>Alcance 1 (Scope 1) - Emisiones directas</td>
                        </tr>
                        <tr>
                            <td>Factura de electricidad de la sede central</td>
                            <td>Alcance 2 (Scope 2) - Emisiones indirectas (energía comprada)</td>
                        </tr>
                        <tr>
                            <td>Vuelos de negocios de empleados</td>
                            <td>Alcance 3 (Scope 3) - Cadena de valor</td>
                        </tr>
                        <tr>
                            <td>Residuos de papel y plástico de la oficina</td>
                            <td>Alcance 3 (Scope 3) - Cadena de valor</td>
                        </tr>
                        <tr>
                            <td>Gas natural para la calefacción del edificio</td>
                            <td>Alcance 1 (Scope 1) - Emisiones directas</td>
                        </tr>
                        <tr>
                            <td>Compra de ordenadores nuevos para el personal</td>
                            <td>Alcance 3 (Scope 3) - Cadena de valor</td>
                        </tr>
                    </tbody>
                </table>
            `
        },
        'OA-03': {
            code: 'AHC_H5P_InteractiveVideo_Calculadora_v1.0',
            title: 'Calculadora de Huella de Carbono Corporativa',
            type: 'Vídeo Interactivo (Interactive Video)',
            body: `
                <h4>Información de la Ficha Técnica:</h4>
                <ul>
                    <li><strong>Objetivo:</strong> Aplicar los pasos de entrada de datos en la calculadora de la Asociación.</li>
                    <li><strong>Duración:</strong> 7 a 10 minutos.</li>
                    <li><strong>Puntos de Control Obligatorios:</strong> 3 paradas de interacción interactiva con redireccionamiento inteligente.</li>
                </ul>
                <h4>Puntos de Interacción y Paradas:</h4>
                <ol>
                    <li><strong>Min 02:15:</strong> Pregunta sobre consumo eléctrico (Respuesta correcta: Alcance 2). Si se falla, se retrocede al Min 01:30.</li>
                    <li><strong>Min 04:30:</strong> Pregunta verdadero/falso sobre combustible (Respuesta correcta: Falso, es de Alcance 3). Si se falla, se retrocede al Min 03:45.</li>
                    <li><strong>Min 06:45:</strong> Rellenar hueco sobre viajes corporativos (Respuesta correcta: Alcance 3).</li>
                </ol>
            `
        },
        'OA-04': {
            code: 'AHC_H5P_ImageHotspots_Casa_v1.0',
            title: 'Emisiones Ocultas en el Hogar (EcoGestos)',
            type: 'Puntos Calientes (Image Hotspots)',
            body: `
                <h4>Información de la Ficha Técnica:</h4>
                <ul>
                    <li><strong>Objetivo:</strong> Explorar las fuentes de desperdicio de energía y emisiones en el hogar y definir comportamientos de ahorro.</li>
                    <li><strong>Recurso Base:</strong> Plano interactivo de la casa con puntos de información interactivos.</li>
                </ul>
                <h4>Puntos Calientes y Textos de Concienciación (EcoGestos):</h4>
                <ol>
                    <li><strong>Nevera:</strong> Los frigoríficos antiguos consumen el doble de energía que los modernos. Reemplázalos por modelos eficientes y limpia sus bobinas regularmente.</li>
                    <li><strong>Aire Acondicionado:</strong> Bajar el aire acondicionado de 24°C aumenta el consumo eléctrico un 8%. Ajústalo a 24°C y limpia los filtros mensualmente.</li>
                    <li><strong>Modo Espera (Vampiro):</strong> Los aparatos en modo de espera consumen un 10% de electricidad inútilmente. Usa regletas inteligentes y apágalos por completo.</li>
                    <li><strong>Iluminación:</strong> Las bombillas tradicionales pierden el 90% de energía en forma de calor. Reemplázalas por luces LED, que ahorran un 80%.</li>
                    <li><strong>Lavadora:</strong> Calentar agua consume el 90% de la energía de la lavadora. Lava la ropa a 30°C para ahorrar electricidad.</li>
                </ol>
            `
        },
        'OA-05': {
            code: 'AHC_H5P_TrueFalse_MitosClima_v1.0',
            title: 'Mitos y Realidades del Clima',
            type: 'Verdadero / Falso (True/False)'
        },
        'OA-06': {
            code: 'AHC_H5P_DialogCards_Glosario_v1.0',
            title: 'Glosario Climático',
            type: 'Tarjetas Didácticas (Dialog Cards)'
        },
        'OA-07': {
            code: 'AHC_H5P_FindHotspot_EnergiasRenovables_v1.0',
            title: 'Identificación de Energías Renovables',
            type: 'Encuentra el Punto (Find the Hotspot)'
        },
        'OA-08': {
            code: 'AHC_H5P_DragText_MitigacionAdaptacion_v1.0',
            title: 'Estrategias: Mitigación vs Adaptación',
            type: 'Arrastrar las Palabras (Drag the Words)'
        },
        'OA-09': {
            code: 'AHC_H5P_Accordion_BeneficiosClima_v1.0',
            title: 'Beneficios de la Acción Climática',
            type: 'Acordeón (Accordion)'
        },
        'OA-10': {
            code: 'AHC_H5P_QuestionSet_EvaluacionFinal_v1.0',
            title: 'Cuestionario de Evaluación Final',
            type: 'Batería de Preguntas (Question Set)'
        }
    },
    'ca': {
        'OA-01': {
            code: 'AHC_H5P_DialogCards_Conceptos_v1.0',
            title: 'Conceptes Climàtics Bàsics (CO2e, Net Zero)',
            type: 'Targetes Didàctiques (Dialog Cards)',
            body: `
                <h4>Informació de la Fitxa Tècnica:</h4>
                <ul>
                    <li><strong>Objectiu:</strong> Recordar els conceptes clau del canvi climàtic i la neutralitat de carboni.</li>
                    <li><strong>Públic Objectiu:</strong> Tots els estudiants i nous voluntaris.</li>
                    <li><strong>Durada Estimada:</strong> 3 a 5 minuts.</li>
                </ul>
                <h4>Contingut Científic de les Targetes:</h4>
                <table>
                    <thead>
                        <tr>
                            <th>Cara 1 (Pregunta/Terme)</th>
                            <th>Cara 2 (Resposta/Definició)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Què significa CO2e?</td>
                            <td>Equivalent de Diòxid de Carboni (Carbon Dioxide Equivalent). És una mètrica per comparar les emissions de diversos gasos d'efecte hivernacle basada en el seu potencial d'escalfament global.</td>
                        </tr>
                        <tr>
                            <td>Què és el Net Zero (Zero Net)?</td>
                            <td>Aconseguir un equilibri entre la quantitat de gasos d'efecte hivernacle produïts i la quantitat eliminada de l'atmosfera.</td>
                        </tr>
                        <tr>
                            <td>Què és la Petjada de Carboni?</td>
                            <td>El total d'emissions de gasos d'efecte hivernacle causades directa i indirectament per les eleccions d'un individu o d'una organització.</td>
                        </tr>
                    </tbody>
                </table>
            `
        },
        'OA-02': {
            code: 'AHC_H5P_DragDrop_Alcances_v1.0',
            title: 'Abasts d\'Emissions (Scope 1, 2, 3)',
            type: 'Arrossegar i deixar anar (Drag and Drop)',
            body: `
                <h4>Informació de la Fitxa Tècnica:</h4>
                <ul>
                    <li><strong>Objectiu:</strong> Classificar les fonts d'emissions segons l'abast correcte.</li>
                    <li><strong>Elements Arrossegables:</strong> 6 elements de text interactius.</li>
                    <li><strong>Zones de Destinació:</strong> 3 zones (Abast 1, Abast 2, Abast 3).</li>
                </ul>
                <h4>Distribució Correcta dels Elements:</h4>
                <table>
                    <thead>
                        <tr>
                            <th>Element a Arrossegar</th>
                            <th>Abast Correcte (Zona de Destinació)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Vehicles de l'empresa (combustió)</td>
                            <td>Abast 1 (Scope 1) - Emissions directes</td>
                        </tr>
                        <tr>
                            <td>Factura d'electricitat de la seu central</td>
                            <td>Abast 2 (Scope 2) - Emissions indirectes (energia comprada)</td>
                        </tr>
                        <tr>
                            <td>Vols de negocis d'empleats</td>
                            <td>Abast 3 (Scope 3) - Cadena de valor</td>
                        </tr>
                        <tr>
                            <td>Residus de paper i plàstic de l'oficina</td>
                            <td>Abast 3 (Scope 3) - Cadena de valor</td>
                        </tr>
                        <tr>
                            <td>Gas natural per a la calefacció de l'edifici</td>
                            <td>Abast 1 (Scope 1) - Emissions directes</td>
                        </tr>
                        <tr>
                            <td>Compra d'ordinadors nous per al personal</td>
                            <td>Abast 3 (Scope 3) - Cadena de valor</td>
                        </tr>
                    </tbody>
                </table>
            `
        },
        'OA-03': {
            code: 'AHC_H5P_InteractiveVideo_Calculadora_v1.0',
            title: 'Calculadora de Petjada de Carboni Corporativa',
            type: 'Vídeo Interactiu (Interactive Video)',
            body: `
                <h4>Informació de la Fitxa Tècnica:</h4>
                <ul>
                    <li><strong>Objectiu:</strong> Aplicar els passos d'entrada de dades a la calculadora de l'Associació.</li>
                    <li><strong>Durada:</strong> 7 a 10 minuts.</li>
                    <li><strong>Punts de Control Obligatoris:</strong> 3 parades d'interacció interactiva amb redireccionament intel·ligent.</li>
                </ul>
                <h4>Punts d'Interacció i Parades:</h4>
                <ol>
                    <li><strong>Min 02:15:</strong> Pregunta sobre consum elèctric (Resposta correcta: Abast 2). Si es falla, es retrocedeix al Min 01:30.</li>
                    <li><strong>Min 04:30:</strong> Pregunta cert/fals sobre combustible (Resposta correcta: Fals, és de Abast 3). Si es falla, es retrocedeix al Min 03:45.</li>
                    <li><strong>Min 06:45:</strong> Omplir buits sobre viatges corporatius (Resposta correcta: Abast 3).</li>
                </ol>
            `
        },
        'OA-04': {
            code: 'AHC_H5P_ImageHotspots_Casa_v1.0',
            title: 'Emissions Ocultes a la Llar (EcoGestos)',
            type: 'Punts Calents (Image Hotspots)',
            body: `
                <h4>Informació de la Fitxa Tècnica:</h4>
                <ul>
                    <li><strong>Objectiu:</strong> Explorar les fonts de malbaratament d'energia i emissions a la llar i definir comportaments d'estalvi.</li>
                    <li><strong>Recurs Base:</strong> Plànol interactiu de la casa amb punts d'informació interactius.</li>
                </ul>
                <h4>Punts Calents i Textos de Conscienciació (EcoGestos):</h4>
                <ol>
                    <li><strong>Nevera:</strong> Els frigorífics antics consumeixen el doble d'energia que els moderns. Substitueix-los per models eficients i neteja les bobines regularment.</li>
                    <li><strong>Aire Condicionat:</strong> Abaixar l'aire condicionat de 24°C augmenta el consum elèctric un 8%. Ajusta'l a 24°C i neteja els filtres mensualment.</li>
                    <li><strong>Mode Espera (Vampir):</strong> Els aparells en mode d'espera consumeixen un 10% d'electricitat inútilment. Utilitza regletes intel·ligents i apaga'ls completament.</li>
                    <li><strong>Il·luminació:</strong> Les bombetes tradicionals perden el 90% d'energia en forma de calor. Substitueix-les per llums LED, que estalvien un 80%.</li>
                    <li><strong>Rentadora:</strong> Escalfar aigua consumeix el 90% de l'energia de la rentadora. Rentar la roba a 30°C per estalviar electricitat.</li>
                </ol>
            `
        },
        'OA-05': {
            code: 'AHC_H5P_TrueFalse_MitosClima_v1.0',
            title: 'Mites i Realitats del Clima',
            type: 'Vertader / Fals (True/False)'
        },
        'OA-06': {
            code: 'AHC_H5P_DialogCards_Glosario_v1.0',
            title: 'Glossari Climàtic',
            type: 'Targetes Didàctiques (Dialog Cards)'
        },
        'OA-07': {
            code: 'AHC_H5P_FindHotspot_EnergiasRenovables_v1.0',
            title: "Identificació d'Energies Renovables",
            type: 'Troba el Punt (Find the Hotspot)'
        },
        'OA-08': {
            code: 'AHC_H5P_DragText_MitigacionAdaptacion_v1.0',
            title: 'Estratègies: Mitigació vs Adaptació',
            type: 'Arrossegar les Paraules (Drag the Words)'
        },
        'OA-09': {
            code: 'AHC_H5P_Accordion_BeneficiosClima_v1.0',
            title: "Beneficis de l'Acció Climàtica",
            type: 'Acordió (Accordion)'
        },
        'OA-10': {
            code: 'AHC_H5P_QuestionSet_EvaluacionFinal_v1.0',
            title: "Qüestionari d'Avaluació Final",
            type: 'Bateria de Preguntes (Question Set)'
        }
    }
};

function viewFicha(oaId) {
    const modal = document.getElementById('ficha-modal');
    const modalOaCode = document.getElementById('modal-oa-code');
    const modalOaTitle = document.getElementById('modal-oa-title');
    const modalOaBody = document.getElementById('modal-oa-body');

    const data = fichasData[currentLanguage][oaId];
    if (data) {
        modalOaCode.textContent = data.code;
        modalOaTitle.textContent = data.title;
        
        if (oaId === 'OA-01') {
            // Render high-performance interactive Dialog Cards component
            modalOaBody.innerHTML = `
                <p style="margin-bottom: 15px; color: var(--ahc-color-primary-green); font-weight: 700;">
                    ${currentLanguage === 'es' ? 'Tipo de actividad' : 'Tipus d\'activitat'}: ${data.type}
                </p>
                <div class="ahc-dialog-deck">
                    <div class="ahc-dialog-card">
                        <div class="ahc-dialog-card__inner" id="ahc-card-inner">
                            <div class="ahc-dialog-card__front">
                                <span class="ahc-dialog-card__icon">🧠</span>
                                <div class="ahc-dialog-card__text" id="ahc-card-front-text"></div>
                                <button class="btn-card ahc-dialog-card__btn-flip" onclick="toggleCardFlip()">
                                    ${currentLanguage === 'es' ? 'Voltear' : 'Girar'}
                                </button>
                            </div>
                            <div class="ahc-dialog-card__back">
                                <span class="ahc-dialog-card__icon">💡</span>
                                <div class="ahc-dialog-card__text" id="ahc-card-back-text"></div>
                                <button class="btn-card ahc-dialog-card__btn-flip" onclick="toggleCardFlip()">
                                    ${currentLanguage === 'es' ? 'Volver' : 'Tornar'}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="ahc-dialog-deck__controls">
                        <button class="btn-card ahc-dialog-deck__btn" id="ahc-btn-prev" onclick="changeCard(-1)">
                            ${currentLanguage === 'es' ? 'Anterior' : 'Anterior'}
                        </button>
                        <span class="ahc-dialog-deck__progress" id="ahc-deck-progress">1 / 3</span>
                        <button class="btn-card ahc-dialog-deck__btn" id="ahc-btn-next" onclick="changeCard(1)">
                            ${currentLanguage === 'es' ? 'Siguiente' : 'Següent'}
                        </button>
                    </div>
                </div>
            `;
            // Reset state indices
            activeDialogDeck = dialogCards;
            currentCardIndex = 0;
            updateDialogCardData();
        } else if (oaId === 'OA-02') {
            // Render high-performance interactive Drag and Drop component
            modalOaBody.innerHTML = `
                <p style="margin-bottom: 15px; color: var(--ahc-color-primary-green); font-weight: 700;">
                    ${currentLanguage === 'es' ? 'Tipo de actividad' : 'Tipus d\'activitat'}: ${data.type}
                </p>
                <p style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 15px;">
                    ${currentLanguage === 'es' 
                        ? 'Clasifica los elementos arrastrándolos al alcance correcto (Alcance 1, 2 o 3):' 
                        : 'Classifica els elements arrossegant-los a l\'abast correcte (Abast 1, 2 o 3):'}
                </p>
                
                <div class="ahc-drag-drop">
                    <!-- Draggable Elements Source Panel -->
                    <div class="ahc-drag-drop__draggables" id="ahc-draggables-container">
                        <!-- Filled by JS -->
                    </div>
                    
                    <!-- Dropzones Grid -->
                    <div class="ahc-drag-drop__dropzones">
                        <!-- Zone 1: Scope 1 -->
                        <div class="ahc-dropzone" id="zone-scope-1">
                            <div class="ahc-dropzone__title">
                                ${currentLanguage === 'es' ? 'Alcance 1 (Scope 1)' : 'Abast 1 (Scope 1)'}
                            </div>
                            <div class="ahc-dropzone__subtitle">
                                ${currentLanguage === 'es' ? 'Emisiones directas (combustibles)' : 'Emissions directes (combustibles)'}
                            </div>
                            <div class="ahc-dropzone__list" id="list-scope-1"></div>
                        </div>
                        
                        <!-- Zone 2: Scope 2 -->
                        <div class="ahc-dropzone" id="zone-scope-2">
                            <div class="ahc-dropzone__title">
                                ${currentLanguage === 'es' ? 'Alcance 2 (Scope 2)' : 'Abast 2 (Scope 2)'}
                            </div>
                            <div class="ahc-dropzone__subtitle">
                                ${currentLanguage === 'es' ? 'Emisiones indirectas por energía comprada' : 'Emissions indirectes per energia comprada'}
                            </div>
                            <div class="ahc-dropzone__list" id="list-scope-2"></div>
                        </div>
                        
                        <!-- Zone 3: Scope 3 -->
                        <div class="ahc-dropzone" id="zone-scope-3">
                            <div class="ahc-dropzone__title">
                                ${currentLanguage === 'es' ? 'Alcance 3 (Scope 3)' : 'Abast 3 (Scope 3)'}
                            </div>
                            <div class="ahc-dropzone__subtitle">
                                ${currentLanguage === 'es' ? 'Cadena de valor y viajes corporativos' : 'Cadena de valor i viatges corporatius'}
                            </div>
                            <div class="ahc-dropzone__list" id="list-scope-3"></div>
                        </div>
                    </div>
                    
                    <!-- Controls and Evaluation Score -->
                    <div class="ahc-drag-drop__actions">
                        <button class="btn-card ahc-drag-drop__btn" onclick="resetDragAndDrop()">
                            ${currentLanguage === 'es' ? 'Reiniciar' : 'Reiniciar'}
                        </button>
                        <span class="ahc-drag-drop__score" id="ahc-drag-score"></span>
                        <button class="btn-card ahc-drag-drop__btn" onclick="checkDragAndDropAnswers()">
                            ${currentLanguage === 'es' ? 'Comprobar' : 'Comprovar'}
                        </button>
                    </div>
                </div>
            `;
            initDragAndDropData();
        } else if (oaId === 'OA-03') {
            // Render high-performance interactive Video Player simulation
            modalOaBody.innerHTML = `
                <p style="margin-bottom: 15px; color: var(--ahc-color-primary-green); font-weight: 700;">
                    ${currentLanguage === 'es' ? 'Tipo de actividad' : 'Tipus d\'activitat'}: ${data.type}
                </p>
                <p style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 15px;">
                    ${currentLanguage === 'es' 
                        ? 'Simulación interactiva del video explicativo. Responde correctamente a las preguntas para evitar penalizaciones de tiempo.' 
                        : 'Simulació interactiva del vídeo explicatiu. Respon correctament a les preguntes per evitar penalitzacions de temps.'}
                </p>
                
                <div class="ahc-player" id="ahc-video-player">
                    <div class="ahc-player__screen" id="ahc-player-screen">
                        <div class="ahc-player__video-mock">
                            <div class="ahc-player__play-icon" id="ahc-video-play-icon">▶</div>
                            <div class="ahc-player__time-overlay" id="ahc-video-time">00:00</div>
                            <div class="ahc-player__scene-label" id="ahc-video-scene">
                                ${currentLanguage === 'es' ? 'Explicación Inicial' : 'Explicació Inicial'}
                            </div>
                        </div>
                        
                        <!-- Question overlay card -->
                        <div class="ahc-player__overlay ahc-player__overlay--hidden" id="ahc-player-overlay">
                            <div class="ahc-player__question-card">
                                <div class="ahc-player__question-title" id="ahc-video-question"></div>
                                <div class="ahc-player__options" id="ahc-video-options"></div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="ahc-player__controls">
                        <button class="btn-card ahc-player__btn-play" id="ahc-video-btn-play" onclick="toggleVideoPlayback()">Play</button>
                        <div class="ahc-player__timeline">
                            <div class="ahc-player__progress-bar">
                                <div class="ahc-player__progress" id="ahc-video-progress" style="width: 0%"></div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            initVideoPlayerState();
        } else if (oaId === 'OA-04') {
            // Render dynamic interactive Image Hotspots component
            modalOaBody.innerHTML = `
                <p style="margin-bottom: 15px; color: var(--ahc-color-primary-green); font-weight: 700;">
                    ${currentLanguage === 'es' ? 'Tipo de actividad' : 'Tipus d\'activitat'}: ${data.type}
                </p>
                <p style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 15px;">
                    ${currentLanguage === 'es' 
                        ? 'Explora el plano interactivo de la casa haciendo clic en los puntos calientes para descubrir cómo ahorrar energía:' 
                        : 'Explora el plànol interactiu de la casa fent clic en els punts calents per descobrir com estalviar energia:'}
                </p>
                
                <div class="ahc-hotspots" id="ahc-hotspots-component">
                    <div class="ahc-hotspots__container">
                        <img src="house_layout.png?v=10" alt="Plano interactivo de la casa" class="ahc-hotspots__image">
                        
                        <!-- Hotspot 1: Nevera (Kitchen, bottom left) -->
                        <div class="ahc-hotspot" style="top: 65%; left: 22%;" id="hotspot-nevera">
                            <button class="ahc-hotspot__marker" onclick="toggleHotspotTooltip('nevera', event)" aria-label="Nevera / Frigorífic" aria-expanded="false">
                                <span class="ahc-hotspot__icon">❄️</span>
                            </button>
                            <div class="ahc-hotspot__tooltip ahc-hotspot__tooltip--top">
                                <div class="ahc-hotspot__tooltip-title">
                                    <span>❄️</span>
                                    <span>${currentLanguage === 'es' ? 'Nevera / Congelador' : 'Nevera / Congelador'}</span>
                                </div>
                                <div class="ahc-hotspot__tooltip-body">
                                    ${currentLanguage === 'es' 
                                        ? 'Los frigoríficos antiguos consumen el doble de energía que los modernos. Reemplázalos por modelos eficientes y limpia sus bobinas regularmente.' 
                                        : 'Els frigorífics antics consumeixen el doble d\'energia que els moderns. Substitueix-los per models eficients i neteja les bobines regularment.'}
                                </div>
                            </div>
                        </div>

                        <!-- Hotspot 2: Aire Acondicionado (Bedroom, top right) -->
                        <div class="ahc-hotspot" style="top: 38%; left: 56%;" id="hotspot-aire">
                            <button class="ahc-hotspot__marker" onclick="toggleHotspotTooltip('aire', event)" aria-label="Aire Acondicionado / Aire Condicionat" aria-expanded="false">
                                <span class="ahc-hotspot__icon">💨</span>
                            </button>
                            <div class="ahc-hotspot__tooltip ahc-hotspot__tooltip--bottom">
                                <div class="ahc-hotspot__tooltip-title">
                                    <span>💨</span>
                                    <span>${currentLanguage === 'es' ? 'Aire Acondicionado' : 'Aire Condicionat'}</span>
                                </div>
                                <div class="ahc-hotspot__tooltip-body">
                                    ${currentLanguage === 'es' 
                                        ? 'Bajar el aire acondicionado de 24°C aumenta el consumo eléctrico un 8%. Ajústalo a 24°C y limpia los filtros mensualmente.' 
                                        : 'Abaixar l\'aire condicionat de 24°C augmenta el consum elèctric un 8%. Ajusta\'l a 24°C i neteja els filtres mensualment.'}
                                </div>
                            </div>
                        </div>

                        <!-- Hotspot 3: Modo Espera (Vampiro) (Living room TV, bottom right) -->
                        <div class="ahc-hotspot" style="top: 75%; left: 68%;" id="hotspot-espera">
                            <button class="ahc-hotspot__marker" onclick="toggleHotspotTooltip('espera', event)" aria-label="Modo Espera / Mode Espera" aria-expanded="false">
                                <span class="ahc-hotspot__icon">🔌</span>
                            </button>
                            <div class="ahc-hotspot__tooltip ahc-hotspot__tooltip--top">
                                <div class="ahc-hotspot__tooltip-title">
                                    <span>🔌</span>
                                    <span>${currentLanguage === 'es' ? 'Consumo Vampiro' : 'Consum Vampir'}</span>
                                </div>
                                <div class="ahc-hotspot__tooltip-body">
                                    ${currentLanguage === 'es' 
                                        ? 'Los aparatos en modo de espera consumen un 10% de electricidad inútilmente. Usa regletas inteligentes y apágalos por completo.' 
                                        : 'Els aparells en mode d\'espera consumeixen un 10% d\'electricitat inútilment. Utilitza regletes intel·ligents i apaga\'ls completament.'}
                                </div>
                            </div>
                        </div>

                        <!-- Hotspot 4: Iluminación (Bathroom/Ceiling, top left) -->
                        <div class="ahc-hotspot" style="top: 25%; left: 33%;" id="hotspot-iluminacion">
                            <button class="ahc-hotspot__marker" onclick="toggleHotspotTooltip('iluminacion', event)" aria-label="Iluminación / Il·luminació" aria-expanded="false">
                                <span class="ahc-hotspot__icon">💡</span>
                            </button>
                            <div class="ahc-hotspot__tooltip ahc-hotspot__tooltip--right">
                                <div class="ahc-hotspot__tooltip-title">
                                    <span>💡</span>
                                    <span>${currentLanguage === 'es' ? 'Iluminación LED' : 'Il·luminació LED'}</span>
                                </div>
                                <div class="ahc-hotspot__tooltip-body">
                                    ${currentLanguage === 'es' 
                                        ? 'Las bombillas tradicionales pierden el 90% de energía en forma de calor. Reemplázalas por luces LED, que ahorran un 80%.' 
                                        : 'Les bombelles tradicionals perden el 90% d\'energia en forma de calor. Substitueix-les per llums LED, que estalvien un 80%.'}
                                </div>
                            </div>
                        </div>

                        <!-- Hotspot 5: Lavadora (Laundry Room, middle) -->
                        <div class="ahc-hotspot" style="top: 60%; left: 48%;" id="hotspot-lavadora">
                            <button class="ahc-hotspot__marker" onclick="toggleHotspotTooltip('lavadora', event)" aria-label="Lavadora / Rentadora" aria-expanded="false">
                                <span class="ahc-hotspot__icon">🧼</span>
                            </button>
                            <div class="ahc-hotspot__tooltip ahc-hotspot__tooltip--left">
                                <div class="ahc-hotspot__tooltip-title">
                                    <span>🧼</span>
                                    <span>${currentLanguage === 'es' ? 'Lavadora Eficiente' : 'Rentadora Eficient'}</span>
                                </div>
                                <div class="ahc-hotspot__tooltip-body">
                                    ${currentLanguage === 'es' 
                                        ? 'Calentar agua consume el 90% de la energía de la lavadora. Lava la ropa a 30°C para ahorrar electricidad.' 
                                        : 'Escalfar aigua consumeix el 90% de l\'energia de la rentadora. Rentar la roba a 30°C per estalviar electricitat.'}
                                </div>
                            </div>
                        </div>

                    </div>
                    
                    <div class="ahc-hotspots__instructions">
                        <p>💡 ${currentLanguage === 'es' 
                            ? 'Haz clic en los iconos parpadeantes para descubrir los EcoGestos de ahorro.' 
                            : 'Fes clic en les icones parpellejants per descobrir els EcoGestos d\'estalvi.'}</p>
                    </div>
                </div>
            `;
            initHotspotsInteraction();
        } else if (oaId === 'OA-05') {
            // True/False (Verdadero/Falso)
            modalOaBody.innerHTML = `
                <p style="margin-bottom: 15px; color: var(--ahc-color-primary-green); font-weight: 700;">
                    ${currentLanguage === 'es' ? 'Tipo de actividad' : 'Tipus d\'activitat'}: ${data.type}
                </p>
                <div class="ahc-truefalse" id="ahc-truefalse">
                    <p class="ahc-truefalse__statement">
                        ${currentLanguage === 'es'
                            ? 'El cambio climático es un ciclo natural de la Tierra y las emisiones humanas no tienen un impacto significativo en él.'
                            : 'El canvi climàtic és un cicle natural de la Terra i les emissions humanes no tenen un impacte significatiu en ell.'}
                    </p>
                    <div class="ahc-truefalse__options">
                        <button class="ahc-truefalse__btn" data-val="true" onclick="answerTrueFalse(true, this)">✔ ${currentLanguage === 'es' ? 'Verdadero' : 'Vertader'}</button>
                        <button class="ahc-truefalse__btn" data-val="false" onclick="answerTrueFalse(false, this)">✘ ${currentLanguage === 'es' ? 'Falso' : 'Fals'}</button>
                    </div>
                    <div class="ahc-truefalse__feedback" id="ahc-truefalse-feedback"></div>
                    <button class="btn-card ahc-truefalse__retry" id="ahc-truefalse-retry" style="display:none;" onclick="resetTrueFalse()">
                        ${currentLanguage === 'es' ? 'Reintentar' : 'Reintentar'}
                    </button>
                </div>
            `;
        } else if (oaId === 'OA-06') {
            // Dialog Cards (Glosario) — reutiliza el componente de OA-01 con otro mazo
            modalOaBody.innerHTML = `
                <p style="margin-bottom: 15px; color: var(--ahc-color-primary-green); font-weight: 700;">
                    ${currentLanguage === 'es' ? 'Tipo de actividad' : 'Tipus d\'activitat'}: ${data.type}
                </p>
                <div class="ahc-dialog-deck">
                    <div class="ahc-dialog-card">
                        <div class="ahc-dialog-card__inner" id="ahc-card-inner">
                            <div class="ahc-dialog-card__front">
                                <span class="ahc-dialog-card__icon">📖</span>
                                <div class="ahc-dialog-card__text" id="ahc-card-front-text"></div>
                                <button class="btn-card ahc-dialog-card__btn-flip" onclick="toggleCardFlip()">
                                    ${currentLanguage === 'es' ? 'Voltear' : 'Girar'}
                                </button>
                            </div>
                            <div class="ahc-dialog-card__back">
                                <span class="ahc-dialog-card__icon">✅</span>
                                <div class="ahc-dialog-card__text" id="ahc-card-back-text"></div>
                                <button class="btn-card ahc-dialog-card__btn-flip" onclick="toggleCardFlip()">
                                    ${currentLanguage === 'es' ? 'Volver' : 'Tornar'}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="ahc-dialog-deck__controls">
                        <button class="btn-card ahc-dialog-deck__btn" id="ahc-btn-prev" onclick="changeCard(-1)">
                            ${currentLanguage === 'es' ? 'Anterior' : 'Anterior'}
                        </button>
                        <span class="ahc-dialog-deck__progress" id="ahc-deck-progress">1 / 3</span>
                        <button class="btn-card ahc-dialog-deck__btn" id="ahc-btn-next" onclick="changeCard(1)">
                            ${currentLanguage === 'es' ? 'Siguiente' : 'Següent'}
                        </button>
                    </div>
                </div>
            `;
            activeDialogDeck = glossaryCards;
            currentCardIndex = 0;
            updateDialogCardData();
        } else if (oaId === 'OA-07') {
            // Find the Hotspot — identifica las renovables
            modalOaBody.innerHTML = `
                <p style="margin-bottom: 15px; color: var(--ahc-color-primary-green); font-weight: 700;">
                    ${currentLanguage === 'es' ? 'Tipo de actividad' : 'Tipus d\'activitat'}: ${data.type}
                </p>
                <p style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 15px;">
                    ${currentLanguage === 'es'
                        ? 'Haz clic en las 4 fuentes de energía renovable. Cuidado con la fuente contaminante.'
                        : 'Fes clic en les 4 fonts d\'energia renovable. Compte amb la font contaminant.'}
                </p>
                <div class="ahc-find__grid" id="ahc-find-grid">
                    <button class="ahc-find__item" data-correct="true" onclick="findEnergy(this)"><span class="ahc-find__icon">☀️</span><span>${currentLanguage === 'es' ? 'Solar' : 'Solar'}</span></button>
                    <button class="ahc-find__item" data-correct="true" onclick="findEnergy(this)"><span class="ahc-find__icon">🌬️</span><span>${currentLanguage === 'es' ? 'Eólica' : 'Eòlica'}</span></button>
                    <button class="ahc-find__item" data-correct="true" onclick="findEnergy(this)"><span class="ahc-find__icon">💧</span><span>${currentLanguage === 'es' ? 'Hidráulica' : 'Hidràulica'}</span></button>
                    <button class="ahc-find__item" data-correct="true" onclick="findEnergy(this)"><span class="ahc-find__icon">🌋</span><span>${currentLanguage === 'es' ? 'Geotérmica' : 'Geotèrmica'}</span></button>
                    <button class="ahc-find__item" data-correct="false" onclick="findEnergy(this)"><span class="ahc-find__icon">🏭</span><span>${currentLanguage === 'es' ? 'Carbón' : 'Carbó'}</span></button>
                </div>
                <div class="ahc-find__feedback" id="ahc-find-feedback"></div>
                <div class="ahc-find__actions">
                    <button class="btn-card" onclick="resetFind()">${currentLanguage === 'es' ? 'Reiniciar' : 'Reiniciar'}</button>
                    <span class="ahc-find__score" id="ahc-find-score">0 / 4</span>
                </div>
            `;
            findFound = 0;
        } else if (oaId === 'OA-08') {
            // Drag the Words (Mitigación vs Adaptación)
            modalOaBody.innerHTML = `
                <p style="margin-bottom: 15px; color: var(--ahc-color-primary-green); font-weight: 700;">
                    ${currentLanguage === 'es' ? 'Tipo de actividad' : 'Tipus d\'activitat'}: ${data.type}
                </p>
                <p style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 12px;">
                    ${currentLanguage === 'es'
                        ? 'Arrastra las palabras a los huecos correctos para completar el texto.'
                        : 'Arrossega les paraules als buits correctes per completar el text.'}
                </p>
                <div class="ahc-dragwords__bank" id="ahc-dragwords-bank"></div>
                <p class="ahc-dragwords__text" id="ahc-dragwords-text"></p>
                <div class="ahc-dragwords__actions">
                    <button class="btn-card" onclick="resetDragWords()">${currentLanguage === 'es' ? 'Reiniciar' : 'Reiniciar'}</button>
                    <span class="ahc-dragwords__score" id="ahc-dragwords-score"></span>
                    <button class="btn-card" onclick="checkDragWords()">${currentLanguage === 'es' ? 'Comprobar' : 'Comprovar'}</button>
                </div>
            `;
            initDragWords();
        } else if (oaId === 'OA-09') {
            // Accordion (Beneficios)
            const A = currentLanguage === 'es' ? {
                a: ['🌿 Beneficios Ambientales', 'Protegemos la biodiversidad y reducimos la frecuencia de eventos climáticos extremos.'],
                b: ['💶 Beneficios Económicos', 'La eficiencia energética reduce las facturas de electricidad y fomenta el empleo verde.'],
                c: ['❤️ Beneficios para la Salud', 'Menos emisiones significan un aire más limpio, reduciendo enfermedades respiratorias.']
            } : {
                a: ['🌿 Beneficis Ambientals', 'Protegim la biodiversitat i reduïm la freqüència d\'esdeveniments climàtics extrems.'],
                b: ['💶 Beneficis Econòmics', 'L\'eficiència energètica redueix les factures d\'electricitat i fomenta l\'ocupació verda.'],
                c: ['❤️ Beneficis per a la Salut', 'Menys emissions signifiquen un aire més net, reduint malalties respiratòries.']
            };
            modalOaBody.innerHTML = `
                <p style="margin-bottom: 15px; color: var(--ahc-color-primary-green); font-weight: 700;">
                    ${currentLanguage === 'es' ? 'Tipo de actividad' : 'Tipus d\'activitat'}: ${data.type}
                </p>
                <p style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 12px;">
                    ${currentLanguage === 'es' ? 'Despliega los paneles para descubrir los beneficios.' : 'Desplega els panells per descobrir els beneficis.'}
                </p>
                <div class="ahc-accordion" id="ahc-accordion">
                    ${[A.a, A.b, A.c].map(p => `
                        <div class="ahc-accordion__item">
                            <button class="ahc-accordion__header" aria-expanded="false" onclick="toggleAccordion(this)">
                                <span>${p[0]}</span><span class="ahc-accordion__chevron">▾</span>
                            </button>
                            <div class="ahc-accordion__panel"><div class="ahc-accordion__inner">${p[1]}</div></div>
                        </div>
                    `).join('')}
                </div>
            `;
        } else if (oaId === 'OA-10') {
            // Question Set (Evaluación final)
            modalOaBody.innerHTML = `
                <p style="margin-bottom: 15px; color: var(--ahc-color-primary-green); font-weight: 700;">
                    ${currentLanguage === 'es' ? 'Tipo de actividad' : 'Tipus d\'activitat'}: ${data.type}
                </p>
                <div class="ahc-quizset" id="ahc-quizset">
                    <div class="ahc-quizset__progress" id="ahc-quizset-progress"></div>
                    <div class="ahc-quizset__body" id="ahc-quizset-body"></div>
                </div>
            `;
            initQuizSet();
        } else {
            // Render default technical sheet
            modalOaBody.innerHTML = `
                <p style="margin-bottom: 15px; color: var(--ahc-color-primary-green); font-weight: 700;">
                    ${currentLanguage === 'es' ? 'Tipo de actividad' : 'Tipus d\'activitat'}: ${data.type}
                </p>
                ${data.body}
            `;
        }
        
        modal.showModal(); // Native API activation
        document.body.style.overflow = 'hidden'; // Avoid background window scroll
    }
}

function closeModal() {
    const modal = document.getElementById('ficha-modal');
    modal.close(); // Native close API call
    document.body.style.overflow = 'auto'; // Restore normal scrolling
    
    // Stop simulated video player if running
    if (typeof stopVideoPlayback === 'function') {
        stopVideoPlayback();
    }
    
    // Reset any open hotspots
    if (typeof closeAllHotspotTooltips === 'function') {
        closeAllHotspotTooltips();
    }
}

// Global Dialog Cards state parameters
let currentCardIndex = 0;
const dialogCards = {
    es: [
        { q: "¿Qué significa CO2e?", a: "Equivalente de Dióxido de Carbono (Carbon Dioxide Equivalent). Es una métrica para comparar las emisiones de varios gases de efecto invernadero basada en su potencial de calentamiento global." },
        { q: "¿Qué es el Net Zero (Cero Neto)?", a: "Lograr un equilibrio entre la cantidad de gases de efecto invernadero producidos y la cantidad eliminada de la atmósfera." },
        { q: "¿Qué es la Huella de Carbono?", a: "El total de emisiones de gases de efecto invernadero causadas directa e indirectamente por las elecciones de un individuo o de una organización." }
    ],
    ca: [
        { q: "Què significa CO2e?", a: "Equivalent de Diòxid de Carboni (Carbon Dioxide Equivalent). És una mètrica per comparar les emissions de diversos gasos d'efecte hivernacle basada en el seu potencial d'escalfament global." },
        { q: "Què és el Net Zero (Zero Net)?", a: "Aconseguir un equilibri entre la quantitat de gasos d'efecte hivernacle produïts i la quantitat eliminada de l'atmosfera." },
        { q: "Què és la Petjada de Carboni?", a: "El total d'emissions de gasos d'efecte hivernacle causades directa i indirectament per les eleccions d'un individu o d'una organització." }
    ]
};

// Mazo del Glosario (OA-06), mismo componente de tarjetas que OA-01
const glossaryCards = {
    es: [
        { q: "Huella de Carbono", a: "La cantidad total de gases de efecto invernadero emitidos directa o indirectamente por un individuo, organización o producto." },
        { q: "Gases de Efecto Invernadero (GEI)", a: "Gases como el CO2 y el metano que atrapan el calor en la atmósfera, causando el calentamiento global." },
        { q: "Neutralidad de Carbono (Net Zero)", a: "Estado en el que las emisiones de carbono liberadas a la atmósfera se equilibran con una cantidad equivalente retirada." }
    ],
    ca: [
        { q: "Petjada de Carboni", a: "La quantitat total de gasos d'efecte hivernacle emesos directament o indirectament per un individu, organització o producte." },
        { q: "Gasos d'Efecte Hivernacle (GEH)", a: "Gasos com el CO2 i el metà que atrapen la calor a l'atmosfera, causant l'escalfament global." },
        { q: "Neutralitat de Carboni (Net Zero)", a: "Estat en què les emissions de carboni alliberades a l'atmosfera s'equilibren amb una quantitat equivalent retirada." }
    ]
};

// Mazo activo (apunta a dialogCards o glossaryCards según el OA abierto)
let activeDialogDeck = dialogCards;

function toggleCardFlip() {
    const cardInner = document.getElementById('ahc-card-inner');
    if (cardInner) {
        cardInner.classList.toggle('ahc-dialog-card__inner--flipped');
    }
}

function changeCard(direction) {
    const cardInner = document.getElementById('ahc-card-inner');
    if (cardInner && cardInner.classList.contains('ahc-dialog-card__inner--flipped')) {
        cardInner.classList.remove('ahc-dialog-card__inner--flipped');
        // Rotate transition duration offset fallback
        setTimeout(() => {
            currentCardIndex = (currentCardIndex + direction + activeDialogDeck[currentLanguage].length) % activeDialogDeck[currentLanguage].length;
            updateDialogCardData();
        }, 150);
    } else {
        currentCardIndex = (currentCardIndex + direction + activeDialogDeck[currentLanguage].length) % activeDialogDeck[currentLanguage].length;
        updateDialogCardData();
    }
}

function updateDialogCardData() {
    const frontText = document.getElementById('ahc-card-front-text');
    const backText = document.getElementById('ahc-card-back-text');
    const progressText = document.getElementById('ahc-deck-progress');
    
    if (frontText && backText && progressText) {
        const deck = activeDialogDeck[currentLanguage];
        const card = deck[currentCardIndex];
        
        frontText.textContent = card.q;
        backText.textContent = card.a;
        progressText.textContent = `${currentCardIndex + 1} / ${deck.length}`;
    }
}

// Binding click outside target close bounds
document.addEventListener("DOMContentLoaded", () => {
    const dialog = document.getElementById("ficha-modal");
    if (dialog) {
        dialog.addEventListener("click", (event) => {
            const card = dialog.querySelector(".modal-card");
            if (card) {
                const rect = card.getBoundingClientRect();
                const isInCard =
                    rect.top <= event.clientY &&
                    event.clientY <= rect.top + rect.height &&
                    rect.left <= event.clientX &&
                    event.clientX <= rect.left + rect.width;
                
                if (!isInCard) {
                    closeModal();
                }
            }
        });
    }
});

// Global Drag and Drop state parameters
const dragItems = {
    es: [
        { id: "drag-1", text: "Vehículos de la empresa (combustión)", correctZone: "list-scope-1" },
        { id: "drag-2", text: "Factura de electricidad de la sede", correctZone: "list-scope-2" },
        { id: "drag-3", text: "Vuelos de negocios de empleados", correctZone: "list-scope-3" },
        { id: "drag-4", text: "Residuos de papel y plástico", correctZone: "list-scope-3" },
        { id: "drag-5", text: "Gas natural para la calefacción", correctZone: "list-scope-1" },
        { id: "drag-6", text: "Compra de ordenadores nuevos", correctZone: "list-scope-3" }
    ],
    ca: [
        { id: "drag-1", text: "Vehicles de l'empresa (combustió)", correctZone: "list-scope-1" },
        { id: "drag-2", text: "Factura d'electricitat de la seu", correctZone: "list-scope-2" },
        { id: "drag-3", text: "Vols de negocis d'empleats", correctZone: "list-scope-3" },
        { id: "drag-4", text: "Residus de paper i plàstic", correctZone: "list-scope-3" },
        { id: "drag-5", text: "Gas natural per a la calefacció", correctZone: "list-scope-1" },
        { id: "drag-6", text: "Compra d'ordinadors nous", correctZone: "list-scope-3" }
    ]
};

function initDragAndDropData() {
    const container = document.getElementById('ahc-draggables-container');
    const scoreText = document.getElementById('ahc-drag-score');
    
    if (container && scoreText) {
        container.innerHTML = '';
        scoreText.textContent = '';
        
        const items = dragItems[currentLanguage];
        // Shuffle elements randomly
        const shuffledItems = [...items].sort(() => Math.random() - 0.5);
        
        shuffledItems.forEach(item => {
            const div = document.createElement('div');
            div.className = 'ahc-draggable';
            div.id = item.id;
            div.draggable = true;
            div.textContent = item.text;
            
            // Set Drag event listeners
            div.addEventListener('dragstart', (e) => {
                e.dataTransfer.setData('text/plain', div.id);
                div.classList.add('ahc-draggable--dragging');
            });
            
            div.addEventListener('dragend', () => {
                div.classList.remove('ahc-draggable--dragging');
            });
            
            container.appendChild(div);
        });
        
        bindDropzoneListeners();
    }
}

function bindDropzoneListeners() {
    const droplists = document.querySelectorAll('.ahc-dropzone__list');
    const container = document.getElementById('ahc-draggables-container');
    
    if (container) {
        container.addEventListener('dragover', (e) => {
            e.preventDefault();
        });
        container.addEventListener('drop', (e) => {
            e.preventDefault();
            const id = e.dataTransfer.getData('text/plain');
            const draggable = document.getElementById(id);
            if (draggable) {
                draggable.className = 'ahc-draggable';
                container.appendChild(draggable);
            }
        });
    }
    
    droplists.forEach(list => {
        const zone = list.closest('.ahc-dropzone');
        
        zone.addEventListener('dragover', (e) => {
            e.preventDefault();
            zone.classList.add('ahc-dropzone--over');
        });
        
        zone.addEventListener('dragleave', () => {
            zone.classList.remove('ahc-dropzone--over');
        });
        
        zone.addEventListener('drop', (e) => {
            e.preventDefault();
            zone.classList.remove('ahc-dropzone--over');
            const id = e.dataTransfer.getData('text/plain');
            const draggable = document.getElementById(id);
            if (draggable) {
                draggable.className = 'ahc-draggable';
                list.appendChild(draggable);
            }
        });
    });
}

function checkDragAndDropAnswers() {
    const items = dragItems[currentLanguage];
    let correctCount = 0;
    let totalItems = items.length;
    
    items.forEach(item => {
        const element = document.getElementById(item.id);
        if (element) {
            const parentList = element.parentElement;
            if (parentList) {
                const parentId = parentList.id;
                
                if (parentId === item.correctZone) {
                    correctCount++;
                    element.classList.add('ahc-draggable--correct');
                    element.classList.remove('ahc-draggable--incorrect');
                } else if (parentId === 'ahc-draggables-container') {
                    element.className = 'ahc-draggable';
                } else {
                    element.classList.add('ahc-draggable--incorrect');
                    element.classList.remove('ahc-draggable--correct');
                }
            }
        }
    });
    
    const scoreText = document.getElementById('ahc-drag-score');
    if (scoreText) {
        scoreText.textContent = `${currentLanguage === 'es' ? 'Puntuación' : 'Puntuació'}: ${correctCount} / ${totalItems}`;
    }
}

function resetDragAndDrop() {
    const container = document.getElementById('ahc-draggables-container');
    const lists = document.querySelectorAll('.ahc-dropzone__list');
    
    if (container) {
        lists.forEach(list => {
            const draggables = list.querySelectorAll('.ahc-draggable');
            draggables.forEach(draggable => {
                draggable.className = 'ahc-draggable';
                container.appendChild(draggable);
            });
        });
        
        initDragAndDropData();
    }
}

// ==========================================================================
// INTERACTIVE VIDEO STATE MANAGEMENT & LOGIC (OA-03)
// ==========================================================================

let videoPlaybackTimer = null;
let videoCurrentTime = 0; // Simulated time in seconds
const videoDuration = 420; // 7 minutes total duration
let isVideoPlaying = false;
let triggeredStops = {}; // Tracks which timestamp questions have been answered

const videoStopQuestions = {
    135: { // 02:15
        type: "options",
        scene: { es: "Consumo Eléctrico", ca: "Consum Elèctric" },
        q: {
            es: "¿A qué alcance corresponden las emisiones por consumo eléctrico organizacional?",
            ca: "A quin abast corresponen les emissions per consum elèctric organitzacional?"
        },
        options: {
            es: [
                { text: "Alcance 1 (Emisiones Directas)", correct: false },
                { text: "Alcance 2 (Emisiones Indirectas por Energía Adquirida)", correct: true },
                { text: "Alcance 3 (Otras Emisiones Indirectas)", correct: false }
            ],
            ca: [
                { text: "Abast 1 (Emissions Directes)", correct: false },
                { text: "Abast 2 (Emissions Indirectes per Energia Adquirida)", correct: true },
                { text: "Abast 3 (Altres Emissions Indirectes)", correct: false }
            ]
        },
        rewindTime: 90 // Go back to 01:30 (90 seconds)
    },
    270: { // 04:30
        type: "boolean",
        scene: { es: "Combustible de Flota", ca: "Combustible de Flota" },
        q: {
            es: "El combustible de los vehículos propios de la empresa pertenece al Alcance 3. ¿Verdadero o Falso?",
            ca: "El combustible dels vehicles propis de l'empresa pertany a l'Abast 3. Cert o Fals?"
        },
        options: {
            es: [
                { text: "Verdadero", correct: false },
                { text: "Falso (Pertenece al Alcance 1)", correct: true }
            ],
            ca: [
                { text: "Cert", correct: false },
                { text: "Fals (Pertany a l'Abast 1)", correct: true }
            ]
        },
        rewindTime: 225 // Go back to 03:45 (225 seconds)
    },
    405: { // 06:45
        type: "blank",
        scene: { es: "Viajes de Negocios", ca: "Viatges de Negocis" },
        q: {
            es: "Completa: Los viajes en avión contratados por los empleados se clasifican en el Alcance ______.",
            ca: "Completa: Els viatges en avió contractats pels empleats es classifiquen a l'Abast ______."
        },
        correctAnswer: "3",
        rewindTime: 360 // Go back to 06:00 (360 seconds)
    }
};

function initVideoPlayerState() {
    videoPlaybackTimer = null;
    videoCurrentTime = 0;
    isVideoPlaying = false;
    triggeredStops = {};
    updateVideoUI();
}

function toggleVideoPlayback() {
    const playBtn = document.getElementById('ahc-video-btn-play');
    const playIcon = document.getElementById('ahc-video-play-icon');
    
    if (isVideoPlaying) {
        stopVideoPlayback();
    } else {
        isVideoPlaying = true;
        if (playBtn) playBtn.textContent = "Pause";
        if (playIcon) playIcon.style.opacity = "0";
        
        videoPlaybackTimer = setInterval(() => {
            videoCurrentTime++;
            
            // Check if current time has an interactive stop
            if (videoStopQuestions[videoCurrentTime] && !triggeredStops[videoCurrentTime]) {
                triggerVideoStop(videoCurrentTime);
            }
            
            if (videoCurrentTime >= videoDuration) {
                videoCurrentTime = videoDuration;
                stopVideoPlayback();
                alert(currentLanguage === 'es' ? "¡Video finalizado con éxito!" : "¡Vídeo finalitzat amb èxit!");
            }
            
            updateVideoUI();
        }, 1000); // 1 second increments
    }
}

function stopVideoPlayback() {
    isVideoPlaying = false;
    const playBtn = document.getElementById('ahc-video-btn-play');
    const playIcon = document.getElementById('ahc-video-play-icon');
    
    if (playBtn) playBtn.textContent = "Play";
    if (playIcon) playIcon.style.opacity = "0.65";
    
    if (videoPlaybackTimer) {
        clearInterval(videoPlaybackTimer);
        videoPlaybackTimer = null;
    }
}

function updateVideoUI() {
    const timeDisplay = document.getElementById('ahc-video-time');
    const progressDisplay = document.getElementById('ahc-video-progress');
    const sceneDisplay = document.getElementById('ahc-video-scene');
    
    if (timeDisplay && progressDisplay) {
        // Format time display as MM:SS
        const minutes = Math.floor(videoCurrentTime / 60);
        const seconds = videoCurrentTime % 60;
        timeDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        
        // Progress percentage width
        const pct = (videoCurrentTime / videoDuration) * 100;
        progressDisplay.style.width = `${pct}%`;
        
        // Dynamically update the current scene label based on time range
        if (sceneDisplay) {
            if (videoCurrentTime < 135) {
                sceneDisplay.textContent = currentLanguage === 'es' ? "1. Explicación Inicial" : "1. Explicació Inicial";
            } else if (videoCurrentTime < 270) {
                sceneDisplay.textContent = currentLanguage === 'es' ? "2. Consumo Eléctrico" : "2. Consum Elèctric";
            } else if (videoCurrentTime < 405) {
                sceneDisplay.textContent = currentLanguage === 'es' ? "3. Alcance de Emisiones" : "3. Abast d'Emissions";
            } else {
                sceneDisplay.textContent = currentLanguage === 'es' ? "4. Viajes y Reporte" : "4. Viatges i Report";
            }
        }
    }
}

function triggerVideoStop(timestamp) {
    stopVideoPlayback();
    
    const overlay = document.getElementById('ahc-player-overlay');
    const questionText = document.getElementById('ahc-video-question');
    const optionsContainer = document.getElementById('ahc-video-options');
    
    if (overlay && questionText && optionsContainer) {
        const question = videoStopQuestions[timestamp];
        questionText.textContent = question.q[currentLanguage];
        optionsContainer.innerHTML = '';
        
        if (question.type === 'options' || question.type === 'boolean') {
            question.options[currentLanguage].forEach(opt => {
                const btn = document.createElement('button');
                btn.className = 'ahc-player__option-btn';
                btn.textContent = opt.text;
                btn.onclick = () => submitVideoAnswer(timestamp, opt.correct);
                optionsContainer.appendChild(btn);
            });
        } else if (question.type === 'blank') {
            const group = document.createElement('div');
            group.className = 'ahc-player__input-group';
            
            const input = document.createElement('input');
            input.type = 'text';
            input.className = 'ahc-player__input-text';
            input.placeholder = currentLanguage === 'es' ? 'Ingresa el número (ej: 3)' : 'Introdueix el número (ej: 3)';
            input.id = 'ahc-video-blank-input';
            
            const btn = document.createElement('button');
            btn.className = 'btn-card ahc-player__btn-play';
            btn.textContent = currentLanguage === 'es' ? 'Enviar' : 'Enviar';
            btn.onclick = () => {
                const isCorrect = input.value.trim() === question.correctAnswer;
                submitVideoAnswer(timestamp, isCorrect);
            };
            
            group.appendChild(input);
            group.appendChild(btn);
            optionsContainer.appendChild(group);
        }
        
        overlay.classList.remove('ahc-player__overlay--hidden');
    }
}

function submitVideoAnswer(timestamp, isCorrect) {
    const overlay = document.getElementById('ahc-player-overlay');
    const playerScreen = document.getElementById('ahc-player-screen');
    
    if (isCorrect) {
        // Record correct completion for this stop
        triggeredStops[timestamp] = true;
        if (overlay) overlay.classList.add('ahc-player__overlay--hidden');
        toggleVideoPlayback(); // Resume playback
    } else {
        // Penalty logic: flash red screen then rewind
        if (playerScreen) {
            playerScreen.classList.add('ahc-player__screen--flash-red');
            // Remove flash animation class after completion
            setTimeout(() => {
                playerScreen.classList.remove('ahc-player__screen--flash-red');
            }, 500);
        }
        
        // Hide overlay, rewind time and restart playback
        if (overlay) overlay.classList.add('ahc-player__overlay--hidden');
        
        const question = videoStopQuestions[timestamp];
        videoCurrentTime = question.rewindTime; // Penalty Rewind
        updateVideoUI();
        
        // Brief delay before resuming playback
        setTimeout(() => {
            toggleVideoPlayback();
        }, 600);
    }
}

// ==========================================================================
// IMAGE HOTSPOTS INTERACTION LOGIC (OA-04)
// ==========================================================================

function initHotspotsInteraction() {
    const component = document.getElementById('ahc-hotspots-component');
    if (component) {
        component.addEventListener('click', (e) => {
            const marker = e.target.closest('.ahc-hotspot__marker');
            const tooltip = e.target.closest('.ahc-hotspot__tooltip');
            if (!marker && !tooltip) {
                closeAllHotspotTooltips();
            }
        });
    }
}

function toggleHotspotTooltip(id, event) {
    if (event) {
        event.stopPropagation();
    }
    
    const targetHotspot = document.getElementById(`hotspot-${id}`);
    if (targetHotspot) {
        const isActive = targetHotspot.classList.contains('ahc-hotspot--active');
        
        closeAllHotspotTooltips();
        
        if (!isActive) {
            targetHotspot.classList.add('ahc-hotspot--active');
            const marker = targetHotspot.querySelector('.ahc-hotspot__marker');
            if (marker) {
                marker.setAttribute('aria-expanded', 'true');
            }
        }
    }
}

function closeAllHotspotTooltips() {
    const hotspots = document.querySelectorAll('.ahc-hotspot');
    hotspots.forEach(hotspot => {
        hotspot.classList.remove('ahc-hotspot--active');
        const marker = hotspot.querySelector('.ahc-hotspot__marker');
        if (marker) {
            marker.setAttribute('aria-expanded', 'false');
        }
    });
}

// ==========================================================================
// TRUE / FALSE (OA-05)
// ==========================================================================
function answerTrueFalse(chosen) {
    const correct = false; // la afirmación es un mito → la respuesta correcta es "Falso"
    const fb = document.getElementById('ahc-truefalse-feedback');
    const retry = document.getElementById('ahc-truefalse-retry');
    const btns = document.querySelectorAll('#ahc-truefalse .ahc-truefalse__btn');
    btns.forEach(b => { b.disabled = true; });
    const isRight = (chosen === correct);
    btns.forEach(b => {
        if (b.getAttribute('data-val') === String(correct)) b.classList.add('ahc-truefalse__btn--correct');
    });
    if (!isRight) {
        btns.forEach(b => { if (b.getAttribute('data-val') === String(chosen)) b.classList.add('ahc-truefalse__btn--incorrect'); });
    }
    fb.className = 'ahc-truefalse__feedback ' + (isRight ? 'ahc-truefalse__feedback--ok' : 'ahc-truefalse__feedback--ko');
    fb.textContent = isRight
        ? (currentLanguage === 'es' ? '¡Exacto! El ritmo actual de calentamiento es causado directamente por la actividad humana.' : 'Exacte! El ritme actual d\'escalfament és causat directament per l\'activitat humana.')
        : (currentLanguage === 'es' ? 'Cuidado. Existe un consenso científico absoluto de que el calentamiento global actual es acelerado por nuestras emisiones.' : 'Compte. Hi ha un consens científic absolut que l\'escalfament global actual és accelerat per les nostres emissions.');
    if (retry) retry.style.display = 'inline-block';
}
function resetTrueFalse() {
    const fb = document.getElementById('ahc-truefalse-feedback');
    const retry = document.getElementById('ahc-truefalse-retry');
    document.querySelectorAll('#ahc-truefalse .ahc-truefalse__btn').forEach(b => {
        b.disabled = false;
        b.classList.remove('ahc-truefalse__btn--correct', 'ahc-truefalse__btn--incorrect');
    });
    if (fb) { fb.textContent = ''; fb.className = 'ahc-truefalse__feedback'; }
    if (retry) retry.style.display = 'none';
}

// ==========================================================================
// FIND THE HOTSPOT (OA-07)
// ==========================================================================
let findFound = 0;
function findEnergy(btn) {
    if (btn.disabled) return;
    const correct = btn.getAttribute('data-correct') === 'true';
    const fb = document.getElementById('ahc-find-feedback');
    const score = document.getElementById('ahc-find-score');
    if (correct) {
        btn.classList.add('ahc-find__item--correct');
        btn.disabled = true;
        findFound++;
        if (score) score.textContent = findFound + ' / 4';
        if (fb) {
            fb.className = 'ahc-find__feedback ahc-find__feedback--ok';
            fb.textContent = (findFound === 4)
                ? (currentLanguage === 'es' ? '🎉 ¡Has identificado las 4 fuentes renovables!' : '🎉 Has identificat les 4 fonts renovables!')
                : (currentLanguage === 'es' ? '¡Excelente! Esta energía es clave para reducir nuestra huella de carbono.' : 'Excel·lent! Aquesta energia és clau per reduir la nostra petjada de carboni.');
        }
    } else {
        btn.classList.add('ahc-find__item--incorrect');
        if (fb) {
            fb.className = 'ahc-find__feedback ahc-find__feedback--ko';
            fb.textContent = currentLanguage === 'es' ? 'El carbón es una fuente fósil contaminante, no renovable.' : 'El carbó és una font fòssil contaminant, no renovable.';
        }
        setTimeout(() => btn.classList.remove('ahc-find__item--incorrect'), 600);
    }
}
function resetFind() {
    findFound = 0;
    document.querySelectorAll('#ahc-find-grid .ahc-find__item').forEach(b => {
        b.classList.remove('ahc-find__item--correct', 'ahc-find__item--incorrect');
        b.disabled = false;
    });
    const fb = document.getElementById('ahc-find-feedback');
    if (fb) { fb.textContent = ''; fb.className = 'ahc-find__feedback'; }
    const score = document.getElementById('ahc-find-score');
    if (score) score.textContent = '0 / 4';
}

// ==========================================================================
// DRAG THE WORDS (OA-08)
// ==========================================================================
const dragWordsData = {
    es: {
        segments: ['La ', ' se centra en reducir las emisiones de gases de efecto invernadero para evitar que el cambio climático empeore. Por otro lado, la ', ' busca ajustar nuestros sistemas y estilo de vida para enfrentar los impactos climáticos que ya son inevitables. Un ejemplo de mitigación es usar energía ', ', mientras que construir muros contra inundaciones es una medida de ', '.'],
        answers: ['mitigación', 'adaptación', 'solar', 'adaptación'],
        bank: ['mitigación', 'adaptación', 'adaptación', 'solar', 'emisiones']
    },
    ca: {
        segments: ['La ', ' es centra en reduir les emissions de gasos d\'efecte hivernacle per evitar que el canvi climàtic empitjori. D\'altra banda, l\'', ' busca ajustar els nostres sistemes i estil de vida per afrontar els impactes climàtics que ja són inevitables. Un exemple de mitigació és usar energia ', ', mentre que construir murs contra inundacions és una mesura d\'', '.'],
        answers: ['mitigació', 'adaptació', 'solar', 'adaptació'],
        bank: ['mitigació', 'adaptació', 'adaptació', 'solar', 'emissions']
    }
};
function initDragWords() {
    const d = dragWordsData[currentLanguage];
    const bank = document.getElementById('ahc-dragwords-bank');
    const text = document.getElementById('ahc-dragwords-text');
    const score = document.getElementById('ahc-dragwords-score');
    if (!bank || !text) return;
    if (score) score.textContent = '';
    let html = '';
    d.segments.forEach((seg, i) => {
        html += seg.replace(/&/g, '&amp;').replace(/</g, '&lt;');
        if (i < d.answers.length) html += `<span class="ahc-dragwords__blank" data-answer="${d.answers[i]}"></span>`;
    });
    text.innerHTML = html;
    bank.innerHTML = '';
    [...d.bank].map((w, idx) => ({ w, id: 'dw-' + idx })).sort(() => Math.random() - 0.5).forEach(o => {
        const el = document.createElement('span');
        el.className = 'ahc-dragword';
        el.textContent = o.w;
        el.id = o.id;
        el.draggable = true;
        el.addEventListener('dragstart', e => { e.dataTransfer.setData('text/plain', o.id); el.classList.add('ahc-dragword--dragging'); });
        el.addEventListener('dragend', () => el.classList.remove('ahc-dragword--dragging'));
        bank.appendChild(el);
    });
    const zones = [...document.querySelectorAll('#ahc-dragwords-text .ahc-dragwords__blank'), bank];
    zones.forEach(z => {
        z.addEventListener('dragover', e => { e.preventDefault(); z.classList.add('ahc-dragwords__blank--over'); });
        z.addEventListener('dragleave', () => z.classList.remove('ahc-dragwords__blank--over'));
        z.addEventListener('drop', e => {
            e.preventDefault();
            z.classList.remove('ahc-dragwords__blank--over');
            const word = document.getElementById(e.dataTransfer.getData('text/plain'));
            if (!word) return;
            if (z.classList.contains('ahc-dragwords__blank') && z.firstChild) bank.appendChild(z.firstChild);
            z.appendChild(word);
            word.classList.remove('ahc-dragword--correct', 'ahc-dragword--incorrect');
        });
    });
}
function checkDragWords() {
    const d = dragWordsData[currentLanguage];
    let correct = 0;
    document.querySelectorAll('#ahc-dragwords-text .ahc-dragwords__blank').forEach(blank => {
        const word = blank.querySelector('.ahc-dragword');
        if (word && word.textContent.trim() === blank.getAttribute('data-answer')) {
            correct++; word.classList.add('ahc-dragword--correct'); word.classList.remove('ahc-dragword--incorrect');
        } else if (word) {
            word.classList.add('ahc-dragword--incorrect'); word.classList.remove('ahc-dragword--correct');
        }
    });
    const score = document.getElementById('ahc-dragwords-score');
    if (score) score.textContent = (currentLanguage === 'es' ? 'Puntuación' : 'Puntuació') + ': ' + correct + ' / ' + d.answers.length;
}
function resetDragWords() { initDragWords(); }

// ==========================================================================
// ACCORDION (OA-09)
// ==========================================================================
function toggleAccordion(header) {
    const item = header.closest('.ahc-accordion__item');
    const open = item.classList.toggle('ahc-accordion__item--open');
    header.setAttribute('aria-expanded', open ? 'true' : 'false');
}

// ==========================================================================
// QUESTION SET (OA-10)
// ==========================================================================
let quizState = { idx: 0, score: 0, questions: [] };
function getQuizQuestions() {
    return currentLanguage === 'es' ? [
        { q: '¿Cuál de estos sectores genera más emisiones a nivel global?', options: ['Energía', 'Moda', 'Agricultura'], correct: 0 },
        { q: 'Plantar árboles es la única solución para frenar el cambio climático.', options: ['Verdadero', 'Falso'], correct: 1 }
    ] : [
        { q: 'Quin d\'aquests sectors genera més emissions a nivell global?', options: ['Energia', 'Moda', 'Agricultura'], correct: 0 },
        { q: 'Plantar arbres és l\'única solució per frenar el canvi climàtic.', options: ['Vertader', 'Fals'], correct: 1 }
    ];
}
function initQuizSet() {
    quizState = { idx: 0, score: 0, questions: getQuizQuestions() };
    renderQuizQuestion();
}
function renderQuizQuestion() {
    const body = document.getElementById('ahc-quizset-body');
    const prog = document.getElementById('ahc-quizset-progress');
    if (!body) return;
    const q = quizState.questions[quizState.idx];
    if (prog) prog.textContent = (currentLanguage === 'es' ? 'Pregunta' : 'Pregunta') + ' ' + (quizState.idx + 1) + ' / ' + quizState.questions.length;
    body.innerHTML = `
        <div class="ahc-quizset__question">${q.q}</div>
        <div class="ahc-quizset__options">
            ${q.options.map((opt, i) => `<button class="ahc-quizset__opt" onclick="answerQuiz(${i})">${opt}</button>`).join('')}
        </div>
    `;
}
function answerQuiz(i) {
    const q = quizState.questions[quizState.idx];
    const opts = document.querySelectorAll('#ahc-quizset-body .ahc-quizset__opt');
    opts.forEach(o => { o.disabled = true; });
    const right = (i === q.correct);
    if (right) quizState.score++;
    opts[i].classList.add(right ? 'ahc-quizset__opt--correct' : 'ahc-quizset__opt--incorrect');
    if (!right && opts[q.correct]) opts[q.correct].classList.add('ahc-quizset__opt--correct');
    setTimeout(() => {
        quizState.idx++;
        if (quizState.idx < quizState.questions.length) renderQuizQuestion();
        else renderQuizResult();
    }, 950);
}
function renderQuizResult() {
    const body = document.getElementById('ahc-quizset-body');
    const prog = document.getElementById('ahc-quizset-progress');
    const total = quizState.questions.length;
    const pass = quizState.score >= Math.ceil(total / 2);
    if (prog) prog.textContent = currentLanguage === 'es' ? 'Resultado' : 'Resultat';
    body.innerHTML = `
        <div class="ahc-quizset__result ${pass ? 'ahc-quizset__result--pass' : 'ahc-quizset__result--fail'}">
            <div class="ahc-quizset__result-icon">${pass ? '🏆' : '🔁'}</div>
            <div class="ahc-quizset__result-score">${quizState.score} / ${total}</div>
            <div class="ahc-quizset__result-msg">${pass
                ? (currentLanguage === 'es' ? '¡Aprobado! Has superado la evaluación final.' : 'Aprovat! Has superat l\'avaluació final.')
                : (currentLanguage === 'es' ? 'Necesitas al menos el 50%. ¡Inténtalo de nuevo!' : 'Necessites almenys el 50%. Torna-ho a provar!')}</div>
            <button class="btn-card" onclick="initQuizSet()">${currentLanguage === 'es' ? 'Reintentar' : 'Reintentar'}</button>
        </div>
    `;
}


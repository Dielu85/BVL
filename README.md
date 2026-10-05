# 🚒 BVL 12 Quiz - Portal de Capacitación Técnica
### Sociedad de Bomberos Voluntarios de Lanús • Cuartel 12

Plataforma web interactiva de entrenamiento, evaluación y afianzamiento de conocimientos técnicos y tácticos para el cuerpo activo y aspirantes de **Bomberos Voluntarios de Lanús - Cuartel 12**.

---

## 🌟 Características Principales

1. **Selección de Materias Técnicas Bomberiles (117 preguntas en total)**:
   - 🔧 **Materiales (C.B.I. Lección N°4)**: Mangas (urdimbre/trama, PVC, Hypalon, devanaderas), acoples (Storz DIN/NEN, Whitworth, adaptadores, reducciones sin amplificación), lanzas (troncocónica, AWG, Nepiro, caudal regulable), columna hidráulica portátil, hidrantes de piso y tomas de autobomba, escaleras y herramientas de zapa (Halligan, hachas, palas).
   - 🔥 **Incendio Estructural (C.B.I.)**: Fuego en construcciones, 4 etapas (incipiente, crecimiento, libre combustión, latente), plano neutro, rollover/flameover, flashover, backdraft, tipos de chorro (pleno, niebla, protección), técnicas de ataque (directo, indirecto, mixto, 3D), 6 reglas generales y ventilación (VPP, VPN, hidráulica).
   - 📻 **Comunicaciones y Planillas (C.B.I. Lección N°6)**: Código Q en BVL (QRV, QRX, QAP, QSO, QTC, QTH, QSL), código numérico (0 al 9), código fonético internacional, equipos base/móviles/portátiles, uso de micrófono (25-30 cm a 45°), Panoramas 1 a 4 para incendios, modulación de salidas y regresos, y actas de entrega y aprovisionamiento de agua.
   - 🏛️ **Historia y Organización (C.B.I. Lección N°1)**: Fundación de BVL el 20 de septiembre de 1913, Tomás Liberti y La Boca en 1884, Armando Mamberti (único caído en acto de servicio), Destacamento N°1 (Villa Mauricio) y Destacamento N°2 (Villa Urquiza), H.C.D. y Cuerpo Activo, Regional Operativa N°1 y Federación Bonaerense.
   - 🎖️ **Orden Interno y Jerarquías (C.B.I. Lección N°1 & Ley 25054)**: Uniformes (fajina, gala, EPP, especiales), Escalafón Jerárquico del Sistema Nacional (Oficiales Superiores, Jefes, Subalternos, Suboficiales y Bomberos), voces de mando (preventiva y ejecutiva), movimientos a pie firme (firmes, descanso, alinearse, giros, saludos 1 y 2, marcha y cambio de mando).
   - ☣️ **Materiales Peligrosos (HazMat / PRIMAP)**: Uso de la Guía GRE, placas ONU, diamante NFPA 704, zonas de trabajo (caliente, tibia, fría) y niveles de protección química.
   - 🚑 **Socorrismo y Primeros Auxilios**: Protocolo XABCDE, RCP de alta calidad (30:2), uso de DEA, control de hemorragias exanguinantes con torniquete y cálculo de quemaduras.
   - 🚗 **Rescate Vehicular y Extricación**: Bloqueo angular de seguridad vial con autobomba, estabilización, corte de energía, distancias de seguridad ante airbags y riesgos en vehículos híbridos/eléctricos.
   - 🤿 **EPP y ERA**: Componentes del equipo de respiración, presión positiva, regla de los tercios para gestión de aire y sistema de alerta PASS.
   - 💧 **Hidráulica y Operación de Bombas**: Presión en boquillas, golpe de ariete, pérdidas por fricción y límites de aspiración.

2. **Dificultad Dinámica y Condicional**:
   - Para materias escalonadas: selección de **Básico / Aspirante**, **Intermedio / Bombero**, **Avanzado / Suboficial** o **Desafío Combinado**.
   - Para materias con programa estándar unificado: el sistema reconoce automáticamente la condición y ofrece el **Nivel Único General** directamente.

3. **Mecánica del Quiz & Aprendizaje Activo**:
   - Preguntas basadas en normativas vigentes (Academia Nacional de Bomberos, Cartillas de Federación Bonaerense y normas NFPA).
   - **Explicación didáctica inmediata**: al responder cada pregunta, el sistema explica el fundamento operativo y la referencia reglamentaria para aprender de cada acierto o error.
   - **Modo Contrarreloj (30s)** opcional para simular la toma rápida de decisiones bajo estrés de guardia, o **Modo Práctica** sin tiempo.
   - Efectos sonoros sintetizados nativos con **Web Audio API** (sin descargas de archivos externos) con botón de silenciar.

4. **Calificación Bomberil y Revisión Pedagógica**:
   - Evaluación porcentual y veredicto operativo (Sobresaliente, Aprobado con Distinción, Aprobado Operativo o Reentrenamiento).
   - Animación de confeti al superar el 80%.
   - Revisión detallada de todas las preguntas de la sesión con sus respuestas y justificaciones.

5. **Gestor de Preguntas para Instructores (Persistente)**:
   - Permite a los instructores del cuartel cargar nuevas preguntas con sus 4 opciones, marcar la correcta y redactar la explicación técnica.
   - Se guardan automáticamente en el navegador (`LocalStorage`).
   - Opción para exportar o copiar todo el banco de preguntas en formato `.JSON`.

6. **Historial de Estadísticas**:
   - Registro de exámenes realizados, efectividad porcentual global, preguntas respondidas y calificaciones perfectas.

---

## 🚀 Cómo Ejecutar en Tu Computadora

1. Abrí una terminal en la carpeta del proyecto.
2. Si ejecutás en Windows PowerShell:
   ```powershell
   npm.cmd install
   npm.cmd run dev
   ```
3. Abrí en tu navegador la dirección local que aparece en la consola (usualmente `http://localhost:5173`).

---

## 📦 Compilación para Producción

Para generar los archivos estáticos listos para subir a cualquier servidor o hosting web:
```powershell
npm.cmd run build
```
Los archivos optimizados se generarán en la carpeta `dist/`.

---

## 🌐 Publicación Gratuita para el Cuartel (Vercel / Netlify / GitHub Pages)

Para que todos los bomberos del Cuartel 12 puedan acceder desde sus teléfonos móviles en cualquier momento:

1. **Opción Vercel (Recomendada - 1 click)**:
   - Creá una cuenta gratuita en [Vercel](https://vercel.com).
   - Subí el proyecto a GitHub o arrastrá la carpeta `dist` directamente a Vercel Dashboard.
   - Te otorgará un enlace público inmediato (ej: `bvl12-quiz.vercel.app`) y un código QR para pegar en la cartelera de la guardia.

---

### *“Valoramos el sacrificio y esfuerzo de los integrantes que pasaron por sus filas. Todos perteneces a su historia y dejaron algo en su esencia.”*
**Bomberos Voluntarios de Lanús • Cuartel 12**

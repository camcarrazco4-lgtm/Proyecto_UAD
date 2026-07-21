# 👁️ Proyecto Arcilla: Estética Surrealista (Hylics)

Un proyecto escolar de desarrollo web centrado en la exploración visual y la manipulación del DOM mediante CSS avanzado y SVG. El objetivo principal fue escapar del diseño web tradicional (limpio y corporativo) para recrear una estética de **claymation (plastilina stop-motion), weirdcore y surrealismo**, fuertemente inspirada en el videojuego *Hylics* de Mason Lindroth.

## 🧠 Características Técnicas

*   **Deformación Orgánica (SVG Filters):** Uso de `feTurbulence` y `feDisplacementMap` inyectados en el HTML para distorsionar físicamente los bordes de los contenedores CSS, dándoles una apariencia grumosa de arcilla modelada a mano.
*   **Claymorphism Extremo:** Uso de múltiples sombras interiores (`inset box-shadow`) para simular la iluminación, volumen y textura "grasosa" de la plastilina.
*   **Animación Stop-Motion (Jitter):** Implementación de una animación global infinita (`@keyframes jitter`) que desplaza los elementos 1px en direcciones aleatorias, rompiendo la fluidez digital para simular fotogramas imperfectos.
*   **Tipografía Esotérica:** Integración de fuentes de Google Fonts (*Averia Serif Libre* y *UnifrakturMaguntia*) que complementan la vibra analógica y RPG retro.
*   **Atmósfera Inmersiva:** Soporte para cursores personalizados asimétricos y loops de audio en reproducción automática.

## 📂 Estructura del Proyecto

Asegúrate de que tus archivos locales respeten esta jerarquía para que las rutas funcionen correctamente:

```text
/mi-proyecto-surrealista
│
├── index.html          # Estructura principal y filtro SVG oculto
├── css/
│   └── styles.css      # Lógica visual, paleta terrosa y animaciones
├── images/
│   ├── cursor.png      # (Opcional) Cursor de plastilina personalizado
│   └── ...             # Imágenes con filtros CSS aplicados
├── audio/
│   └── loop.mp3        # Pista ambiental para inmersión
└── video/
    └── mi-video.mp4    # Contenido multimedia integrado

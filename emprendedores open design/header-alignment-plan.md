# Plan de ajuste — cabecera Soy Emprendedor UVP

## Intención

Colocar el logo y los enlaces principales en una sola línea y centrar el conjunto completo dentro de la página, sin modificar contenido, paleta, tipografía, navegación móvil ni ninguna otra sección.

## Alcance confirmado

- Archivo objetivo: `soy-emprendedor-uvp.html`.
- Región objetivo: `header.site-header` (`[data-od-id="site-header"]`).
- Elementos incluidos: enlace de marca, imagen de logo y bloque de enlaces de navegación.
- Fuera de alcance: hero, secciones de contenido, pie de página, tokens globales, textos y enlaces del menú.

## Problema observado

El logo y los enlaces usan desplazamientos inline independientes. Esto los posiciona visualmente, pero no forma un grupo centrado ni garantiza una alineación estable al cambiar el ancho de la ventana.

## Cambio propuesto

1. Conservar la estructura semántica del `nav` y todos los enlaces existentes.
2. En escritorio, convertir el contenedor de navegación en una fila horizontal centrada.
3. Eliminar solo los desplazamientos inline que separan artificialmente el logo y el menú.
4. Mantener el botón de menú y el panel desplegable móvil tal como están definidos en el breakpoint actual.
5. Verificar que el grupo logo + menú no se desborde y que los enlaces mantengan sus estados de foco y hover.

## Criterios de aceptación

- Logo y menú aparecen en la misma línea en escritorio.
- El centro geométrico del grupo completo coincide con el centro de la página.
- No cambia el orden, texto ni destino de los enlaces.
- El menú móvil sigue usando el botón `Menú` y su desplegable.
- No se modifican estilos ni elementos fuera de `site-header`.

## Riesgos y decisiones

- La suma de logo y enlaces cabe en el ancho de escritorio actual; el breakpoint móvil existente protege anchos reducidos.
- TODO: revisar visualmente la cabecera una vez aplicado el cambio antes de publicarlo.

## Estado

- Aplicado: la navegación de escritorio utiliza una sola fila flex centrada.
- Aplicado: se eliminaron los desplazamientos manuales del logo y del menú.
- Pendiente: validación visual final de la cabecera en escritorio y móvil.

## Próximo paso

Revisa la cabecera actualizada. Si quieres otro espaciamiento entre logo y enlaces, indica la separación deseada.

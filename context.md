# Airbnb UI Clone Architecture 

## 1. Descripción del Proyecto y Objetivos del Usuario
reconstruir el frontend de una plataforma de alquiler vacacional clonando la interfaz de producción de Airbnb para validar la arquitectura de componentes. El usuario final es un viajero que busca explorar alojamientos, filtrar por categorías, ver catálogos de resultados y revisar los detalles específicos de una propiedad para realizar una reserva.

## 2. Stack Tecnológico y Reglas del Proyecto
*   **Framework:** Next.js 16 con App Router (`/app`)
*   **Lenguaje y Estilos:** TypeScript y Tailwind CSS (exclusivamente clases de utilidad, sin objetos `style={{}}` en línea)
*   **Diseño Mobile-First:** Desarrollo inicial para un viewport de 375px, adaptando a escritorio a partir de los 768px
*   **Restricciones de Librerías:** Prohibido el uso de librerías de componentes preconstruidas (como shadcn, MUI, Ant Design)
*   **Calidad de Código:** 
    *   Cada componente debe vivir en su propio archivo dentro de la carpeta `/components`
    *   Únicamente componentes funcionales definidos con `const` (sin componentes de clase)
    *   Ningún componente debe superar las ~80 líneas de JSX y lógica; de ser así, debe dividirse manteniendo una única responsabilidad
    *   Definir tipos e interfaces de TypeScript para las estructuras de datos principales (alojamiento, habitación)
*   **Navegación:** Usar exclusivamente el componente `<Link>` de Next.js para toda transición entre vistas. Prohibido usar etiquetas `<a href="...">` planas para evitar recargas completas del navegador
* Describe todo en idioma español.
* Toma las referencias visuales de las imagenes para definir fuentes y colores.

## 3. Estado Global y Gestión de Datos
*   Implementar `useState` en al menos tres casos distintos (ej. filtrado por búsqueda, categoría activa, orden de resultados, contador de huéspedes o índice de la galería de fotos)
*   Implementar `useEffect` para simular la carga de datos al montar componentes en al menos dos páginas, utilizando `setTimeout` y mostrando un estado de carga visible (`isLoading`) mientras los datos no están disponibles
*   Los datos serán *mocks* locales estructurados simulando rentas vacacionales en zonas de playa.

## 4. Arquitectura de Vistas y Componentes (Feature-Based)

### Globales / Layout (`/components/ui` o `/components/layout`)
*   `Navbar`: Barra de navegación superior. Incluye logo, iconos del menú de usuario y un campo de búsqueda que usa `useState` para guardar el texto escrito y filtrar tarjetas visibles en tiempo real
*   `MobileBottomNav`: Barra de navegación inferior visible solo en la vista móvil, con accesos a Explorar, Favoritos e Iniciar sesión
*   `PropertyCard`: Componente principal reutilizable (en Home y Catálogo) que muestra el placeholder de la foto, título, descripción/fechas, precio por noche y valoración con estrellas Al hacer clic, debe navegar a la página de detalle

### Vista 1: Página de Inicio (`/`)
*   `CategoryFilter`: Fila horizontal debajo del navbar con iconos y etiquetas (Playa, Mansiones, Tendencias, etc.). Usa `useState` para guardar la categoría activa y resaltarla visualmente
*   `ListingsGrid`: Cuadrícula responsiva que renderiza los `PropertyCard`. Debe mostrarse en una sola columna en móvil y expandirse a varias columnas en escritorio[cite: 3]. Implementa `useEffect` para simular la carga inicial de datos

### Vista 2: Página de Catálogo (`/catalog`)
*   `ResultsHeader`: Cabecera que muestra el número total de resultados y un control de ordenación (Ascendente / Descendente por precio) gestionado con `useState` para reordenar las tarjetas mostradas en consecuencia
*   `MapArea`: Área de mapa ubicada a la derecha de la lista de tarjetas (en escritorio) o debajo de las tarjetas (en móvil). Por defecto es un *placeholder* gris estilizado (Reto opcional: integrar un mapa interactivo real usando coordenadas con `react-leaflet` o Google Maps)

### Vista 3: Detalle de Habitación (`/rooms/[id]`)
Requiere incluir un botón de volver o *breadcrumb* para regresar de forma fluida al Catálogo. Usa `useEffect` para cargar los datos de la habitación cuando el componente se monta usando el `id` de la URL, simulando el retraso con un indicador de carga
*   `ImageGallery`: Galería superior. Usa `useState` para guardar el índice de la foto actualmente visible y añade botones Anterior/Siguiente para navegar por un array de placeholders de fotos
*   `ListingHeader`: Cabecera del alojamiento con el título principal, valoración con estrellas, número de reseñas y ubicación
*   `HostProfile`: Fila o tarjeta de información con el placeholder del avatar, nombre del anfitrión y años como anfitrión (ej. Superanfitrión)
*   `AmenitiesList`: Sección de servicios ofrecidos renderizada como una cuadrícula de pares de icono + etiqueta
*   `BookingWidget`: Tarjeta de reserva (se comporta de manera fija/adhesiva en la parte inferior en móvil). Muestra el precio por noche, un contador de huéspedes (controlado con `useState` para aumentar/reducir dentro de un rango mín/máx) y un botón CTA para reservar (Reto opcional: Añadir campos funcionales de fecha de entrada/salida y calcular el precio total)
Nota:
- toma referencia de las imagenes adjuntas en la carpeta referencias-visuales.
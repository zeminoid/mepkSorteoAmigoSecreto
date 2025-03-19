

# Amigo Secreto

## Descripción
**Amigo Secreto** es una aplicación web sencilla diseñada para facilitar la organización de un intercambio de regalos mediante el sorteo de un "amigo secreto". Los usuarios pueden agregar nombres de amigos a una lista y realizar un sorteo aleatorio para seleccionar un amigo secreto. La aplicación incluye validaciones básicas, una interfaz amigable y un diseño estilizado.

Este proyecto fue creado como parte de un desafío de programación para practicar habilidades en JavaScript, manipulación del DOM, HTML y CSS. Utiliza un enfoque modular con commits separados para cada funcionalidad, lo que permite ver el progreso del desarrollo en el historial de Git.

## Características
- **Agregar Nombres**: Los usuarios pueden ingresar nombres de amigos mediante un campo de texto y un botón "Agregar Amigo".
- **Validación de Entrada**: Se muestra una alerta si el campo de texto está vacío.
- **Visualización de la Lista**: Los nombres ingresados se muestran dinámicamente en una lista.
- **Sorteo Aleatorio**: Selecciona un nombre aleatorio de la lista como "amigo secreto" al hacer clic en el botón "Sortear Amigo Secreto".
- **Interfaz Estilizada**: Incluye un diseño limpio con estilos CSS y un ícono personalizado para el botón de sorteo.

## Tecnologías Utilizadas
- **HTML5**: Para la estructura de la página web.
- **CSS3**: Para los estilos y diseño visual.
- **JavaScript**: Para la lógica de la aplicación, incluyendo la gestión de la lista y el sorteo.
- **Git y GitHub**: Para el control de versiones y alojamiento del repositorio.

## Estructura del Proyecto
```
mepkSorteoAmigoSecreto/
├── assets/
│   ├── play_circle_outline.png  # Ícono para el botón de sortear
│   ├── amigo-secreto.png        # Imagen ilustrativa de un amigo secreto
├── index.html                   # Estructura HTML de la aplicación
├── styles.css                   # Estilos CSS de la aplicación
├── app.js                       # Lógica JavaScript para la funcionalidad
├── README.md                    # Documentación del proyecto
└── .vscode/
    └── settings.json            # Configuración de Live Server (puerto 5501)
```

## Requisitos
- Un navegador web moderno (Chrome, Firefox, Edge, etc.).
- Editor de código como Visual Studio Code (recomendado).
- Git instalado para clonar el repositorio.
- Extensión "Live Server" para Visual Studio Code (opcional, para pruebas en tiempo real).

## Instalación
1. **Clona el Repositorio**:
   ```bash
   git clone https://github.com/tu-usuario/mepkSorteoAmigoSecreto.git
   ```
   (Nota: Reemplaza `tu-usuario` con tu nombre de usuario de GitHub una vez que subas el proyecto.)

2. **Navega al Directorio del Proyecto**:
   ```bash
   cd mepkSorteoAmigoSecreto
   ```

3. **Abre el Proyecto**:
   - Si usas Visual Studio Code, abre la carpeta con:
     ```bash
     code .
     ```
   - Alternativamente, abre `index.html` directamente en tu navegador para ver la aplicación.

4. **(Opcional) Configura Live Server**:
   - Si usas VS Code, asegúrate de tener la extensión "Live Server" instalada.
   - El archivo `.vscode/settings.json` configura Live Server para usar el puerto 5501. Haz clic derecho en `index.html` y selecciona "Open with Live Server" para probar la aplicación.

## Uso
1. **Agregar Amigos**:
   - Escribe el nombre de un amigo en el campo de texto.
   - Haz clic en el botón **Agregar Amigo** para añadir el nombre a la lista.

2. **Ver la Lista de Amigos**:
   - Los nombres se mostrarán automáticamente en una lista debajo del campo de entrada.

3. **Sortear un Amigo Secreto**:
   - Una vez que tengas al menos un nombre en la lista, haz clic en el botón **Sortear Amigo Secreto** (con el ícono de "play").
   - El resultado aparecerá en la sección "Resultado", indicando el amigo secreto seleccionado.

### Ejemplo
- Agrega los nombres: "Ana", "Juan", "María".
- La lista mostrará:
  - Ana
  - Juan
  - María
- Haz clic en "Sortear Amigo Secreto".
- El resultado podría ser: "El amigo secreto sorteado es: Juan".

## Capturas de Pantalla
(Nota: Puedes añadir capturas de pantalla aquí si deseas. Por ejemplo, una imagen de la interfaz con la lista de amigos y el resultado del sorteo.)

## Desarrollo
El proyecto se desarrolló en etapas, con un commit por cada funcionalidad implementada. El historial de commits refleja el progreso:

- **Commit 1**: Inicialización del proyecto con `README.md` y estructura básica.
- **Commit 2**: Creación del array `amigos` para almacenar nombres.
- **Commit 3**: Implementación de la función `agregarAmigo()` para añadir nombres con validación.
- **Commit 4**: Implementación de la función `actualizarListaAmigos()` para mostrar la lista dinámicamente.
- **Commit 5**: Implementación de la función `sortearAmigo()` para realizar el sorteo aleatorio.
- **Commit 6**: Corrección de rutas de imágenes y ajustes finales en `index.html` y `styles.css`.


## Problemas Resueltos
- **Imágenes no cargaban**: Se corrigieron las rutas de la carpeta `assets` para que las imágenes (`play_circle_outline.png` y `amigo-secreto.png`) se cargaran correctamente.
- **Estilos incorrectos**: Se verificó que `styles.css` se cargara correctamente y se ajustaron los estilos para que la interfaz tuviera el diseño esperado.






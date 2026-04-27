# API de maquillaje
TP2 TLP III (React Native).

## Requisitos Previos
- Node.js instalado.
- Base de datos MySQL corriendo.

## Instalación y Ejecución

### 1. Backend
- Ir a la carpeta `backend`.
- Ejecutar `npm install`.
- Crear un archivo `.env` con tus credenciales de DB (DB_NAME, DB_USER, DB_PASSWORD, DB_DIALECT=mysql, PORT=3000).
- Ejecutar `npm run dev`.

### 2. Frontend
- Ir a la carpeta `frontend`.
- Ejecutar `npm install`.
- Ejecutar `npm run dev`.

### Context API
Se creó un archivo `MakeupContext.jsx` que define el **MakeupProvider**. Este componente envuelve a toda la aplicación (`main.jsx`), permitiendo que cualquier componente hijo acceda al estado global sin necesidad de pasar props manualmente (*prop drilling*).

### useReducer
Para gestionar la lógica de los datos, se implementó un **Reducer**. Este centraliza todas las modificaciones del estado en una única función que responde a los siguientes tipos de acciones:
* **`SET_MAKEUPS`**: Carga la lista inicial desde el servicio.
* **`ADD_MAKEUP`**: Agrega un nuevo producto con un ID único generado con `Date.now()`.
* **`DELETE_MAKEUP`**: Elimina un producto filtrando por su ID.
* **`UPDATE_MAKEUP`**: Busca un producto por ID y actualiza sus valores.

### Hook 
Se exportó la función `useMakeup`, lo que facilita el consumo del contexto en componentes como `MakeupForm` y `MakeupItem` de forma limpia y legible:
```javascript
const { state, dispatch } = useMakeup();
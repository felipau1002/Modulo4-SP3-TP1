# Trabajo práctico N° 1 - Sprint 3

## Enlace: (https://catalogo-videojuegos-sp3.netlify.app/)

## Qué es

Pagina web de tienda de videojuegos, donde se pueden seleccionar todos los juegos deseados con su cantidad deseada y realizar un pedido a traves de un form para confirmar la compra


## Mis contextos

Son dos: CarritoContext, que dentro consume el custom hook del carrito donde estan todas las funciones para modificar el carrito y ademas crea dos estados, uno para establecer la vista que muestre la aplicacion, y otro para guardar los datos del comprador.
Tambien está ThemeContext que simplemente crea un estado con clave y valor para guardar en el local storage y despues usa un effect para indicarle al html que clases usar cuando esta en claro o oscuro


## Mis hooks

Son cuatro: el carrito, que se usa en el contexto del mismo y tiene todas las funciones para modificar el carrito. El input, que hace que react redibuje cada vez que alguien escribe en el buscador y filtra los juegos de la pagina para que coincidan con lo que se escribe alli. El localStorage, que recibe una clave y un valor y los guarda en el local storage para que no se borren al recargar. Y el toggle, que simplemente hace que un valor cambie al opuesto cuando se utiliza.


## Decisiones de estado

Ademas de useCarrito, no puse ningun estado en un contexto simplemente por falta de tiempo y porque no era prioridad para este trabajo (useInput y useToggle)


# Prop drilling

Antes de crear el contexto para el carrito tenia que pasar como prop todas las funciones del custom hook a tarjetas, despues a seccionTarjetas y por ultimo importarlas en app para que seccionTarjetas las reciba, al igual que en el panelWishlist.


## Como ejecutarlo

npm i && npm run dev


## Herramientas utilizadas

- Visual Studio Code
- React (useState, useEffect, useContext)
- TailwindCSS
- Chat ia de visual studio code
- React hook form


## Qué hizo la ia

Para este tp, la ia me ayudo creando e implementando los temas de tailwind para la pagina cuando este en tema oscuro o claro y tambien para modificar el json y agregar precio y cantidad a cada objeto. Por ultimo, la utilice como ayuda para saber como guardar el nombre puesto en el formulario de checkout y reutilizarlo en la vista de confirmacion.
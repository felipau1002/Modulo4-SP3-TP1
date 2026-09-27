import useLocalStorage from './useLocalStorage'


function useCarrito() {

    const [carrito, setCarrito] = useLocalStorage('juegos:carrito', [])


    // operacion para deducir la cantidad total de juegos añadidios al carrito
    const cantidadTotal = carrito.reduce((acumulador, juego) => acumulador + juego.cantidad, 0)


    // operacion para deducir el precio total del carrito
    const precioTotal = carrito.reduce((acumulador, juego) => acumulador + (juego.precio * juego.cantidad), 0)


    // esta funcion verifica si el juego que se quiere agregar existe o no en la lista
    const estaEnCarrito = (id) => {
        return carrito.some((juego) => juego.id === id)
    }


    // esta funcion agrega un juego nuevo al carrito solo si no existe en la lista, si ya existe agrega uno mas a la cantidad total
    const agregarACarrito = (juego) => {
        const juegoYaExiste = carrito.find(
            (i) => i.id === juego.id
        ) 

        if(juegoYaExiste) {
            if(juegoYaExiste.cantidad >= juego.stock) {
                return
            }

            setCarrito(
                carrito.map(
                    (item) => item.id === juego.id
                    ? {
                        ...item,
                        cantidad: item.cantidad + 1
                    }
                    : item
                )
            )
        } else {
            setCarrito([
                ...carrito,
                {
                    ...juego,
                    cantidad: 1
                }
            ])
        }
    }

    // esta funcion quita un juego de la lista segun el id del juego
    const quitarDeCarrito = (id) => {
        setCarrito((prev) => prev.filter((i) => i.id !== id))
    }


    const vaciarCarrito = () => {
        if (confirm('Seguro que queres vaciar tu carrito?')) {
            setCarrito([])
        }
    }


    // esta funcion sirve para modificar la cantidad de un juego en el carrito, y si llega a 0 lo elimina
    const cambiarCantidad = (id, nuevaCantidad) => {
        if(nuevaCantidad <= 0) {
            quitarDeCarrito(id)
            return
        }

        setCarrito(
            carrito.map(
                (juego) => juego.id === id
                    ? {...juego, cantidad: nuevaCantidad}
                    : juego
            )
        )
    } 

    
    const totalCarrito = carrito.length


    return { carrito, setCarrito, cantidadTotal, precioTotal, estaEnCarrito, agregarACarrito, quitarDeCarrito, vaciarCarrito, cambiarCantidad, totalCarrito }
}

export default useCarrito
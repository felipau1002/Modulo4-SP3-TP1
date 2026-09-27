import { useCarritoContext } from "../contexts/CarritoContext"
import { formatearPrecio } from "../utils/formatearPrecio"


const Tarjetas = ({ juego }) => {

  const { carrito, estaEnCarrito, agregarACarrito, cambiarCantidad } = useCarritoContext()

  const juegoEnCarrito = carrito.find(
    (item) => item.id === juego.id
  ) 

  const enCarrito = estaEnCarrito(juego.id)

  // tarjeta quer muestra cada juego de la lista
  return (
    <>
      <div className="group flex h-full flex-col items-center gap-3 rounded-xl border border-borde/80 bg-superficie p-3 text-texto shadow-lg shadow-black/10 transition duration-300 hover:-translate-y-1 hover:border-acento/60 hover:bg-superficie-elevada sm:p-4">
        <div className="relative w-full overflow-hidden rounded-lg bg-fondo aspect-2/3">
          <img src={juego.imagen} alt={juego.nombre} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
          {juego.esNuevo && <span className="absolute left-2 top-2 rounded-md bg-acento px-2 py-1 text-[10px] font-extrabold uppercase tracking-wider text-fondo">Nuevo</span>}
        </div>

        <h3 className="line-clamp-2 min-h-12 text-center text-sm font-extrabold leading-6 sm:text-base">{juego.nombre}</h3>

        <p className="text-center text-base font-extrabold text-acento">{formatearPrecio(juego.precio)}</p>

        <p className="text-xs font-semibold text-texto-suave">{juego.lanzamiento}</p>

        {enCarrito ? (
          <div className="mt-auto flex w-full items-center justify-between rounded-lg border border-borde bg-fondo px-2 py-1.5">
            <button type="button" aria-label={`Quitar ${juego.nombre} de la wishlist`} onClick={() => cambiarCantidad(juego.id, juegoEnCarrito.cantidad - 1)} className="flex size-8 items-center justify-center rounded-md border border-borde bg-superficie text-lg font-bold text-peligro transition hover:border-peligro hover:bg-peligro/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-peligro">
              -
            </button>

            <span className="min-w-8 text-center text-sm font-extrabold tabular-nums text-texto" aria-live="polite">{juegoEnCarrito.cantidad}</span>

            <button type="button" aria-label={`Agregar otra unidad de ${juego.nombre}`} onClick={() => agregarACarrito(juego)} className="flex size-8 items-center justify-center rounded-md border border-borde bg-superficie text-lg font-bold text-acento transition hover:border-acento hover:bg-acento/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-acento">
              +
            </button>
          </div>
        ) : (
          <button
            onClick={() => agregarACarrito(juego)}
            className="mt-auto w-full rounded-lg bg-acento px-3 py-2 text-xs font-bold text-fondo transition hover:bg-acento-fuerte hover:text-texto"
          >
            Agregar a tu carrito
          </button>
        )}
      </div>
    </>
  )
}

export default Tarjetas
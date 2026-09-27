import { useCarritoContext } from "../contexts/CarritoContext"
import { VISTAS } from "../data/vistas"
import { formatearPrecio } from "../utils/formatearPrecio"


const PanelWishlist = ({ useToggle }) => {

    const { carrito, cambiarCantidad, agregarACarrito, vaciarCarrito, setVista, precioTotal, totalCarrito } = useCarritoContext()

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#071019]/75 p-4 backdrop-blur-sm">
        <div className="flex max-h-[calc(100dvh-2rem)] w-full max-w-xl flex-col overflow-hidden rounded-2xl border border-borde bg-superficie text-texto shadow-2xl shadow-black/40">
            <div className="flex shrink-0 items-center justify-between border-b border-borde px-5 py-4 sm:px-6">
                <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-acento">Colección personal</p>
                    <h2 className="mt-1 text-xl font-extrabold">Mi Carrito <span className="text-texto-suave">({totalCarrito})</span></h2>
                </div>
                <button onClick={useToggle} aria-label="Cerrar" className="rounded-lg border border-borde px-3 py-1 text-xl leading-none text-texto-suave transition hover:border-acento hover:text-acento">
                    ×
                </button>
            </div>
        

            { carrito.length > 0 ? (

                <ul className="flex min-h-0 flex-col gap-2 overflow-y-auto p-4 sm:p-6">
                    {carrito.map((juego) => (

                        <li key={juego.id} className="flex items-center justify-between gap-3 rounded-lg border border-borde/70 bg-fondo px-3 py-2">
                            <div className="flex min-w-0 items-center gap-3">
                                <img className="h-14 w-10 shrink-0 rounded object-cover" src={juego.imagen} alt={juego.nombre}></img>
                                <h3 className="truncate text-sm font-bold">{juego.nombre}</h3>
                            </div>

                            <div className="mt-auto flex items-center justify-between rounded-lg border border-borde bg-fondo px-2 py-1.5">
                                <button onClick={() => cambiarCantidad(juego.id, juego.cantidad - 1)} className="flex size-8 items-center justify-center rounded-md border border-borde bg-superficie text-lg font-bold text-peligro transition hover:border-peligro hover:bg-peligro/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-peligro">
                                    -
                                </button>
                                <span className="px-4">{juego.cantidad}</span>
                                <button onClick={() => agregarACarrito(juego)} aria-label="Sumar uno" className="flex size-8 items-center justify-center rounded-md border border-borde bg-superficie text-lg font-bold text-acento transition hover:border-acento hover:bg-acento/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-acento">
                                    +
                                </button>
                            </div>
                        </li>

                    ))}
                </ul>
                
            ) : (
                <p className="px-5 py-12 text-center text-sm text-texto-suave">Tu carrito está vacío</p>
            )}

            <div className="shrink-0 border-t border-borde px-4 py-4 sm:px-6">
                <button onClick={vaciarCarrito} className="w-full rounded-lg border border-peligro/60 px-4 py-2.5 text-sm font-bold text-peligro transition hover:bg-peligro hover:text-fondo">
                    Vaciar carrito
                </button>

                <button onClick={() => {
                    totalCarrito === 0 ? alert('Agrega al menos un juego para comprar') : setVista(VISTAS.CHECKOUT)
                }} className="mt-3 w-full border border-acento/90 rounded-lg px-3 py-2 text-xs font-bold text-acento transition hover:bg-acento hover:text-fondo">
                    Comprar - {formatearPrecio(precioTotal)}
                </button>
                
            </div>

        </div>
    </div>
  )
}

export default PanelWishlist
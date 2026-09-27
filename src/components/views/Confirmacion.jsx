import { useCarritoContext } from "../../contexts/CarritoContext"
import { VISTAS } from "../../data/vistas"
import { formatearPrecio } from "../../utils/formatearPrecio"


const Confirmacion = () => {
  const { setVista, compra } = useCarritoContext()

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-3xl items-center px-4 py-10 sm:px-6">
      <section className="w-full rounded-2xl border border-borde bg-superficie p-6 text-center shadow-xl shadow-black/10 sm:p-10">
        <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-acento/10 text-3xl font-extrabold text-acento" aria-hidden="true">✓</div>
        <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-acento">Pedido recibido</p>
        <h1 className="mt-2 text-3xl font-extrabold text-texto sm:text-4xl">¡Compra confirmada!</h1>
        <p className="mt-3 text-texto-suave">Gracias, <span className="font-bold text-texto">{compra.nombre}</span>. Ya estamos preparando tu pedido.</p>

        <div className="mt-8 rounded-xl border border-borde bg-fondo p-4 text-left sm:p-5">
          <div className="flex flex-wrap items-start justify-between gap-3 border-b border-borde pb-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-texto-suave">Entrega</p>
              <p className="mt-1 font-bold text-texto">{compra.metodoEnvio === 'envio' ? 'Envío a domicilio' : 'Retiro en local'}</p>
              {compra.direccion && <p className="mt-1 text-sm text-texto-suave">{compra.direccion}</p>}
            </div>
            <div className="text-left sm:text-right">
              <p className="text-xs font-bold uppercase tracking-wider text-texto-suave">Total</p>
              <p className="mt-1 text-lg font-extrabold text-acento">{formatearPrecio(compra.total)}</p>
            </div>
          </div>

          <h2 className="mt-4 text-sm font-extrabold text-texto">Juegos del pedido</h2>
          <ul className="mt-2 divide-y divide-borde">
            {compra.juegos.map((juego) => (
              <li key={juego.id} className="flex items-center justify-between gap-3 py-3">
                <div className="flex min-w-0 items-center gap-3">
                  <img className="h-14 w-10 shrink-0 rounded object-cover" src={juego.imagen} alt={juego.nombre} />
                  <div className="min-w-0">
                    <p className="line-clamp-2 text-sm font-bold text-texto">{juego.nombre}</p>
                    <p className="mt-1 text-xs text-texto-suave">Cantidad: {juego.cantidad}</p>
                  </div>
                </div>
                <span className="shrink-0 text-sm font-bold text-texto">{formatearPrecio(juego.precio * juego.cantidad)}</span>
              </li>
            ))}
          </ul>
        </div>

        <button
          type="button"
          onClick={() => setVista(VISTAS.TIENDA)}
          className="mt-7 w-full rounded-lg bg-acento px-4 py-3 text-sm font-extrabold text-fondo transition hover:bg-acento-fuerte hover:text-texto focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-acento sm:w-auto sm:min-w-56"
        >
          Volver al catálogo
        </button>
      </section>
    </main>
  )
}

export default Confirmacion
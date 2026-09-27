import { useForm } from "react-hook-form"
import { useCarritoContext } from "../../contexts/CarritoContext"
import { VISTAS } from "../../data/vistas"
import { formatearPrecio } from "../../utils/formatearPrecio"


const Checkout = () => {

  const { register, handleSubmit, formState: { errors }, watch } = useForm({defaultValues: {metodoEnvio: 'retiro'}})
  const { setVista, setCarrito, carrito, precioTotal, setCompra } = useCarritoContext()

  const metodoEnvio = watch('metodoEnvio')

  const onSubmit = (datos) => {
    const compra = {
      nombre: datos.nombre,
      email: datos.email,
      telefono: datos.telefono,
      metodoEnvio: datos.metodoEnvio,
      direccion: datos.metodoEnvio === 'envio' ? datos.direccion : null,
      notas: datos.notas,
      juegos: carrito,
      total: precioTotal
    }

    console.log(compra)
    setCompra(compra)
    setCarrito([])
    setVista(VISTAS.CONFIRMACION)
  }

 
  const claseCampo = "mt-1 w-full rounded-lg border border-borde bg-fondo px-3 py-2.5 text-sm text-texto outline-none transition placeholder:text-texto-suave/70 focus:border-acento focus:ring-2 focus:ring-acento/20"
  const claseEtiqueta = "text-sm font-bold text-texto"
  const claseError = "mt-1 text-sm font-semibold text-peligro"

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <button type="button" onClick={() => setVista(VISTAS.TIENDA)} className="mb-6 inline-flex items-center gap-2 rounded-lg border border-borde bg-superficie px-3 py-2 text-sm font-bold text-texto-suave transition hover:border-acento hover:text-acento focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-acento">
          <span aria-hidden="true">←</span> Volver a la tienda
        </button>
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-acento">Último paso</p>
        <h1 className="text-3xl font-extrabold text-texto sm:text-4xl">Finalizar compra</h1>
        <p className="mt-2 text-sm text-texto-suave">Completá tus datos para confirmar el pedido.</p>
      </div>

      <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.75fr)]">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 rounded-xl border border-borde bg-superficie p-5 shadow-lg shadow-black/5 sm:p-7">
          <div>
            <h2 className="text-xl font-extrabold text-texto">Datos de contacto</h2>
            <p className="mt-1 text-sm text-texto-suave">Los campos marcados son obligatorios.</p>
          </div>

          <div>
            <label htmlFor="nombre" className={claseEtiqueta}>Nombre completo</label>
        <input
          {...register('nombre', { required: 'El nombre es obligatorio', minLength: { value: 3, message: "El nombre debe tener al menos 3 caracteres", }})}
          id="nombre"
          type="text"
          placeholder="Nombre y Apellido"
          autoComplete="name"
          className={claseCampo}
        />
            { errors.nombre && <p className={claseError}>{errors.nombre.message}</p> }
          </div>

          <div>
            <label htmlFor="email" className={claseEtiqueta}>Email</label>
        <input
          {...register('email', { required: 'El email es obligatorio', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Ingresa un email válido", }})}
          id="email"
          type="email"
          placeholder="Email"
          autoComplete="email"
          className={claseCampo}
        />
            { errors.email && <p className={claseError}>{errors.email.message}</p> }
          </div>

          <div>
            <label htmlFor="telefono" className={claseEtiqueta}>Teléfono</label>
        <input
          {...register('telefono', { required: 'El telefono es obligatorio', pattern: { value: /^[0-9]+$/, message: "El teléfono solo puede contener números" }, minLength: { value: 8, message: "El teléfono debe tener al menos 8 números", }})}
          id="telefono"
          type="text"
          placeholder="Telefono"
          autoComplete="tel"
          className={claseCampo}
        />
            { errors.telefono && <p className={claseError}>{errors.telefono.message}</p> }
          </div>

          <fieldset className="flex flex-col gap-3">
            <legend className={`${claseEtiqueta} mb-3`}>Método de entrega</legend>
            <label htmlFor="retiro" className="flex cursor-pointer items-center gap-3 rounded-lg border border-borde bg-fondo px-3 py-3 text-sm text-texto transition has-[:checked]:border-acento has-[:checked]:bg-acento/5">
          <input
            {...register('metodoEnvio', { required: 'Selecciona un método de envío' })}
            id="retiro"
            type="radio"
            value='retiro'
            className="size-4 accent-acento"
          />
              <span><span className="block font-bold">Retirar en local</span><span className="mt-0.5 block text-xs text-texto-suave">Sin costo de envío</span></span>
            </label>
            <label htmlFor="envio" className="flex cursor-pointer items-center gap-3 rounded-lg border border-borde bg-fondo px-3 py-3 text-sm text-texto transition has-[:checked]:border-acento has-[:checked]:bg-acento/5">
          <input
            {...register('metodoEnvio', { required: 'Selecciona un método de envío' })}
            id="envio"
            type="radio"
            value='envio'
            className="size-4 accent-acento"
          />
              <span><span className="block font-bold">Envío a domicilio</span><span className="mt-0.5 block text-xs text-texto-suave">Coordinaremos la entrega</span></span>
            </label>
            { errors.metodoEnvio && <p className={claseError}>{errors.metodoEnvio.message}</p> }
          </fieldset>

        {metodoEnvio === 'envio' && (
          <div>
            <label htmlFor="direccion" className={claseEtiqueta}>Dirección</label>
            <input
              {...register('direccion', { required: 'La direccion es obligatoria' })}
              id="direccion"
              type="text"
              placeholder="Direccion"
              autoComplete="street-address"
              className={claseCampo}
            />
            { errors.direccion && <p className={claseError}>{errors.direccion.message}</p> }
          </div>
        )}
        
          <div>
            <label htmlFor="notas" className={claseEtiqueta}>Notas <span className="font-normal text-texto-suave">(opcional)</span></label>
        <textarea
          {...register('notas', { maxLength: { value: 200, message: "Las notas no pueden superar los 200 caracteres" } })}
          id="notas"
          placeholder="Notas"
          rows="3"
          className={claseCampo}
        />
            { errors.notas && <p className={claseError}>{errors.notas.message}</p> }
          </div>

          <div>
            <label htmlFor="terminos" className="flex cursor-pointer items-center gap-2 text-sm text-texto">
            <input
              {...register('terminos', { required: 'Debes aceptar los terminos' })}
              id="terminos"
              type="checkbox"
              className="size-4 accent-acento"
            />
              Acepto los términos y condiciones
            </label>
            { errors.terminos && <p className={claseError}>{errors.terminos.message}</p> }
          </div>

        <button
          type="submit"
            className="w-full rounded-lg bg-acento px-4 py-3 text-sm font-extrabold text-fondo transition hover:bg-acento-fuerte hover:text-texto focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-acento"
        >
          Confirmar compra
        </button>

      </form>

        <aside className="rounded-xl border border-borde bg-superficie p-5 shadow-lg shadow-black/5 sm:p-6 lg:sticky lg:top-24">
          <h2 className="text-xl font-extrabold text-texto">Resumen del pedido</h2>
          <p className="mt-1 text-sm text-texto-suave">{carrito.length} {carrito.length === 1 ? 'juego' : 'juegos'}</p>
          <ul className="mt-5 flex flex-col divide-y divide-borde">
            {carrito.map((juego) => {
              const totalJuego = juego.precio * juego.cantidad

              return (
                <li key={juego.id} className="flex items-center gap-3 py-3 first:pt-0 last:pb-0">
                  <img className="h-16 w-11 shrink-0 rounded-md object-cover" src={juego.imagen} alt={juego.nombre} />
                  <div className="min-w-0 flex-1">
                    <h3 className="line-clamp-2 text-sm font-bold text-texto">{juego.nombre}</h3>
                    <p className="mt-1 text-xs text-texto-suave">Cantidad: {juego.cantidad}</p>
                  </div>
                  <p className="shrink-0 text-sm font-extrabold text-texto">{formatearPrecio(totalJuego)}</p>
                </li>
              )
            })}
          </ul>
          <div className="mt-5 flex items-center justify-between border-t border-borde pt-4">
            <span className="font-bold text-texto">Total</span>
            <span className="text-xl font-extrabold text-acento">{formatearPrecio(precioTotal)}</span>
          </div>
        </aside>
      </div>
    </main>

  )
}

export default Checkout
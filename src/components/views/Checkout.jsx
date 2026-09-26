import { useForm } from "react-hook-form"
import { useCarritoContext } from "../../contexts/CarritoContext"


const Checkout = () => {

  const { register, handleSubmit, formState: { errors } } = useForm()
  const { setVista } = useCarritoContext()


  const onSubmit = (datos) => {
    if(datos.metodoEnvio === 'envio' && !datos.direccion.trim()) {
      alert('la direccion es obligatoria si seleccionas envio')
    } else {
      setVista('confirmacion')
    }
  }
  console.log(errors)

 
  return (

    <main className="text-center">
      <h1>Form</h1>
      <p>Formulario</p>
      <a href="/">volver</a>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col border-acento border bg-cyan-950">

        <label>Nombre completo</label>
        <input
          {...register('nombre', { required: 'El nombre es obligatorio', minLength: { value: 3, message: "El nombre debe tener al menos 3 caracteres", }})}
          type="text"
          placeholder="Nombre y Apellido"
        />
        { errors.nombre && <p className="text-red-400">{errors.nombre.message}</p> }

        <label>Email</label>
        <input
          {...register('email', { required: 'El email es obligatorio', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Ingresa un email válido", }})}
          type="email"
          placeholder="Email"
        />
        { errors.email && <p className="text-red-400">{errors.email.message}</p> }

        <label>Teléfono</label>
        <input
          {...register('telefono', { required: 'El telefono es obligatorio', pattern: { value: /^[0-9]+$/, message: "El teléfono solo puede contener números" }, minLength: { value: 8, message: "El teléfono debe tener al menos 8 números", }})}
          type="text"
          placeholder="Telefono"
        />
        { errors.telefono && <p className="text-red-400">{errors.telefono.message}</p> }

        <p>Método de envío</p>
        <label>
          <input
            {...register('metodoEnvio', { required: 'Selecciona un método de envío' })}
            type="radio"
            value='retiro'
          />
          Retirar
        </label>
        <label>
          <input
            {...register('metodoEnvio', { required: 'Selecciona un método de envío' })}
            type="radio"
            value='envio'
          />
          Envio
        </label>
        { errors.metodoEnvio && <p className="text-red-400">{errors.metodoEnvio.message}</p> }

        <label>Dirección</label>
        <input
          {...register('direccion')}
          type="text"
          placeholder="Direccion"
        />
        { errors.direccion && <p className="text-red-400">{errors.direccion.message}</p> }
        
        <label>Notas</label>
        <textarea
          {...register('notas', { maxLength: { value: 200, message: "Las notas no pueden superar los 200 caracteres" } })}
          type="text"
          placeholder="Notas"
        />
        { errors.notas && <p className="text-red-400">{errors.notas.message}</p> }

        <div>
          <label>
            <input
              {...register('terminos', { required: 'Debes aceptar los terminos' })}
              type="checkbox"
            />
            Terminos y condiciones
          </label>
        </div>
        { errors.terminos && <p className="text-red-400">{errors.terminos.message}</p> }

        <button
          type="submit"
        >
          Confirmar compra
        </button>

      </form>
    </main>

  )
}

export default Checkout
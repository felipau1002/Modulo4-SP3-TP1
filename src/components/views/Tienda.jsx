import { useCarritoContext } from "../../contexts/CarritoContext"
import useToggle from "../../hooks/useToggle"
import useInput from '../../hooks/useInput'
import videojuegos from '../../data/videojuegos.json'
import NavBar from '../layout/NavBar.jsx'
import SeccionTarjetas from '../SeccionTarjetas'
import PanelWishlist from '../PanelWishlist'
  
  
export const Tienda = () => {

  const { totalCarrito } = useCarritoContext()
  const { busqueda, setBusqueda, filtrado } = useInput({ productos: videojuegos })
  const { isOn, toggle } = useToggle()


  if (totalCarrito > 0) {
    document.title = `Mi lista ${totalCarrito} | MiApp`
  } else {
    document.title = `MiApp`
  }
  

  return (
    <>
      <header>
        <NavBar
          busqueda={busqueda}
          setBusqueda={setBusqueda}
          toggle={toggle}
        />
      </header>


      <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-7 flex items-end justify-between gap-4">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-acento">Catálogo</p>
            <h1 className="text-3xl font-extrabold tracking-tight text-texto sm:text-4xl">Explorá tu próximo juego</h1>
          </div>
          <p className="hidden text-sm text-texto-suave sm:block">{filtrado.length} títulos disponibles</p>
        </div>

        <SeccionTarjetas
          juegos={filtrado}
        />

        {isOn && (
          <PanelWishlist
            useToggle={toggle}
          />
        )}
      </main>
    </>
  )
}
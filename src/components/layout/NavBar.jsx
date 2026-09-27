import { useCarritoContext } from "../../contexts/CarritoContext"
import { useThemeContext } from "../../contexts/ThemeContext"


const NavBar = ({ busqueda, setBusqueda, toggle }) => {

    const { totalCarrito } = useCarritoContext()
    const { tema, cambiarTema } = useThemeContext()


  return (

    <nav className="sticky top-0 z-40 border-b border-borde/80 bg-fondo/90 px-4 py-4 backdrop-blur-xl sm:px-6">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center justify-between gap-5">
            <a href="/" className="flex items-center gap-3" aria-label="GameShelf inicio">
                <img src="/assets/logo-gamepad.svg" alt="logo" className="h-9 w-9" />
                <div>
                    <p className="text-lg font-extrabold leading-none tracking-tight text-texto">GameShelf</p>
                    <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-acento">Tu biblioteca</p>
                </div>
            </a>
          </div>

        <div className="flex w-full min-w-0 gap-2 sm:w-auto sm:gap-3 sm:min-w-md">
            <button onClick={cambiarTema}  className="shrink-0 rounded-lg border border-borde bg-superficie px-4 py-2 text-sm font-bold text-texto transition hover:border-acento hover:text-acento focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-acento">
                {tema ? '🌘' : '☀️'}
            </button>
            <label className="relative min-w-0 flex-1">
                <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-texto-suave">⌕</span>
                <input
                    type="text"
                    placeholder="Buscar juegos..."
                    value={busqueda}
                    onChange={(evento) => setBusqueda(evento.target.value)}
                    className="w-full rounded-lg border border-borde bg-superficie py-2.5 pl-9 pr-3 text-sm text-texto outline-none transition placeholder:text-texto-suave/70 focus:border-acento focus:ring-2 focus:ring-acento/20"
                />
            </label>
            <button onClick={toggle} aria-label={`Abrir carrito, ${totalCarrito} artículos`} className="flex shrink-0 items-center gap-1.5 rounded-lg border border-borde bg-superficie px-2.5 py-2 text-sm font-bold text-texto transition hover:border-acento hover:text-acento focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-acento sm:px-4">
                <span className="sm:hidden" aria-hidden="true">🛒</span>
                <span className="min-w-4 text-center sm:hidden">{totalCarrito}</span>
                <span className="hidden sm:inline">Carrito ({totalCarrito})</span>
            </button>
        </div>
        </div>

    </nav>
  )
}

export default NavBar
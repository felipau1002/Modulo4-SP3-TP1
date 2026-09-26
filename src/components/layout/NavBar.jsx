import { useThemeContext } from "../../contexts/ThemeContext"


const NavBar = ({ totalCarrito, busqueda, setBusqueda, toggle }) => {

    const { oscuro, cambiarTema } = useThemeContext()


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

        <div className="flex w-full gap-3 sm:w-auto sm:min-w-md">
            <button onClick={cambiarTema} aria-label={oscuro ? 'Cambiar a modo oscuro' : 'Cambiar a modo claro'} title={oscuro ? 'Cambiar a modo oscuro' : 'Cambiar a modo claro'} className="shrink-0 rounded-lg border border-borde bg-superficie px-4 py-2 text-sm font-bold text-texto transition hover:border-acento hover:text-acento focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-acento">
                {oscuro ? '🌘' : '☀️'}
            </button>
            <label className="relative flex-1">
                <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-texto-suave">⌕</span>
                <input
                    type="text"
                    placeholder="Buscar juegos..."
                    value={busqueda}
                    onChange={(evento) => setBusqueda(evento.target.value)}
                    className="w-full rounded-lg border border-borde bg-superficie py-2.5 pl-9 pr-3 text-sm text-texto outline-none transition placeholder:text-texto-suave/70 focus:border-acento focus:ring-2 focus:ring-acento/20"
                />
            </label>
            <button onClick={toggle} className="hidden rounded-lg border border-borde bg-superficie px-4 py-2 text-sm font-bold text-texto transition hover:border-acento hover:text-acento sm:block">
                Carrito ({totalCarrito})
            </button>
        </div>
        </div>

    </nav>
  )
}

export default NavBar
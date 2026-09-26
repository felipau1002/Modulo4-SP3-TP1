import Tarjetas from './Tarjetas'


// componente que hace un map de todos los juegos y los muestra en tarjetas
const SeccionTarjetas = ({ juegos }) => {
    
  return (
    <>
      {juegos.length === 0 ? (
        <div className="rounded-xl border border-dashed border-borde bg-superficie/50 px-5 py-16 text-center">
          <p className="text-lg font-bold text-texto">No encontramos juegos</p>
          <p className="mt-2 text-sm text-texto-suave">Probá con otro nombre o término de búsqueda.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {juegos.map((juego) => (
            <Tarjetas 
              key={juego.id}
              juego={juego}
            />
          ))}
        </div>
      )}
    </>
  )
}

export default SeccionTarjetas
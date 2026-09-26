import { useState, useEffect } from "react"

function useLocalStorage( clave, valorInicial ) {
    // este try catch hace que si existen juegos guardados en localStorage, se queden guardados al recargar la página y si no existen se crea un array nuevo
    const [valor, setValor] = useState(() => {
      try {
        const guardado = localStorage.getItem(clave)
        
        return guardado ? JSON.parse(guardado) : valorInicial
      } catch (error) {
        return valorInicial
      }
    })


    // este useEffect guarda la lista de juegos en el localStorage cada vez que valor (la lista) cambia
    useEffect(() => {
      localStorage.setItem(clave, JSON.stringify(valor))
    }, [clave, valor])


    return [valor, setValor]
}

export default useLocalStorage
import { useState, useContext, createContext } from "react";
import useCarrito from "../hooks/useCarrito";
import { VISTAS } from "../data/vistas";


const CarritoContext = createContext(null)


export function CarritoProvider({ children }) {
    const valor = useCarrito()

    const [vista, setVista] = useState(VISTAS.TIENDA)

    return (
        <CarritoContext.Provider value={{...valor, vista, setVista}}>
            { children }
        </CarritoContext.Provider>
    )
}


export function useCarritoContext() {
    const contexto = useContext(CarritoContext)

    // error

    return contexto
}
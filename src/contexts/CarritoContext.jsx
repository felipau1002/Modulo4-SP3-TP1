import { useState, useContext, createContext } from "react";
import useCarrito from "../hooks/useCarrito";
import { VISTAS } from "../data/vistas";


const CarritoContext = createContext(null)


export function CarritoProvider({ children }) {
    const valor = useCarrito()

    const [compra, setCompra] = useState(null)

    const [vista, setVista] = useState(VISTAS.TIENDA)

    return (
        <CarritoContext.Provider value={{...valor, vista, setVista, compra, setCompra}}>
            { children }
        </CarritoContext.Provider>
    )
}


export function useCarritoContext() {
    const contexto = useContext(CarritoContext)

    if (!contexto) {
    throw new Error('useCarritoContext() tiene que usarse adentro de <CarritoProvider>')
    }

    return contexto
}
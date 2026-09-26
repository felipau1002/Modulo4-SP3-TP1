import { useContext, createContext, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";


const ThemeContext = createContext(null)


export function ThemeProvider({ children }) {
    
    const [oscuro, setOscuro] = useLocalStorage('juegos:tema', false)

    useEffect(() => {
        document.documentElement.dataset.tema = oscuro ? 'claro' : 'oscuro'
    }, [oscuro])

    const cambiarTema = () => {
        setOscuro((temaActual) => !temaActual)
    }

    return(
        <ThemeContext.Provider value={{oscuro, cambiarTema}} >
            {children}
        </ThemeContext.Provider>
    )
}


export function useThemeContext() {
    const contexto = useContext(ThemeContext)

    // error

    return contexto
}
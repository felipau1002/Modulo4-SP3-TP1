import { useContext, createContext, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";


const ThemeContext = createContext(null)


export function ThemeProvider({ children }) {
    
    const [tema, setTema] = useLocalStorage('juegos:tema', false)

    useEffect(() => {
        document.documentElement.dataset.tema = tema ? 'claro' : 'oscuro'
    }, [tema])

    const cambiarTema = () => {
        setTema((temaActual) => !temaActual)
    }

    return(
        <ThemeContext.Provider value={{tema, cambiarTema}} >
            {children}
        </ThemeContext.Provider>
    )
}


export function useThemeContext() {
    const contexto = useContext(ThemeContext)

    if (!contexto) {
    throw new Error('useThemeContext() tiene que usarse adentro de <ThemeProvider>')
    }

    return contexto
}
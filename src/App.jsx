import './App.css'
import { useCarritoContext } from './contexts/CarritoContext'
import { VISTAS } from './data/vistas'

import { Tienda } from './components/views/Tienda'
import Checkout from './components/views/Checkout'
import Confirmacion from './components/views/Confirmacion'

function App() {

  const { vista } = useCarritoContext() 

  return(
    <>

      {vista === VISTAS.TIENDA && <Tienda />}

      {vista === VISTAS.CHECKOUT && <Checkout />}

      {vista === VISTAS.CONFIRMACION && <Confirmacion />}

    </>
  )

}

export default App
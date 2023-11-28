import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { PizzaProvider } from './Context/PizzaContext'
import Navigator from './Components/Navigator'
import Home from './Views/Home'
import NotFound from './Views/NotFound'
import Cart from './Views/Cart'
import PizzasDetails from './Views/PizzasDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <PizzaProvider>
          <Navigator />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/PizzasDetails/:id' element={<PizzasDetails />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </PizzaProvider>
      </BrowserRouter>

    </>
  )
}

export default App

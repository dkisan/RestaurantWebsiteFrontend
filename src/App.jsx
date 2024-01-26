import { useState } from 'react'
import './App.css'
import Cart from './components/Cart/Cart'
import Header from './components/Layout/Header'
import AvailableMeals from './components/Meals/AvailableMeals'
import Summary from './components/Meals/Summary'

function App() {
const [cartShown,setCartShown]= useState(false)

const showCartHandler = ()=>{
  setCartShown(true)
}

const hideCartHandler = ()=>{
  setCartShown(false)
}

  return (
    <>
      {cartShown && <Cart  hideCartHandler={hideCartHandler} />}
      <Header showCartHandler={showCartHandler}/>
      <Summary />
      <AvailableMeals />
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import Cart from './components/Cart/Cart'
import Header from './components/Layout/Header'
import AvailableMeals from './components/Meals/AvailableMeals'
import Summary from './components/Meals/Summary'
import CartProvider from './store/CartProvider'

function App() {
  const [cartShown, setCartShown] = useState(false)
  const [cart, setCart] = useState([])

  const showCartHandler = () => {
    setCartShown(true)
  }

  const hideCartHandler = () => {
    setCartShown(false)
  }

  // const setCartHandler = (item) => {
  //   const isExist = cart.findIndex(c => c.item.id === item.item.id)
  //   let newCart;
  //   if (isExist === -1) {
  //     newCart = [...cart, item]
  //   } else {
  //     cart[isExist].amount = cart[isExist].amount + item.amount
  //     newCart = [...cart]
  //   }
  //   setCart(() => {
  //     return newCart
  //   })
  // }

  return (
    <CartProvider>
      {cartShown && <Cart hideCartHandler={hideCartHandler} />}
      <Header showCartHandler={showCartHandler} />
      <Summary />
      <AvailableMeals />
    </CartProvider>
  )
}

export default App

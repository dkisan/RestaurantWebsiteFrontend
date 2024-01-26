import './App.css'
import Cart from './components/Cart/Cart'
import Header from './components/Layout/Header'
import AvailableMeals from './components/Meals/AvailableMeals'
import Summary from './components/Meals/Summary'

function App() {

  return (
    <>
      <Cart />
      <Header />
      <Summary />
      <AvailableMeals />
    </>
  )
}

export default App

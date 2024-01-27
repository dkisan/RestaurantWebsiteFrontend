import { useContext } from 'react';
import classes from './AvailableMeals.module.css'
import MealForm from './MealForm';
import CartContext from '../../store/CartContext';

const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price: 22.99,
    },
    {
        id: 'm2',
        name: 'Schnitzel',
        description: 'A german specialty!',
        price: 16.5,
    },
    {
        id: 'm3',
        name: 'Barbecue Burger',
        description: 'American, raw, meaty',
        price: 12.99,
    },
    {
        id: 'm4',
        name: 'Green Bowl',
        description: 'Healthy...and green...',
        price: 18.99,
    },
];


const AvailableMeals = () => {
    const ctx = useContext(CartContext)

    const addToCartHandler = (n, k) => {
        const item = DUMMY_MEALS.filter(a => a.id === k)
        const obj = {item:item[0],amount: +n}
        ctx.addItem(obj)
    }

    return (
        <div className={classes.ameals}>
            {DUMMY_MEALS.map((am) => {
                return <div key={am.id} className={classes.alist}>
                    <div>
                        <li className={classes.aname}>{am.name}</li>
                        <li className={classes.adesc}>{am.description}</li>
                        <li className={classes.aprice}>${am.price}</li>
                    </div>
                    <MealForm addToCartHandler={addToCartHandler} key={am.id} id={am.id} />
                </div>
            })}
        </div>
    )
}

export default AvailableMeals;
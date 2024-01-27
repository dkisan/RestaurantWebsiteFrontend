import { useContext, useRef } from 'react';
import classes from './MealForm.module.css'
const MealForm = (props) => {
    const amountRef = useRef()
    const addTo = (event) => {
        event.preventDefault();
        const n = amountRef.current.value;
        props.addToCartHandler(n, props.id)
    }
    return (
        <form className={classes.formclass}>
            <div className={classes.flx}>
                <label>Amount</label>
                <input ref={amountRef} type="number" defaultValue={1} />
            </div>
            <button onClick={addTo}>+Add</button>
        </form>
    )
}
export default MealForm;
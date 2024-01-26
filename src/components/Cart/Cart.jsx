import classes from './Cart.module.css'
import ReactDOM from 'react-dom'

const CartOverlay = () => {
    return (
        <div className={classes.backdrop}>
            <div className={classes.content}>
                <div>
                    Sushi
                </div>
                <div className={classes.total}>
                    <span>Total amount</span>
                    <span>$39.22</span>
                </div>
                <div className={classes.actions}>
                    <button className={classes.clsbtn}>Close</button>
                    <button>Order</button>
                </div>
            </div>
        </div>
    )
}


const Cart = () => {
    return (
        <>
            {ReactDOM.createPortal(<CartOverlay />, document.getElementById('ovlay'))}
        </>
    )
}

export default Cart;
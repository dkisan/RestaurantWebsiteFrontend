import classes from './Cart.module.css'
import ReactDOM from 'react-dom'

const CartOverlay = (props) => {
    return (
        <div className={classes.backdrop}  onClick={props.hideCartHandler}>
            <div className={classes.content} onClick={(event)=>event.stopPropagation()}>
                <div>
                    Sushi
                </div>
                <div className={classes.total}>
                    <span>Total amount</span>
                    <span>$39.22</span>
                </div>
                <div className={classes.actions}>
                    <button className={classes.clsbtn} onClick={props.hideCartHandler}>Close</button>
                    <button>Order</button>
                </div>
            </div>
        </div>
    )
}


const Cart = (props) => {
    return (
        <>
            {ReactDOM.createPortal(<CartOverlay hideCartHandler={props.hideCartHandler}/>, document.getElementById('ovlay'))}
        </>
    )
}

export default Cart;
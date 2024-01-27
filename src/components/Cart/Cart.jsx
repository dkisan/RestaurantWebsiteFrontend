import { useContext, useEffect, useState } from 'react'
import classes from './Cart.module.css'
import ReactDOM from 'react-dom'
import CartContext from '../../store/CartContext'

const Cartlist = (props) => {
    const ctx = useContext(CartContext)
    const increaseItem = () => {
        const obj = {
            amount: 1,
            item: { ...props.item.item }
        }
        ctx.addItem(obj)
    }

    const decreaseItem = () => {
        ctx.removeItem(props.item.item.id)
    }
    return (
        <div className={classes.listyle}>
            <li className={classes.linstyle}>
                <span className={classes.nm}>{props.item.item.name}</span>
                <div className={classes.lisp}>
                    <span className={classes.prc}>${props.item.item.price}</span>
                    <span className={classes.amt}>x{props.item.amount}</span>
                </div>
            </li>
            <div className={classes.lisp}>
                <button onClick={increaseItem}>+</button>
                <button onClick={decreaseItem}>-</button>
            </div>
        </div>
    )
}

const CartOverlay = (props) => {
    const ctx = useContext(CartContext)
    return (
        <div className={classes.backdrop} onClick={props.hideCartHandler}>
            <div className={classes.content} onClick={(event) => event.stopPropagation()}>
                <ul>
                    {ctx.items.map((c, idx) => {
                        return <Cartlist item={c} key={idx} />
                    })}
                </ul>
                <div className={classes.total}>
                    <span>Total amount</span>
                    <span>{ctx.totalamount.toFixed(2)}</span>
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
            {ReactDOM.createPortal(<CartOverlay hideCartHandler={props.hideCartHandler} />, document.getElementById('ovlay'))}
        </>
    )
}

export default Cart;
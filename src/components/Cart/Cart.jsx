import { useContext, useEffect, useState } from 'react'
import classes from './Cart.module.css'
import ReactDOM from 'react-dom'
import CartContext from '../../store/CartContext'

const Cartlist = (props) => {
    return (
        <div className={classes.listyle}>
            <li className={classes.lisp}>
                <span>{props.name}</span>
                <span>{props.amount}</span>
                <span>${props.price}</span>
            </li>
            <div className={classes.lisp}>
                <button>+</button>
                <button>-</button>
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
                        return <Cartlist name={c.item.name} price={c.item.price} amount={c.amount} key={idx} />
                    })}
                </ul>
                <div className={classes.total}>
                    <span>Total amount</span>
                    <span>{ctx.totalamount}</span>
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
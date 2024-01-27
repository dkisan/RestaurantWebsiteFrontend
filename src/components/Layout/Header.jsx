import { useContext, useEffect, useState } from 'react';
import classes from './Headerstyle.module.css'
import CartContext from '../../store/CartContext';

const Header = (props) => {
    const ctx = useContext(CartContext)
    const noofItems = ctx.items.reduce((cur,item)=>{
        return cur + item.amount
    },0)
    return (
        <div className={classes.header}>
            <div className={classes.headcontent}>
                <h1>React Meals</h1>
                <div className={classes.cart} onClick={props.showCartHandler}>
                    <button className={classes.btn}>Your Cart </button>
                    <span className={classes.span}>{noofItems}</span>
                </div>
            </div>
        </div>
    )
}

export default Header;
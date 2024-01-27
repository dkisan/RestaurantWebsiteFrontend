import { useReducer } from "react";
import CartContext from "./CartContext";


const defaultState = {
    items: [],
    totalamount: 0
}

const cartReducer = (state, action) => {
    if (action.type === 'Add') {
        const updateAmount = state.totalamount + (action.item.item.price * action.item.amount)
        const existIndex = state.items.findIndex(item => item.id === action.item.item.id)
        const existItem = state.items[existIndex];
        let updateItem;
        if (existItem) {
            let update = {
                ...existItem,
                amount: existItem.amount + action.item.amount
            }
            updateItem = { ...state.items }
            updateItem[existIndex] = update
        } else {
            updateItem = state.items.concat(action.item)
        }
        return {
            items: updateItem,
            totalamount: updateAmount
        }
    }

    if (action.type === 'Remove') {

    }
    return defaultState;
}


const CartProvider = (props) => {
    const [cartState, dispatchCart] = useReducer(cartReducer, defaultState)

    const addItemHandler = (item) => {
        dispatchCart({ type: 'Add', item: item })
    }

    const removeItemHandler = () => {
    }

    const cartContext = {
        items: cartState.items,
        totalamount: cartState.totalamount,
        addItem: addItemHandler,
        removeItem: removeItemHandler
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )

}


export default CartProvider;
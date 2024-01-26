import classes from './Headerstyle.module.css'

const Header = (props) => {
    return (
        <div className={classes.header}>
            <div className={classes.headcontent}>
                <h1>React Meals</h1>
                <div className={classes.cart} onClick={props.showCartHandler}>
                    <button className={classes.btn}>Your Cart </button>
                    <span className={classes.span}>0</span>
                </div>
            </div>
        </div>
    )
}

export default Header;
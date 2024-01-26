import classes from './MealForm.module.css'
const MealForm = () => {
    return (
        <form className={classes.formclass}>
            <div className={classes.flx}>
                <label>Amount</label>
                <input type="number" defaultValue={1}/>
            </div>
            <button>+Add</button>
        </form>
    )
}
export default MealForm;
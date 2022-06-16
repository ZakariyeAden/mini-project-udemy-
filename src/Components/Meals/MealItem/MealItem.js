import React,{useContext} from "react";
import classes from '../../Meals/MealItem/MealItem.module.css'
import MealItemForm from "./MealItemForm";
import CartContext from "../../../Store/Cart-context";
function MealItem(props) {

  const CartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = amount => {
    CartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  console.log(props)
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler}/>
      </div>
    </li>
  );
}

export default MealItem;

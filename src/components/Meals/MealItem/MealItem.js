import React, { useContext } from "react";
import styles from "./MealItem.module.css";
import MealItemFrom from "./MealItemForm";
import CartContext from "../../../store/cart-context";

const MealItem = (props) => {
  //Napravio sam ovu varijablu price, da mi price uvek ima dve decimale
  const price = `$${props.price.toFixed(2)}`;
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={styles.meal}>
      <div>
        <h3>Name: {props.name}</h3>
        <div className={styles.description}>
          Description: {props.description}
        </div>
        <div className={styles.price}>Price: {price}</div>
      </div>
      <div>
        <MealItemFrom id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;

//Imena koja koristim ovde, tipa props.name, ta ista imena se moraju koristiti u fajlu AvailableMeals.js za prosledjivanje podataka
//Ako sam ovde imao name, tamo isto moram imati name

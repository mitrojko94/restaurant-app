import React from "react";
import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const [btnIsHIghlighted, setBtnIsHighlighted] = useState(false);
  //Koriscenje useContext-a
  const carCtx = useContext(CartContext);

  const numberOfCartItems = carCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  //Dodavanje animacije na korpu kad se dodaju i oduzimaju jela
  const { items } = carCtx;

  const btnClasses = `${styles.button} ${btnIsHIghlighted ? styles.bump : ""}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    //Pravim timer da mi se aktivira posle svakih 300 milisekundi
    //Dole imam return () => {}, a to mi je od cleanup f-je. Tu prosledim u {} clearTimeout(ime_varijable) i izbrise mi se f-ja
    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;

//U Reactu moze da se koristi svg kod u JSX kodu
//Stavio sam u glavnom kodu tri span elementa, a to su mi tri elementa dugmeta

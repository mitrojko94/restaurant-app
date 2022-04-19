import React from "react";
import CartContext from "./cart-context";
import { useReducer } from "react"; //Koristim useReducer, jer je logika kompleksnija. Moram da proverim da li je jelo vec u korpi ili ne

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

//Action je poslat od mene kasnije u kodu, a state je poslednji state od statea
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    //Da li jelo vec postoji u korpi
    //Da li je trenutni id, na koji mi gledamo jednak id koji je poslat
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;

    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  //Upotreba useReducer
  //Prvi element je uvek moj state, dok je drugi element f-ja koja mi omogucava da posaljem akciju ka reduceru
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItemToCartHandler = (item) => {
    //Uvek je objekat koji ima neko svojstvo koje mi omogucava da identifikujem akciju unutar reducer f-je, tako da unutar reducer f-je mogu da pokrecem razlicite delove koda, zavisno od toga koja je vrsta koda poslata
    //Drugi element ovog parametra mora da se odnosi na parametar item, koji sam prosledio ovoj f-ji, a ovo prvo item je proizvoljno ime
    //Kad pisem ime type, uvek moram da pisem velikim slovima. To je neka konvencija
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;

import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false); //Pocetno stanje je false

  //Ovo je f-ja za prikazivanje, zato je stavljen cartIsShown na true
  const showCardHandler = () => {
    setCartIsShown(true);
  };
  //Ovo je f-ja za sakrivanje
  const hideCardHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {/*Ako je cartIsShown true prikaze se, ako je false ne prikaze se. To radi linija koda ispod */}
      {cartIsShown && <Cart onClose={hideCardHandler} />}
      <Header onShowCart={showCardHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;

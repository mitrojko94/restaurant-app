import React from "react";
import styles from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import { useRef, useState } from "react";

const MealItemFrom = (props) => {
  //Generisanje gresaka
  const [amountIsValid, setAmountIsValid] = useState(true);

  //Dodavanje jela
  const amountInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();

    //Dobijam vrednost koja je uneta. Uvek ide current(to upucuje na input element koji se nalazi u ref) i svaki taj input element ima svojstvo value koje sadrzi trenutnu unesenu vrednost
    //Ta vrednost je uvek string, cak iako je komponenta Input type: "number"(kao sto i jeste)
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountnumber = +enteredAmount;

    //Pomocu if uslova proveravam neke stvari, da li je duzina bez belina jednaka 0, da li je ta uneta vrednost manja od 1 tj. veca od 5
    //U komponenti Input imam min i max koliki su mi, odatle znam koji uslov da stavim, da proverim
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountnumber < 1 ||
      enteredAmountnumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountnumber);
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
};

export default MealItemFrom;

//Prosledio sam komponenti Input label i input, jer ta komponenta to ima u fajlu Input.js, tj. u fajlu gde je ona napravljena
//input polju sam prosledio objekat sa podacima. Sve te podatke koje sam tu prosledio, mislim na keys su zapravo svojstva koja se mogu dodati na bilo koji input element, obican input tag
//Ovo defaultValue znaci da ce mi ta vrednost biti po otvaranju, tj. ucitavanju stranice u pretrazivacu

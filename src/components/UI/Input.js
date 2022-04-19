//Ovaj fajl je odgovoran za prikaz input polja
import React from "react";
import styles from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={styles.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;

//Kad koristim ...props.input to mi omogucava da svi parovi key-value koji primimo preko props.inputa budu dodati kao props u input
//Tipa ako imam objekat {type: "text"}, ovaj spread operator(...props.input) mi omogucava da ce biti dodato type="text"
//To isto mogu da uradim i sa id-jem, da ga spread operator doda kao props u input
//Posto ovde stoji props.label, znaci da u fajlu gde budem ubacio Input komponentu, moram joj staviti label, kao i input

//Ako hocu ref, ovde stavim kao drugi parametar ref i stavim React.forwardRef i prosledim u input tagu ref={ref}
//Da bih ovo mogao da uradim, moram da imam u komponenti u kojoj mi se nalazi komponenta Input ref={neka_funkcija}. Ta f-ja je jednaka useRef() koji uvezem iz react biblioteke

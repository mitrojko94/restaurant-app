//Ovaj fajl prikazuje na ekranu korisniku trenutnu listu jela
import React from "react";
import styles from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  //Pravim ovu varijablu da bih je dole samo pozvao, zbog lepseg izgleda koda
  //Koristim metodu map, da bih pretvorio ovu listu objekta u JSX kod
  //U metodi map stavim neki parametar(trenutni element) i u {} pisem to ime parametra.nekiPodatak iz objekta, tipa name, description, price i slicno
  //Umesto ove list {meal.name} stavio novu komponentu koju sam napravio, a koja mi sluzi da mi pokaze informacije o jelu
  //Mogu da stavim samo key i meal={meal}, ali bih onda u fajlu MealItem.js morao da stavim tipa {props.meal.name}. Ovo je alternativa
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;

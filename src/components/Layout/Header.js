import React from "react";
import mealsImage from "../../assets/meals.jpg"; //Stavim proizvoljno ime za sliku i navedem putanju do nje
import style from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={style.header}>
        <h1>React Meals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      {/*Kad imam u CSS fajlu klasu tipa .main-image, cu pozivam ovako style["main-image"] */}
      <div className={style["main-image"]}>
        {/*Da imam neku sliku na serveru, samo bih u src prosledio URL adresu do slike */}
        <img src={mealsImage} alt={mealsImage} />
      </div>
    </React.Fragment>
  );
};

export default Header;

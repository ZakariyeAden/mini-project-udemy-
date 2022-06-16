import { Fragment } from 'react'
import MealsImg from '../Assets/meals.jpg'
import classes from '../Layout/Header.module.css'
import Button from '../Layout/HeaderCartButton'
function Header(props) {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
       <Button onClick={props.onShowCart}/>
      </header>
      <div className={classes['main-image']}>
        <img  src={MealsImg} alt="A table of food!"/>
      </div>
    </Fragment>
  );
};

export default Header
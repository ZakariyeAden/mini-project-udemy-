import React from 'react'
import classes from '../../Meals/MealItem/MealItemForm.module.css'
import Input from '../../UI/Input'
function MealItemForm(props) {
  return (
    <form className={classes.form}>
      <Input input={{
        label: 'amount' + props.id,
        id: 'amount',
        type: 'number',
        min: '1',
        max: '5',
        step: '1',
        defaultValue:'1'
      }}/>
      <button>+ Add</button>
    </form>
  )
}

export default MealItemForm
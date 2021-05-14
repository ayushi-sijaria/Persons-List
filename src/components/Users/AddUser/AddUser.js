import React, {useState} from 'react'
import classes from './AddUser.module.css'
import Card from '../../UI/Card/Card'
import Button from '../../UI/Button/Button'

const AddUser = (props) =>
{
     const [enteredName, setEnteredName] = useState('')
     const [enteredAge, setEnteredAge] = useState('')

     const nameChangeHandler = (event) =>
     {
          setEnteredName(event.target.value)
     }

     const ageChangeHandler = (event) =>
     {
          setEnteredAge(event.target.value)
     }

     const formSubmitHandler = (event) =>
     {
          event.preventDefault()
          if((enteredName.trim().length > 0)&&(enteredAge.trim().length>0)&&(+enteredAge>0))
         {
              console.log(enteredName, enteredAge)
              props.addUser(enteredName, enteredAge)
              setEnteredName('')
              setEnteredAge('')
         }
     }
     return (
          <Card className={classes.input}>
               <form onSubmit={formSubmitHandler}>
               <label htmlFor='userName'>Name:</label>
               <input id='userName' 
                    type='text' 
                    onChange={nameChangeHandler} 
                    value={enteredName}/>
               <label htmlFor='age'>Age:</label>
               <input id='age' 
                    type='number' 
                    onChange={ageChangeHandler} 
                    value={enteredAge}/>
               <Button type='submit' buttontext='Add User'/>              
          </form>
          </Card>
     )
}

export default AddUser
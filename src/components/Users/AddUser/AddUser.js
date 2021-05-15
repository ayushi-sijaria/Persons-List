import React, {useState} from 'react'
import classes from './AddUser.module.css'
import Card from '../../UI/Card/Card'
import Button from '../../UI/Button/Button'
import ErrorModal from '../../UI/Modal/ErrorModal'

const AddUser = (props) =>
{
     const [enteredName, setEnteredName] = useState('')
     const [enteredAge, setEnteredAge] = useState('')
     const [errorMessage, setErrorMessage] = useState('')

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
          if((enteredName.trim().length === 0))
          {
               setErrorMessage('Name cannot be blank')
               return
          }
          if((enteredAge.trim().length === 0))
          {
               setErrorMessage('Age cannot be blank')
               return
          }
          if(+enteredAge<1)
          {
               setErrorMessage('Invalid age')
               return
          }
         
          console.log(enteredName, enteredAge)
          props.addUser(enteredName, enteredAge)
          setEnteredName('')
          setEnteredAge('')
          }

     const resetErrorHandler = () =>
     {
          setErrorMessage('')
     }

     return (
          <div>
               {errorMessage && <ErrorModal errorMessage={errorMessage} resetError={resetErrorHandler}/>}
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
          </div>
     )
}

export default AddUser
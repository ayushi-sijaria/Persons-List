import React from 'react'
import Card from '../Card/Card'
import Button from '../Button/Button'
import classes from './ErrorModal.module.css'

const ErrorModal = (props) =>
{
     return (
          <div className={classes.backdrop} onClick={props.resetError}>
               <Card className={classes.modal}>
               <header className={classes.header}> 
                    <h2>Some error occured</h2>
               </header>
               <div className={classes.content}>
                    <p>{props.errorMessage}</p>
               </div>
               <footer className={classes.actions}>
                    <Button type='button' buttontext='OKAY' onClick={props.resetError}/>
               </footer>
          </Card>
          </div>
     )
}

export default ErrorModal

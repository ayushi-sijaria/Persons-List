import React from 'react'
import classes from './UsersList.module.css'
import Card from '../../UI/Card/Card'

const UserList = (props) =>
{
     return (
          <Card className={classes.users}>
               <ul>
                    {props.users.map((u) => 
                    <li key={u.id}>
                         {u.name} 
                         ({u.age} years old)
                    </li>)}
               </ul>
          </Card>
     )
}

export default UserList
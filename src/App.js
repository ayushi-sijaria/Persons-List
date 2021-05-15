import React, {useState} from 'react'
import AddUser from './components/Users/AddUser/AddUser'
import UserList from './components/Users/UsersList/UsersList'

function App() {
  const [userList, setUserList] = useState([])

  const addUserHandler = (enteredName, enteredAge) =>
  {
    setUserList((prevState) => 
    [...prevState, {name: enteredName, age: enteredAge, id: Math.random().toString()}])
    
  }

  return (
    <div>
      <AddUser addUser={addUserHandler}/>
      {userList.length && <UserList users={userList}/>}
    </div>
  );
}

export default App;

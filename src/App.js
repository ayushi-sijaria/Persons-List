import React, {useState} from 'react'
import './App.css';
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
    <div className="App">
      <AddUser addUser={addUserHandler}/>
      <UserList users={userList}/>
    </div>
  );
}

export default App;

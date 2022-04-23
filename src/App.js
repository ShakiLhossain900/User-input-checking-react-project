// import './App.css';
import AddUser from './Components/Users/AddUser'
import UserLIst from './Components/Users/UserLIst';
import { useState } from 'react';

function App() {
  const [userLIst,setUserList]= useState([])
  
  const addUserHandler = (uName,uAge)=>{
    setUserList((prevUserList)=>{
      return[...prevUserList,{name:uName, age:uAge, id: Math.random().toString()}];
    })
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserLIst users={userLIst}/>
    </div>
  );
}

export default App;

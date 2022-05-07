import React, { useState } from 'react';

import AddUser from './Components/Users/AddUser'
import UserList from './Components/Users/UserLIst'
function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <React.Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={usersList} />
    </React.Fragment>
  );
}

export default App;

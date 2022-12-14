import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UserLists from './components/Users/UserLists';

function App() {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (uName, uAge) =>{
    setUserList((prevUserList) => {
      return [...prevUserList, {name: uName, age: uAge, id: Math.random().toString()}];
    });
  };

  return (
    <React.Fragment>
      <AddUser onAddUser={addUserHandler}/>
      <UserLists users={userList}/>
      
    </React.Fragment>
  );
}

export default App;

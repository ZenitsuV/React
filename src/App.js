import React, { useState } from "react";

import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

import "./AppStyles.css";

function App() {
  const [users, setUsers] = useState("");

  const addUsersDataHandler = (usersData) => {
    setUsers((prevUsers) => {
      return [usersData, ...prevUsers];
    });
  };

  return (
    <div className="App">
      <AddUser onAddUSers={addUsersDataHandler} />
      <UserList users={users} />
    </div>
  );
}

export default App;

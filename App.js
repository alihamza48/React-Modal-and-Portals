import React, { useState, Fragment } from "react";
import "./App.css";
import AddUser from "./Components/Users/AddUser";
import UsersLIst from "./Components/Users/UsersLIst";

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
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UsersLIst users={[usersList]} />
    </Fragment>
  );
}

export default App;

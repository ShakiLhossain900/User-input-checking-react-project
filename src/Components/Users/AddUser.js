import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('')
  const [enteredUserAge, setEenteredUserAge]=useState('')

  const addUserHandler = (event) => {
     event.preventDefault();
     console.log(enteredUsername, enteredUserAge)
  };

  const userNameChangeHandler =(event) => {
      setEnteredUsername(event.target.value)
  }
  const userAgeChangeHandler=(event) => {
    setEenteredUserAge(event.target.value)
  }


  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" onChange={userNameChangeHandler} />
        <label htmlFor="age">Age(Years)</label>
        <input id="age" type="number" onChange={userAgeChangeHandler} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;

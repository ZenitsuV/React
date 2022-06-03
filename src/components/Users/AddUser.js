import React, { useState, useRef } from "react";
import classes from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  //const [enteredUsername, setEnteredUsername] = useState("");
  //const [enteredUserAge, setEnteredUserAge] = useState("");
  const [error, setError] = useState();

  /*  const usernameChangeHandler = (e) => {
    setEnteredUsername(e.target.value);
  };

  const userAgeChangeHandler = (e) => {
    setEnteredUserAge(e.target.value);
  };   */

  const addUserHandler = (e) => {
    e.preventDefault();
    const enteredUsernameRef = nameInputRef.current.value;
    const enteredUserAgeRef = ageInputRef.current.value;

    if (
      enteredUsernameRef.trim().length === 0 ||
      enteredUserAgeRef.trim().length === 0
    ) {
      setError({
        title: "Invalid Input",
        message: "Please Enter a valid name and age (non-empty values)"
      });
      return;
    }
    if (+enteredUserAgeRef < 1) {
      setError({
        title: "Invalid age",
        message: "Please Enter a valid age > 0"
      });
      return;
    }

    const usersData = {
      username: enteredUsernameRef,
      age: +enteredUserAgeRef,
      id: Math.random().toString().slice(2)
    };

    props.onAddUSers(usersData);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const ErrorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={ErrorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">User Name</label>
          <input
            id="username"
            type="text"
            autoComplete="Off"
            ref={nameInputRef}
          />
          <label htmlFor="age">Age(Years)</label>
          <input id="age" type="number" ref={ageInputRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;

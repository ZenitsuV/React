import React from "react";

import Card from "../UI/Card";
import classes from "./UserList.module.css";

const UserList = (props) => {
  let usersContent;
  if (props.users.length === 0) {
    usersContent = <h2 className="expenses-list__fallback">No Users found.</h2>;
  }
  if (props.users.length > 0) {
    usersContent = props.users.map((i) => (
      <li key={i.id}>
        {i.username} ({i.age} years old)
      </li>
    ));
  }

  return (
    <Card className={classes.users}>
      <ul>{usersContent}</ul>
    </Card>
  );
};

export default UserList;

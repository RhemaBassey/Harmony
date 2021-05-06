import React from "react";
import { Switch, Route } from "react-router-dom";


import ChatRoom from "../pages/ChatRoom";
import Profile from "../pages/Profile";


const Main = () => {
  return (
    <Switch>
      {" "}
      {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path="/chatroom" component={ChatRoom}></Route>

      <Route exact path="/profile" component={Profile}></Route>
    </Switch>
  );
};

export default Main;

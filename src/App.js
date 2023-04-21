import React from "react";
import "./index.css";
import NavBar from "./Components/NavBar";
import UserProfile from "./Components/UserProfile";
import Posts from "./Components/Posts";
import Contacts from "./Components/Contacts";

function App () {
  return <div className="app">
    <NavBar/>
    <div className="app-body">
    <UserProfile/>
    <Posts/>
    <Contacts/>
    </div>
  </div>;
};

export default App;

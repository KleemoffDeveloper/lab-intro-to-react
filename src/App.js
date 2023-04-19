import React from "react";
import "./index.css";

function NavBar (link1) {
  return <nav>
    <ul className="nav-list">
      <img src={'https://www.svgrepo.com/show/500514/coffee-cup.svg'} className="logo"></img>
      <li><a href="#">{'hi'}</a></li>
      <li><a href="#">Blank</a></li>
      <li><a href="#">Blank</a></li>
    </ul>
  </nav>
}

function ContactUserCard (contactImageURL, contactName, contactSubText, contactBodyText) {
  return <div className="contact-card">
    <img src={'./'} className="contact-image"></img>
    <ul className="contact-info-list">
      <li><h2 className="contact-name">{contactName}</h2></li>
      <li><h3 className="contact-sub">{contactSubText}</h3></li>
      <li><p className="contact-body">{contactBodyText}</p></li>
    </ul>
  </div>
}

function UserProfile () {
  return <div className="user-profile">

  </div>
}

function Post () {
  return <div className="post">

  </div>
}

function Posts () {
  return <ul className="post-list">

  </ul>
}

function Contacts () {
  return <ul className="contact-list">

  </ul>
}

function App () {
  return <div>
    <NavBar/>
    <UserProfile/>
    <Posts></Posts>
    <Contacts></Contacts>
  </div>;
};

export default App;

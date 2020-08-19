import React, { Component } from "react";
import "./App.css";
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";
import Header from "./Header/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <UserInput />
        <UserOutput />
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import "./App.css";
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";
import Header from "./Header/Header";

class App extends Component {
  state = {
    data: [{ userText: "", username: "User Name" }],
  };

  textChangeHandler = (event) => {
    this.setState({
      data: [{ userText: "", username: event.target.value }],
    });
  };

  render() {
    const style = {
      backgroundColor: "red",
    };

    return (
      <div style={style} className="App">
        <Header />
        <UserInput changed={this.textChangeHandler} />
        <UserOutput username={this.state.data[0].username} />
        <UserOutput username={this.state.data[0].username} />
      </div>
    );
  }
}

export default App;

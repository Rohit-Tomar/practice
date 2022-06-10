import React, { Component } from "react";
import Person from "./Person/Person";

import "./App.css";

class App extends Component {
  state = {
    persons: [
      { name: "max", age: 28 },
      { name: "Rohit", age: 23 },
      { name: "Anku", age: 20 },
    ],
    otherState: "some other value",
  };

  switchNameHandler = newName => {
    console.log("Was Clicked!");
    this.setState({
      persons: [
        { name: "Salman", age: 28 },
        { name: newName, age: 23 },
        { name: "Monu", age: 20 },
      ],
    });
  };

  nameChangeHandler = event => {
    this.setState({
      persons: [
        { name: "Salman", age: 28 },
        { name: event.target.value, age: 23 },
        { name: "Monu", age: 20 },
      ],
    });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solod blue",
      padding: "8px",
    };

    return (
      <div className="App">
        <h1>Hi i am in react App</h1>
        <p>This is really working</p>
        <button style={style} onClick={() => this.switchNameHandler("Ramu")}>
          Switch name
        </button>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          changed={this.nameChangeHandler}
        />
        <Person
          name="Max"
          age="29"
          click={this.switchNameHandler.bind(this, "Ramu")}
        >
          My Hobbie: Racing
        </Person>
      </div>
    );
  }
}

export default App;

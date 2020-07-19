import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: 122, name: "Max", age: 28 },
      { id: 124, name: "Manu", age: 29 },
      { id: 125, name: "Stephanie", age: 26 },
    ],
    otherStatte: "some other value",
    showPerson: false,
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex],
    };

    person.name = event.target.value;

    const persons = [...this.state.value];
    persons[personIndex] = persons;

    this.setState({ persons: persons });
  };
  togglePersonsHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({ showPerson: !doesShow });
  };

  render() {
    let persons = null;

    if (this.state.showPerson) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
      /*style.backgroundColor = "red";
      style[":hover"] = {
        backgroundColor: "salmon",
        color: "black",
      };*/
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red"); // classes push red
    }

    if (this.state.persons.length >= 1) {
      classes.push("bold"); // classes push bold
    }

    return (
      <div className="App">
        <h1>Hi, I am React App</h1>
        <p className={classes.join(" ")}>This is really working</p>
        <button onClick={this.togglePersonsHandler}> Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;

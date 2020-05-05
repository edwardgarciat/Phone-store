import React, { Component } from "react";
import "./App.css";
//import Radium, { StyleRoot } from "radium";
import Person from "./Person/Person";

const StyledButton = styled.button`

  background-color: ${(props) => (props.alt ? "red" : "green")};
  font: white;
  border:1px solid blue;
  padding: 8px;
  cursor: pointer;
  
  &:hover: 
    backgroundColor: ${(props) => (props.alt ? "salmon" : "lightgreen")},
   "black",
  
}`;

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

  /* switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: "Manu", age: 29 },
        { name: "Stephanie", age: 27 },
      ],
    });
  };
*/

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
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
    /* const style = {
      backgroundColor: "green",
      font: "white",
      border: " 1px solid blue",
      padding: "8px",
      cursor: "pointer",
      ":hover": {
        backgroundColor: "lightgreen",
        color: "black",
      },
    };
*/
    let persons = null;
    let btnclass = [classes.Button];

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
        /* <div>
          <Person
            name={this.state.persons[0].name}
            Age={this.state.persons[0].age}
          />
          <Person
            name={this.state.persons[1].name}
            Age={this.state.persons[1].age}
          />
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
            click={this.switchNameHandler.bind(this, "Max!")}
            changed={this.nameChangedHandler}
          >
            My Hobbies: racing
          </Person>
        </div>*/
      );
      /* style.backgroundColor = "red";
      style[":hover"] = {
        backgroundColor: "salmon",
        color: "black",
      };*/
    }

    // let classes = ["red", "bold"].join(" ");
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
        <StyledButton
          atl={this.state.persons}
          onClick={this.togglePersonsHandler}
        >
          Toggle Persons
        </StyledButton>
        {persons}
      </div>
    );
  }
}
/*return React.createElement(
      "div",
      { className: App },
      React.createElement("h1", null, "Does this work now?")
    );*/

export default App;

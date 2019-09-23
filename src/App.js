import React from 'react';
import './App.css';
import Person from "./Person/Person";
import Validation from "./Validation/Validation"
import Character from "./Character/Character"

class App extends React.Component {
  state = {
    persons: [{ name: "Shradha" }, { name: "Gaurav" }],
    student: { name: "Ranam" },
    isValid: false
  }

  style = {
    border: '1px solid black',
    'margin': '0 auto 10px',
    padding: '10px',
    width: '500px'
  }

  changeNameHandler = (event, index) => {
    const persons = [...this.state.persons];
    persons[index].name = event.target.value;
    this.setState({ persons: persons })
  }

  deleteCharHandler = (charIndex, personIndex) => {
    const persons = [...this.state.persons];
    const person = persons[personIndex];
    const name = person.name.split('');
    name.splice(charIndex, 1);
    person.name = name.join('');
    persons[personIndex] = person;
    this.setState({ persons: persons })
  }

  deleteHandler = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons: persons })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, Shradha!!</h1>
        {this.state.persons.map((person, index) => {
          const charList = person.name.split('').map((char, charIndex) => {
            return <Character key={charIndex} character={char} click={() => this.deleteCharHandler(charIndex, index)} />
          })

          return (
            <div key={index} style={this.style}>
              <Person name={person.name} index={index} delete={this.deleteHandler} change={this.changeNameHandler} />
              <Validation length={person.name.length}></Validation>
              {charList}
            </div>
          )
        })}
      </div>
    );
  }
}

export default App;

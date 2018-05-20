import React, { Component } from 'react';
import './App.css';
import Person from "./component/Person/person";

class App extends Component {
  state = {
    persons: [
      {name: "Bob", age: 33},
      {name: "Sarah", age: 44},
      {name: "Sponge Bob", age: 11}
    ]
  }

  onClickHandler = (newName) =>{
    this.setState({
      persons: [
        { name: newName, age: 153 },
        { name: "Steve", age: 23 },
        { name: "Patric", age: 13 }
      ]})
  }

  onChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: "Logan", age: 153 },
        { name: event.target.value, age: 23 },
        { name: "S. Bob", age: 11 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>this is a react app</h1>
        <button onClick={() => this.onClickHandler("other test")}>Switch Name</button>
        <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age}/>
        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        click={this.onClickHandler.bind(this, "Name test")}
        changed={this.onChangeHandler}>
        Put more text here!?</Person>
        <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age}/>
       
      </div>
    );
  }
}

export default App;

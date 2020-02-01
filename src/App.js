import React, {Component} from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {
    state = {
      persons:[
        {name:'Ankur',age:30},
        {name:'Rimpal',age:30},
        {name:'Hardik',age:26}
      ]
    };

    switchNameHandler = () =>{
      // console.log("Was Clicked");
      //Don't Do This:   this.state.persons[0].name = "Ankur Desai";
       debugger;
        this.setState({persons:[
                {name:'Ankur Desai',age:30},
                {name:'Rimpal',age:30},
                {name:'Hardik',age:27}
              ]})
    };
    render() {
        return (
            <div className="App">
                <h1>React</h1>
                <button onClick={this.switchNameHandler}>Switch Name</button>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
                <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
            </div>
        );
    }
}

export default App;

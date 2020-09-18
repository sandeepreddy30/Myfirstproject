import React, { Component } from 'react';
import NavBar from './components/navbar';
//import logo from './logo.svg';
import './App.css';
//import Movies from'./components/movies2';
import Counters from './components/counters';
import { render } from '@testing-library/react';
//function App() {
class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 1 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ]
  };
  handleINcrement = counter => {
    //console.log(counter) ;
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
    //console.log(this.state.counters[0]);
  };
  handleDecrement = counter => {
    //console.log(counter) ;
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
    //console.log(this.state.counters[0]);
  };
  handleDelete = (counterId) => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
    //console.log('delete clicked',counterId);
  };
  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    })
    this.setState({ counters });
  };
  render() {
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleINcrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete} />
        </main></React.Fragment>
    );
  }
}

export default App;

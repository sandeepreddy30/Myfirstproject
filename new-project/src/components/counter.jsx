import React, { Component } from "react";
import Counters from "./counters";

//constructor(){
//   super();
//this.handlingIncrement = this.handlingIncrement.bind(this);
//}
//instead of writing a constructor we can map with arrow functions as below.

//obj.method();
//function();
//doHandleIncrement = () => {
// this.handlingIncrement({id : 1});
//}
//Whenever we need to pass an arguments to the event handlers simply pass an arrow function here
//and the body of that function called event handler and pass an argument!! as below in onclick method
class Counter extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-1">
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        </div>
        <div className="col">
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm m-2"
          >
            +
          </button>
          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="btn btn-secondary btn-sm m-2"
            disabled={this.props.counter.value === 0 ? "disabled" : ""}
          >
            -
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm "
          >
            Delete
          </button>
        </div>

        <h4> {this.props.id}</h4>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "zero" : value;
  }
}

export default Counter;

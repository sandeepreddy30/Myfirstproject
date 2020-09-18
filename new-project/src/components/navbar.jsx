import React, { Component } from "react";
//class NavBar extends Component {

//render() {
// return (
//    <nav class="navbar navbar-light bg-light">
//<a class="navbar-brand" href="#">
// Navbar <span className="badge badge-pill badge-secondary">
//     {this.props.totalCounters}
// </span>
//  </a>
//</nav>
//instead of using classes we choose to prefer stateless functional components..as below
//);
const NavBar = ({ totalCounters }) => {
  return (
    <nav class="navbar navbar-light bg-light">
      <a class="navbar-brand" href="#">
        number of counters{" "}
        <span className="badge badge-pill badge-success">{totalCounters}</span>
      </a>
    </nav>
    // in stateless functional components we cannot use this.props because
    //this is only used in class components. in functional components add props as a parameter
    //and reacts sends props object as an argument to this function at runtime.
  );
};

// export default NavBar;
//    }
//}

export default NavBar;

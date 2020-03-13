import React, { Component } from "react";

class MovieTabs extends Component {
  render() {
    return (
      <ul className="tabs nav nav-pills">
        <li className="nav-item">
          <div className="nav-link active">Popularity desk</div>
        </li>
        <li className="nav-item">
          <div className="nav-link">Revenue desk</div>
        </li>
        <li className="nav-item">
          <div className="nav-link">Vote average desk</div>
        </li>
      </ul>
    );
  }
}

export default MovieTabs;

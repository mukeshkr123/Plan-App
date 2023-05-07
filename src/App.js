import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import React, { Component } from "react";
import Plan from "./component/Plan";

class App extends Component {
  render() {
    return (
      <div className="container-fluid my-5">
        <div className="row">
          <div className="col-sm-6 mx-auto text-white shadow-lg p-3">
            <h1 className="text-center">Today's Plan</h1>
            <div className="row">
              <div className="col-9">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Write Plan Here"
                />
              </div>
              <div className="col-2">
                <button className="btn btn-warning px-5 fw-bold">Add</button>
              </div>
              <div className="container-fluid">
                <ul className="list-unstyled row m-5">
                  <Plan />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

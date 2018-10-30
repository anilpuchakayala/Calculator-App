import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value1: 0,
      value2: 0,
      value3: 0,
      selected: "add"
    };
    this.updateInputChange = this.updateInputChange.bind(this);
    this.updateChange = this.updateChange.bind(this);
  }
  style = { width: "18rem" };
  updateInputChange = e => {
    if (e.target.value.match("^[0-9]*$") != null) {
      this.setState({ [e.target.name]: parseInt(e.target.value) });
    }
    if (e.target.value === "") this.setState({ [e.target.name]: 0 });
  };
  updateChange = e => {
    this.setState({ selected: e.target.value });
  };
  render() {
    const { value1, value2, value3, selected } = this.state;
    let result;
    if (selected === "add") {
      result = value1 + value2 + value3;
    } else {
      result = value1 * value2 * value3;
    }
    return (
      <React.Fragment>
        <div className="container-fluid mt-4">
          <div className="row justify-content-center">
            <div className="col-auto mb-3">
              <div className="card bg-primary" style={this.style}>
                <div className="card-body text-center">
                  <label>
                    value 1:
                    <input
                      type="text"
                      name="value1"
                      value={value1}
                      onChange={this.updateInputChange}
                    />
                  </label>
                </div>
              </div>
            </div>
            <div className="col-auto mb-3">
              <div className="card bg-primary" style={this.style}>
                <div className="card-body text-center">
                  <label>
                    value 2:
                    <input
                      type="text"
                      name="value2"
                      value={value2}
                      onChange={this.updateInputChange}
                    />
                  </label>
                </div>
              </div>
            </div>
            <div className="col-auto mb-3">
              <div className="card bg-primary" style={this.style}>
                <div className="card-body text-center">
                  <label>
                    value 3:
                    <input
                      type="text"
                      name="value3"
                      value={value3}
                      onChange={this.updateInputChange}
                    />
                  </label>
                </div>
              </div>
            </div>
            <div className="col-auto mb-3">
              <div className="card bg-warning" style={this.style}>
                <div className="card-body text-center">
                  <div className="radio">
                    <label>
                      <input
                        type="radio"
                        value="add"
                        checked={selected === "add"}
                        onChange={this.updateChange}
                      />
                      Sum
                    </label>
                  </div>
                  <div className="radio">
                    <label>
                      <input
                        type="radio"
                        value="mul"
                        checked={selected === "mul"}
                        onChange={this.updateChange}
                      />
                      Muitiply
                    </label>
                  </div>
                  <span>Result:{result}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;

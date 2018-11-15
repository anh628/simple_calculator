import React from "react";
import Display from "../component/Display";
import KeyPad from "../component/KeyPad";
import * as math from "mathjs";

class App extends React.Component {
  state = {
    result: []
  };

  calculate = equation => {
    try {
      equation = equation.join("");
      equation = math.eval(equation);
      return math.format(equation, 5);
    } catch {
      return "Error";
    }
  };

  onClick = buttonName => {
    let equation = [...this.state.result];
    if (buttonName === "=") {
      equation = [this.calculate(equation)];
    } else if (buttonName === "C") {
      equation = [];
    } else if (buttonName === "Ce") {
      equation.pop();
    } else {
      equation.push(buttonName);
    }
    this.setState({ result: equation });
  };

  render() {
    return (
      <div>
        <div className="calculator-body">
          <h1>Simple Calculator</h1>
          <Display result={this.state.result} />
          <KeyPad onClick={this.onClick} />
        </div>
      </div>
    );
  }
}

export default App;

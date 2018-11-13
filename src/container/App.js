import React from "react";
import Display from "../component/Display";
import KeyPad from "../component/KeyPad";
import * as math from "mathjs";

class App extends React.Component {
  state = {
    result: ""
  };

  calculate = () => {
    let calculation = math.eval(this.state.result);
    this.setState({ result: calculation });
  };

  reset = () => {
    this.setState({ result: "" });
  };

  backspace = () => {
    this.setState({ result: this.state.result.slice(0, -1) });
  };

  onClick = button => {
    if (button === "=") {
      this.calculate();
    } else if (button === "C") {
      this.reset();
    } else if (button === "CE") {
      this.backspace();
    } else {
      let newResult = this.state.result + button;
      this.setState({
        result: newResult
      });
    }
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

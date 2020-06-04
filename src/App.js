import React from "react";
import Car from "./Car";

let count = 0;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      CarList: []
    };
    this.AddCar = this.AddCar.bind(this);
  }

  AddCar() {
    count++;
    this.setState({
      CarList: this.state.CarList.push(count)
    });
    console.log(this.state.CarList);
    //return <Car id={count} />;
  }

  render() {
    console.log(this.state);
    return (
      <div className="mainContainer">
        <button name="addButton" className="addCar" onClick={this.AddCar}>
          Add Car
        </button>
        <div>
          {this.state.CarList.map(item => {
            return <Car id={item} />;
          })}
        </div>
      </div>
    );
  }
}
export default App;

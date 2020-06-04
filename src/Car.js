import React from "react";

class Car extends React.Component {
  constructor() {
    super();
    this.state = {
      start: false,
      stop: false,
      speed: 0,
      id: this.props.id
    };
    this.statusChange = this.statusChange.bind(this);
    this.deleteCar = this.deleteCar.bind(this);
    this.startCar = this.startCar.bind(this);
    this.accelerateCar = this.accelerateCar.bind(this);
    this.brakeCar = this.brakeCar.bind(this);
    this.stopCar = this.stopCar.bind(this);
  }

  statusChange() {
    if (this.state.speed > 0) {
      return <p>Running with {this.state.speed} kmph</p>;
    } else if (this.state.start) {
      return <p>Running</p>;
    } else {
      return <p>Stopped</p>;
    }
  }
  deleteCar() {}
  startCar() {
    this.setState = {
      start: true,
      stop: false
    };
  }
  stopCar() {
    this.setState = {
      stop: true,
      start: false
    };
  }
  accelerateCar() {
    if (this.state.start) {
      this.setState = {
        speed: this.state.speed + 10
      };
    }
  }
  brakeCar() {
    if (this.state.start && this.state.speed > 0) {
      this.setState = {
        speed: this.state.speed - 10
      };
    }
  }

  render() {
    return (
      <div className="newCar">
        <div className="carCross">
          <div className="carNumber">Car :{this.state.id}</div>
          <button name="delete" onClick={this.deleteCar}>
            delete
          </button>
        </div>
        <div className="startStatusAccelerateApply">
          <button name="start" value="start" onClick={this.startCar}>
            Start
          </button>
          <div className="status">Status : {this.statusChange}</div>
          <div className="accelerateApplyBrakes">
            <button name="accelerate" onClick={this.accelerateCar}>
              accelerate
            </button>
            <button name="brake" onClick={this.brakeCar}>
              brake
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Car;

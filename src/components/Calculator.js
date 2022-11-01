import React, { Component } from 'react';
import './calculator.css';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calculator-container">
        <div className="calculator">
          <input className="output-display" htmlFor="textarea" placeholder="0" disabled />
          <div className="buttons-div">
            <button className="buttons" type="button">AC</button>
            <button className="buttons" type="button">+/-</button>
            <button className="buttons" type="button">%</button>
            <button className="buttons" type="button">÷</button>
          </div>
          <div className="buttons-div">
            <button className="buttons" type="button">7</button>
            <button className="buttons" type="button">8</button>
            <button className="buttons" type="button">9</button>
            <button className="buttons" type="button">x</button>
          </div>
          <div className="buttons-div">
            <button className="buttons" type="button">4</button>
            <button className="buttons" type="button">5</button>
            <button className="buttons" type="button">6</button>
            <button className="buttons" type="button">-</button>
          </div>
          <div className="buttons-div">
            <button className="buttons" type="button">1</button>
            <button className="buttons" type="button">2</button>
            <button className="buttons" type="button">3</button>
            <button className="buttons" type="button">+</button>
          </div>
          <div className="buttons-last-div">
            <button className="buttons" type="button">0</button>
            <button className="buttons" type="button">.</button>
            <button className="buttons" type="button">=</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;

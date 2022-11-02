import React, { Component } from 'react';
import './calculator.css';
import calculate from '../logic/calculate';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };

    this.onClick = (e) => {
      const data = e.target.innerHTML;
      const result = calculate(this.state, data);
      this.setState(result);
    };
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="calculator-container">
        <div className="calculator">
          <div className="output-display">
            {total}
            {' '}
            {next}
            {' '}
            {operation}
          </div>
          <div className="buttons-div">
            <button className="buttons" onClick={this.onClick} type="button">AC</button>
            <button className="buttons" onClick={this.onClick} type="button">+/-</button>
            <button className="buttons" onClick={this.onClick} type="button">%</button>
            <button className="buttons" onClick={this.onClick} type="button">÷</button>
          </div>
          <div className="buttons-div">
            <button className="buttons" onClick={this.onClick} type="button">7</button>
            <button className="buttons" onClick={this.onClick} type="button">8</button>
            <button className="buttons" onClick={this.onClick} type="button">9</button>
            <button className="buttons" onClick={this.onClick} type="button">x</button>
          </div>
          <div className="buttons-div">
            <button className="buttons" onClick={this.onClick} type="button">4</button>
            <button className="buttons" onClick={this.onClick} type="button">5</button>
            <button className="buttons" onClick={this.onClick} type="button">6</button>
            <button className="buttons" onClick={this.onClick} type="button">-</button>
          </div>
          <div className="buttons-div">
            <button className="buttons" onClick={this.onClick} type="button">1</button>
            <button className="buttons" onClick={this.onClick} type="button">2</button>
            <button className="buttons" onClick={this.onClick} type="button">3</button>
            <button className="buttons" onClick={this.onClick} type="button">+</button>
          </div>
          <div className="buttons-last-div">
            <button className="buttons" onClick={this.onClick} type="button">0</button>
            <button className="buttons" onClick={this.onClick} type="button">.</button>
            <button className="buttons" onClick={this.onClick} type="button">=</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;

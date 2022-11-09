import React, { useState } from 'react';
import './calculator.css';
import calculate from '../logic/calculate';
import calcImage from '../images/calculator-image.png';

const Calculator = () => {
  const [count, setCount] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const onClick = (e) => {
    const data = e.target.innerHTML;
    const result = calculate(count, data);
    setCount(result);
  };

  const { total, next, operation } = count;
  return (
    <div className="calculator-container">
      <section className="calcImage-heading-container">
        <h1 className="for-destkop desk-heading">Lets Do Some Maths</h1>
        <img className="calc-image" src={calcImage} alt="Mathematical set arranged together" />
      </section>
      <div className="calculator">
        <div className="output-display">
          {total}
          {' '}
          {next}
          {' '}
          {operation}
        </div>
        <div className="buttons-div">
          <button className="buttons" onClick={onClick} type="button">AC</button>
          <button className="buttons" onClick={onClick} type="button">+/-</button>
          <button className="buttons" onClick={onClick} type="button">%</button>
          <button className="buttons" onClick={onClick} type="button">÷</button>
        </div>
        <div className="buttons-div">
          <button className="buttons" onClick={onClick} type="button">7</button>
          <button className="buttons" onClick={onClick} type="button">8</button>
          <button className="buttons" onClick={onClick} type="button">9</button>
          <button className="buttons" onClick={onClick} type="button">x</button>
        </div>
        <div className="buttons-div">
          <button className="buttons" onClick={onClick} type="button">4</button>
          <button className="buttons" onClick={onClick} type="button">5</button>
          <button className="buttons" onClick={onClick} type="button">6</button>
          <button className="buttons" onClick={onClick} type="button">-</button>
        </div>
        <div className="buttons-div">
          <button className="buttons" onClick={onClick} type="button">1</button>
          <button className="buttons" onClick={onClick} type="button">2</button>
          <button className="buttons" onClick={onClick} type="button">3</button>
          <button className="buttons" onClick={onClick} type="button">+</button>
        </div>
        <div className="buttons-last-div">
          <button className="buttons" onClick={onClick} type="button">0</button>
          <button className="buttons" onClick={onClick} type="button">.</button>
          <button className="buttons" onClick={onClick} type="button">=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;

import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [counterInc, setCounterInc] = useState(0);
  const [counterDec, setCounterDec] = useState(0);

  function increment() {
    setCounter((prevState) => prevState + 1);
    setCounterInc(counterInc + 1);
  }
  function decrement() {
    setCounter(counter - 1);
    setCounterDec(counterDec + 1);
  }

  return (
    <>
      <div>
        <h1>Счетчик: {counter}</h1>
        <Button onClick={decrement} variant="outline-danger" className=" m-3">
          -
        </Button>
        <Button onClick={increment} variant="outline-success" className=" m-3">
          +
        </Button>
        <p>Вы нажали кнопку "-" {counterDec} раз</p>
        <p>Вы нажали кнопку "+" {counterInc} раз</p>
      </div>
      <div className=" m-3 justify-content-center d-flex">
        <div>
          <Button type="submit" variant="outline-primary" className="m-3">
            {" "}
            <Link to="/">Меню</Link>
          </Button>
        </div>
        <div>
          <Button type="submit" variant="outline-primary" className="m-3">
            {" "}
            <Link to="/links">Если хотите в кафе то нажми на меня</Link>
          </Button>
        </div>
        <div>
          <Button type="submit" variant="outline-primary" className="m-3">
            {" "}
            <Link to="/checktRegistration">Пункт для регистрации</Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Counter;

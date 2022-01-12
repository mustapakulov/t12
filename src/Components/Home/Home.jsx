import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Home = () => {
  return (
    <div>
       <div>
        <Button type="submit" variant="outline-primary" className="m-3">
          {" "}
          <Link to="/counter">Счетчик</Link>
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
  );
};

export default Home;

import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Recepts from "../Recepts/Recepts";

const Links = () => {
  const [meal, setMeal] = useState({
    id: "",
  });

  function wrappRecepts(e) {
    setMeal({
      ...meal,
      id: e.target.id,
    });
  }

  return (
    <>
      <div>
        <h2>Меню</h2>
        <Button
          variant="secondary"
          className="m-3"
          id="krylo"
          value={"krylo]"}
          onClick={wrappRecepts}
        >
          крыложки жаренные
        </Button>
        <Button
          variant="secondary"
          className="m-3"
          id="kartoshka"
          value={"kartoshka"}
          onClick={wrappRecepts}
        >
          картошка жаренное
        </Button>
        <Button
          variant="secondary"
          className="m-3"
          id="manty"
          value={"manty"}
          onClick={wrappRecepts}
        >
          манты
        </Button>
        <Recepts meal={meal} />
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
            <Link to="/counter">Счетчик</Link>
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

export default Links;

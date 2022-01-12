import React from "react";
import { Button } from "react-bootstrap";

const PageListner = (props) => {
  return (
    <div>
      <h1>Добро пожаловать, {props.form.email}</h1>
      <Button
        variant="outline-danger"
        className="m-3"
        onClick={() => props.setShow(true)}
      >
        Выйти
      </Button>
    </div>
  );
};

export default PageListner;

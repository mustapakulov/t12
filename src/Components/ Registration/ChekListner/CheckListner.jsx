import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const CheckListner = ({ form, setForm, setShow }) => {
  const submit = (e) => {
    e.preventDefault();
    if (checkPassword() || checkForm()) {
      return;
    }

    setShow(false);
  };

  const update = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  function checkForm() {
    if (
      !form.email.trim() ||
      !form.password.trim() ||
      !form.newPassword.trim()
    ) {
      alert("Необходимо заполнить все поля");
      return true;
    } else {
      return false;
    }
  }

  function checkPassword() {
    if (form.password !== form.newPassword) {
      alert("Пароли несовпадают");
      return true;
    } else {
      return false;
    }
  }

  return (
    <>
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
            <Link to="/links">Если хотите в кафе то нажми на меня</Link>
          </Button>
        </div>
      </div>
      <div>
        <form onSubmit={submit}>
          <label className="m-3">
            Электронная почта:
            <br />
            <input
              type="email"
              value={form.email}
              onChange={update}
              name="email"
            />
          </label>
          <br />
          <label className="m-3">
            Пароль:
            <br />
            <input
              type="password"
              value={form.password}
              onChange={update}
              name="password"
            />
          </label>
          <br />
          <label className="m-3">
            Подтверждение пароля:
            <br />
            <input
              type="password"
              value={form.newPassword}
              onChange={update}
              name="newPassword"
            />
          </label>
          <br />
          <Button type="submit" variant="outline-primary" className="m-3">
            Войти
          </Button>
        </form>
      </div>
    </>
  );
};

export default CheckListner;

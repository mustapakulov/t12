import React, { useState } from "react";
import CheckListner from "../ChekListner/CheckListner";
import PageListner from "../PageListner/PageListner";


const ChecktRegistration = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    newPassword: "",
  });

  const [show, setShow] = useState(true);

  return (
    <div>
      {show ? (
        <CheckListner form={form} setForm={setForm} setShow={setShow} />
      ) : (
        <PageListner form={form} setShow={setShow} />
      )}
    </div>
  );
};

export default ChecktRegistration;

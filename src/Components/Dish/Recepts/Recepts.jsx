import React from "react";

const Recepts = (props) => {
  console.log(props);

  if (props.meal.id === "krylo") {
    return (
      <>
        <div>
          <p>1 куринное крыложки</p>
          <p>2 масло</p>
          <p>3 соль</p>
          <p>4 приправы</p>
        </div>
      </>
    );
  }
  if (props.meal.id === "kartoshka") {
    return (
      <>
        <div>
          <p>1 картошка</p>
          <p>2 мясо</p>
          <p>3 лук</p>
          <p>4 приправы</p>
        </div>
      </>
    );
  }
  if (props.meal.id === "manty") {
    return (
      <>
        <div>1 тесто</div>
        <div>2 мясо</div>
        <div>3 приправы</div>
        <div>4 соль</div>
      </>
    );
  }
  return <></>;
};

export default Recepts;

import React from "react";
import "./Person.css";

const person = (props) => {
  /* const style = {
    "@media (min-width: 500px)": {
      width: "450px",
    },
  };
*/
  return (
    <div className="Person">
      <p onClick={props.click}>
        I'm a person {props.name} and I am {props.age} years old
      </p>
      <p>{props.children}</p>
      <input type="text" onClick={props.changed} value={props.value} />
    </div>
  );
};

export default person;

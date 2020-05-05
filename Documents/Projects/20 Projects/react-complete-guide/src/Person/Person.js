import React from "react";
import "./Person.css";
//import Radium, { StyleRoot } from "radium";
import styled from "styled-components";

const StyleDiv = style.div`{
  width: 60%;
  margin: auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;

  "@media (min-width: 500px)": {
     "450px",
}
`;

const person = (props) => {
  const style = {
    "@media (min-width: 500px)": {
      width: "450px",
    },
  };

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

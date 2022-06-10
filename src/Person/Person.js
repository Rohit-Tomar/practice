import React from "react";

import "./Person.css";

const Person = props => {
  return (
    <div className="Person">
      <p onClick={props.click}>
        I'm a {props.name} and i am {props.age} years old
      </p>
      {props.children}
      <input type="text" onChange={props.changed} />
    </div>
  );
};

export default Person;

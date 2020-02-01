import React from "react";

const Person = (props) =>{
  return (
      <div>
        <h1>
          My Name is {props.name} & age is {props.age}
        </h1>
      </div>
  )
};

export default Person;
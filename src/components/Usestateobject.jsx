import React, { useState } from "react";

const Usestateobject = () => {
  const [person, setPerson] = useState({
    name: "John Doe",
    age: 78,
    job: "Software Tester",
  });
  const change = () => {
    setPerson({ ...person, age: 23, job: "Product Manager" });
  };
  return (
    <div>
      <h1>Use state Object</h1>
      <h2>{person.name}</h2>
      <p> {person.age}</p>
      <p> {person.job} </p>

      <button onClick={change}>Change Age</button>
    </div>
  );
};

export default Usestateobject;

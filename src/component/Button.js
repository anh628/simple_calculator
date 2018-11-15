import React from "react";

const Button = ({ onClick, name }) => (
  <button className="button" onClick={e => onClick(name)}>
    {name}
  </button>
);

export default Button;

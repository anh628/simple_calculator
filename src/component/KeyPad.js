import React from "react";
import Button from "./Button";

const KeyPadComponent = ({ onClick }) => (
  <div className="button">
    <Button name="C" onClick={onClick} />
    <Button name="(" onClick={onClick} />
    <Button name=")" onClick={onClick} />
    <Button name="/" onClick={onClick} />
    <br />
    <Button name="7" onClick={onClick} />
    <Button name="8" onClick={onClick} />
    <Button name="9" onClick={onClick} />
    <Button name="*" onClick={onClick} />
    <br />
    <Button name="4" onClick={onClick} />
    <Button name="5" onClick={onClick} />
    <Button name="6" onClick={onClick} />
    <Button name="-" onClick={onClick} />
    <br />
    <Button name="1" onClick={onClick} />
    <Button name="2" onClick={onClick} />
    <Button name="3" onClick={onClick} />
    <Button name="+" onClick={onClick} />
    <br />
    <Button name="Ce" onClick={onClick} />
    <Button name="0" onClick={onClick} />
    <Button name="." onClick={onClick} />
    <Button name="=" onClick={onClick} />
    <br />
  </div>
);

export default KeyPadComponent;

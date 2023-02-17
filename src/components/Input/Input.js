import React from "react";

const Input = (props) => {
  return (
    <input
      type={props.type}
      onChange={props.onChange}
      checked={props.checked}
      className={props.className}
      placeholder={props.placeholder}
      value={props.value}
    />
  );
};

export default Input;

import React, { useState } from "react";

const UseStateTutorial = () => {
  const [inputValue, setInputValue] = useState("");

  let onChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };

  return (
    <div>
      <input placeholder="enter something..." onChange={onChange} />
      {inputValue}
    </div>
  );
};

export default UseStateTutorial;
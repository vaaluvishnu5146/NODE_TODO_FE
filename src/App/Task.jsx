import React, { useState } from "react";

export default function Task() {
  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value);
  }
  
  return (
    <div>
      <input placeholder="Enter something...." onChange={handleChange} />
      <p>{text}</p>
    </div>
  );
}

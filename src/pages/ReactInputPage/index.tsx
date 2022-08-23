import React, { useState } from "react";

const ReactInputPage = (): React.ReactElement => {
  const [contents, setContents] = useState("");
  const [inputText, setInputText] = useState("");

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setContents(inputText);
    setInputText("");
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input
          placeholder="값을 입력해보세요"
          value={inputText}
          onChange={handleChange}
        ></input>
      </form>
      <div className="content-area">{contents}</div>
    </div>
  );
};

export default ReactInputPage;

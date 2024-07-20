import React, { useState, useEffect } from "react";

const DefineSection = ({ onDefineChange }) => {
  const [yourName, setYourName] = useState("");
  const [youIs, setYouIs] = useState("");

  useEffect(() => {
    onDefineChange({ yourName, youIs });
  }, [yourName, youIs, onDefineChange]);

  return (
    <div>
      <h2>DEFINE</h2>
      <label>
        <input
          type="text"
          value={yourName}
          onChange={(e) => setYourName(e.target.value)}
          placeholder="Specify an identity for the model"
        />
      </label>
      <br />
      <label>
        <input
          type="text"
          value={youIs}
          onChange={(e) => setYouIs(e.target.value)}
          placeholder="specify its function"
        />
      </label>
    </div>
  );
};

export default DefineSection;

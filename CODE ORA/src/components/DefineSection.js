import React, { useState, useEffect } from "react";

const DefineSection = ({ onDefineChange }) => {
  const [yourName, setYourName] = useState("");
  const [youIs, setYouIs] = useState("");

  useEffect(() => {
    onDefineChange({ yourName, youIs });
  }, [yourName, youIs, onDefineChange]);

  return (
    <div>
      <h2>DEFINITION</h2>
      <label>
        <input
          type="text"
          value={yourName}
          onChange={(e) => setYourName(e.target.value)}
          placeholder="Specify a definition for the model"
        />
      </label>
    </div>
  );
};

export default DefineSection;

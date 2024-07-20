import React, { useState, useEffect } from "react";

const ContextSection = ({ onContextChange }) => {
  const [place, setPlace] = useState("");
  const [personas, setPersonas] = useState("");
  const [promptLanguage, setPromptLanguage] = useState("");

  useEffect(() => {
    onContextChange({ place, personas, promptLanguage });
  }, [place, personas, promptLanguage, onContextChange]);

  return (
    <div>
      <h2>CONTEXT</h2>
      <label>
        <input
          type="text"
          value={place}
          onChange={(e) => setPlace(e.target.value)}
          placeholder="contextualize the environment"
        />
      </label>
      <br />
      <label>
        <input
          type="text"
          value={personas}
          onChange={(e) => setPersonas(e.target.value)}
          placeholder="Personas"
        />
      </label>
      <br />
      <label>
        <input
          type="text"
          value={promptLanguage}
          onChange={(e) => setPromptLanguage(e.target.value)}
          placeholder="Language"
        />
      </label>
    </div>
  );
};

export default ContextSection;

import React, { useState, useEffect } from "react";

const FunctionSection = ({ onFunctionChange }) => {
  const [expectedResponse, setExpectedResponse] = useState("");

  useEffect(() => {
    onFunctionChange({ expectedResponse });
  }, [expectedResponse, onFunctionChange]);

  return (
    <div>
      <h2>FUNCTION</h2>
      <label>
        <input
          type="text"
          value={expectedResponse}
          onChange={(e) => setExpectedResponse(e.target.value)}
          placeholder="specify the expected response"
        />
      </label>
    </div>
  );
};

export default FunctionSection;

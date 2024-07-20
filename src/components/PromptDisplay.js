import React from "react";

const PromptDisplay = ({ define, context, func }) => {
  return (
    <div>
      <h2>Generated PLC Prompt</h2>
      <pre>
        {`DEFINE 
    YOUR_NAME="${define.yourName}"
    YOU_IS="${define.youIs}"

CONTEXT
    PLACE="${context.place}"
    PERSONAS="${context.personas}"
    PROMPT_LANGUAGE="${context.promptLanguage}"
    
FUNCTION
    EXPECTED_RESPONSE="${func.expectedResponse}"`}
      </pre>
    </div>
  );
};

export default PromptDisplay;

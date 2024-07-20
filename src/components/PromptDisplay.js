import React from 'react';

const PromptDisplay = ({ define, context, func }) => {
  const promptText = `
  //NEURAL_MODEL_INSTRUCTION="Follow definitions below"
  DEFINE 
    YOUR_NAME="${define.yourName}"
    YOU_IS="${define.youIs}"

CONTEXT
    PLACE="${context.place}"
    PERSONAS="${context.personas}"
    PROMPT_LANGUAGE="${context.promptLanguage}"
    
FUNCTION
    EXPECTED_RESPONSE="${func.expectedResponse}"`;

  const handleCopy = () => {
    navigator.clipboard.writeText(promptText).then(() => {
      alert('Prompt copied to clipboard!');
    }).catch(err => {
      console.error('Failed to copy text: ', err);
    });
  };

  return (
    <div>
      <h2>Generated PLC Prompt</h2>
      <pre>{promptText}</pre>
      <button onClick={handleCopy} className="copy-button">Copy Prompt</button>
    </div>
  );
};

export default PromptDisplay;

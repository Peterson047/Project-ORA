import React, { useState } from "react";
import DefineSection from "./components/DefineSection";
import ContextSection from "./components/ContextSection";
import FunctionSection from "./components/FunctionSection";
import PromptDisplay from "./components/PromptDisplay";
import "./App.css";

const App = () => {
  const [define, setDefine] = useState({ yourName: "", youIs: "" });
  const [context, setContext] = useState({
    place: "",
    personas: "",
    promptLanguage: "",
  });
  const [func, setFunction] = useState({ expectedResponse: "" });
  const [showPrompt, setShowPrompt] = useState(false);

  const handleShowPrompt = () => {
    setShowPrompt(true);
  };

  return (
    <div className="App">
      <h1>PLC PROMPT GENERATOR</h1>
      <br></br>
      <DefineSection onDefineChange={setDefine} />
      <ContextSection onContextChange={setContext} />
      <FunctionSection onFunctionChange={setFunction} />
      <button onClick={handleShowPrompt}>Generate Prompt</button>
      {showPrompt && (
        <PromptDisplay define={define} context={context} func={func} />
      )}
    </div>
  );
};

export default App;

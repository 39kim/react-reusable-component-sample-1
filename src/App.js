import React from "react";
import "./App.css";

import CustomCount from "./CustomCount.js";

function App() {
  let customCountApi1 = {};
  let customCountApi2 = {};

  const onCountReady1 = (params) => {
    customCountApi1 = params;
  };

  const onCountReady2 = (params) => {
    customCountApi2 = params;
  };

  return (
    <div className="App">
      <header className="App-header">
        <CustomCount onReady={onCountReady1} />
        <button onClick={() => customCountApi1.setInit()}>set Child Init </button>
        <button onClick={() => customCountApi1.setAdd()}> set Child Add </button>
        <button onClick={() => customCountApi1.setSub()}> set Child Sub </button>
        <CustomCount onReady={onCountReady2} />
        <button onClick={() => customCountApi2.setInit()}>set Child Init </button>
        <button onClick={() => customCountApi2.setAdd()}> set Child Add </button>
        <button onClick={() => customCountApi2.setSub()}> set Child Sub </button>
      </header>
    </div>
  );
}

export default App;

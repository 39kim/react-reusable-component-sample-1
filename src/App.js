import React from "react";
import "./App.css";

import Count from "./CustomCount.js";

function App() {
  let countApi = {};

  return (
    <div className="App">
      <Count
        onReady={(api) => {
          countApi = api;
        }}
      />
      <button onClick={() => countApi.setInit()}>Init</button>
      <button onClick={() => countApi.setAdd()}>Add</button>
      <button onClick={() => countApi.setSub()}>Sub</button>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import "./App.css";

import Count from "./CustomCount.js";

function App() {
  const [count, setCount] = useState(0);
  let countApi = {};

  return (
    <div className="App">
      <p>child Count component value : {count}</p>
      <Count
        onReady={(api) => {
          countApi = api;
        }}
        onChanged={(value) => {
          setCount(value);
        }}
      />
      <button onClick={() => countApi.setInit()}>Init</button>
      <button onClick={() => countApi.setAdd()}>Add</button>
      <button onClick={() => countApi.setSub()}>Sub</button>
      <button onClick={() => alert(countApi.getValue())}>value</button>
    </div>
  );
}

export default App;

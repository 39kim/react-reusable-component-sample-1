import React, { useState, useEffect } from "react";

export default function CustomCount(props) {
  const [count, setCount] = useState(0);

  const api = {
    setInit: () => {
      setCount(0);
    },
    setAdd: () => {
      setCount(count + 1);
    },
    setSub: () => {
      setCount(count - 1);
    },
  };

  useEffect(() => {
    props.onReady(api);
  }, [api, props]);

  return (
    <div>
      <p>You clicked {count} times</p>
      {/* <button onClick={api.setAdd}> Click me </button> */}
    </div>
  );
}

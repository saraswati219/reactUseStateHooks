import { useState } from "react";

import UseState from "./UseState";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import StateClass from "./StateClass";

function App() {
  let [isVisible, setIsVisible] = useState(false);

  return (
    <>
      {isVisible ? <UseState></UseState> : <h1>Component Hide</h1>}
      <button onClick={() => setIsVisible(!isVisible)}>
        Show/Hide Demo component
      </button>

      <StateClass></StateClass>
    </>
  );
}

export default App;

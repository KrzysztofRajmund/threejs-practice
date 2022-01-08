import React from "react";
import SceneBasics from "./SceneBasics/SceneBasics";
import SceneBasicsFiber from "./SceneBasics/SceneBasicsFiber";

const App = () => {
  return (
    <div className="appContainer">
      {/* <SceneBasics /> */}
      <SceneBasicsFiber />
    </div>
  );
};

export default App;

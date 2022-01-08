import React from "react";
import SceneBasics from "./SceneBasics/SceneBasics";
import SceneBasicsFiber from "./SceneBasics/SceneBasicsFiber";
import Geometry from "./GeometryLightMaterialsTextures/Geometry";

const App = () => {
  return (
    <div className="appContainer">
      {/* <SceneBasics /> */}
      {/* <SceneBasicsFiber /> */}
      <Geometry />
    </div>
  );
};

export default App;

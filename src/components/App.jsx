import React from "react";
import SceneBasics from "./SceneBasics/SceneBasics";
import SceneBasicsFiber from "./SceneBasics/SceneBasicsFiber";
import Geometry from "./GeometryLightMaterialsTextures/Geometry";
import LightsShadows from "./GeometryLightMaterialsTextures/LightsShadows";

const App = () => {
  return (
    <div className="appContainer">
      {/* <SceneBasics /> */}
      {/* <SceneBasicsFiber /> */}
      {/* <Geometry /> */}
      <LightsShadows />
    </div>
  );
};

export default App;

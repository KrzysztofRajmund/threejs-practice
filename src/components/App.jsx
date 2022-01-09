import React from "react";
import SceneBasics from "./SceneBasics/SceneBasics";
import SceneBasicsFiber from "./SceneBasics/SceneBasicsFiber";
import Geometry from "./GeometryLightMaterialsTextures/Geometry";
import LightsShadows from "./GeometryLightMaterialsTextures/LightsShadows";
import Materials from "./GeometryLightMaterialsTextures/Materials";
import Texture from "./GeometryLightMaterialsTextures/Texture";

const App = () => {
  return (
    <div className="appContainer">
      {/* <SceneBasics /> */}
      {/* <SceneBasicsFiber /> */}
      {/* <Geometry /> */}
      {/* <LightsShadows /> */}
      {/* <Materials /> */}
      <Texture />
    </div>
  );
};

export default App;

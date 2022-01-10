import React from "react";
import SceneBasics from "./SceneBasics/SceneBasics";
import SceneBasicsFiber from "./SceneBasics/SceneBasicsFiber";
import Geometry from "./GeometryLightMaterialsTextures/Geometry";
import LightsShadows from "./GeometryLightMaterialsTextures/LightsShadows";
import Materials from "./GeometryLightMaterialsTextures/Materials";
import Texture from "./GeometryLightMaterialsTextures/Texture";
import Events from "./EventsAndControls/Events";
import DragControls from "./EventsAndControls/DragControls";
import PhysicsComponent from "./PhysicsAndModells/PhysicsComponent";
import Modells from "./PhysicsAndModells/Modells";
import Camera from "./CameraAndShadows/Camera";

const App = () => {
  return (
    <div className="appContainer">
      {/* <SceneBasics /> */}
      {/* <SceneBasicsFiber /> */}
      {/* <Geometry /> */}
      {/* <LightsShadows /> */}
      {/* <Materials /> */}
      {/* <Texture /> */}
      {/* <Events /> */}
      {/* <DragControls /> */}
      {/* <PhysicsComponent /> */}
      {/* <Modells /> */}
      <Camera />
    </div>
  );
};

export default App;

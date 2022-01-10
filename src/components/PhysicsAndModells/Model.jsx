import React from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

const Model = (props) => {
  const model = useLoader(GLTFLoader, props.path);
  return <primitive object={model.scene} scale={props.scale} />;
};

export default Model;

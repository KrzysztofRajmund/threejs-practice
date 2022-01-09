import React, { useEffect, useState, useRef } from "react";
import { DragControls } from "three/examples/jsm/controls/DragControls";
import { extend, useThree } from "@react-three/fiber";

extend({ DragControls });

const Draggable = (props) => {
  const { camera, gl, scene } = useThree();
  const groupRef = useRef();
  const controlsRef = useRef();
  const [boxChildren, setBoxChildren] = useState([]);

  useEffect(() => {
    setBoxChildren(groupRef.current.children);
  }, []);

  useEffect(() => {
    //we need to disable orbitControls on hover to make drag and drop works properly
    //as by default orbiControls can not be used with it
    controlsRef.current.addEventListener("hoveron", () => {
      scene.orbitControls.enabled = false;
    });
    controlsRef.current.addEventListener("hoveroff", () => {
      scene.orbitControls.enabled = true;
    });
  }, [boxChildren, scene.orbitControls]);

  return (
    <group ref={groupRef}>
      <dragControls
        ref={controlsRef}
        args={[boxChildren, camera, gl.domElement]}
      />
      {props.children}
    </group>
  );
};

export default Draggable;

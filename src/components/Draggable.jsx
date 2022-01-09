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
    controlsRef.current.addEventListener("dragstart", (e) => {
      e.object.api?.mass.set(0);
    });
    controlsRef.current.addEventListener("dragend", (e) => {
      e.object.api?.mass.set(1);
    });
    controlsRef.current.addEventListener("drag", (e) => {
      // useBox
      // copy(): pass object
      // set(): pass comma sereated values
      e.object.api?.position.copy(e.object.position);
      //prevent bouncing when touching other object
      e.object.api?.velocity.set(0, 0, 0);
    });
  }, [boxChildren, scene.orbitControls]);

  return (
    <group ref={groupRef}>
      <dragControls
        transformGroup={props.transformGroup}
        ref={controlsRef}
        args={[boxChildren, camera, gl.domElement]}
      />
      {props.children}
    </group>
  );
};

export default Draggable;

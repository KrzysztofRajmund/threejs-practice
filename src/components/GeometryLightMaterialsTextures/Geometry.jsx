import React, { useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useThree, extend } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

extend({ OrbitControls });

const Orbit = () => {
  const { camera, gl } = useThree();
  return <orbitControls args={[camera, gl.domElement]} />;
};

const Box = (props) => {
  const ref = useRef();

  useFrame((state) => {
    // console.log("STATE:", state);
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={ref} {...props}>
      <boxBufferGeometry />
      <meshBasicMaterial color="red" />
    </mesh>
  );
};

const Geometry = () => {
  const vertices = new Float32Array([0, 0, 0, -1, -2, 0]);
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Canvas style={{ background: "black" }} camera={{ position: [3, 3, 3] }}>
        <Orbit />
        <axesHelper args={[5]} />
        <Box position={[0, 0, 1.5]} />
        <points>
          <bufferGeometry attach="geometry">
            <bufferAttribute
              attachObject={["attributes", "position"]}
              array={vertices}
              itemSize={3}
              count={vertices.length / 3}
            />
          </bufferGeometry>
        </points>
      </Canvas>
    </div>
  );
};

export default Geometry;

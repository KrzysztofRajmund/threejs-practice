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
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={ref} {...props} castShadow receiveShadow>
      <boxBufferGeometry />
      <meshPhysicalMaterial color="red" />
    </mesh>
  );
};

const Floor = (props) => {
  return (
    <mesh {...props} receiveShadow>
      <boxBufferGeometry args={[15, 1, 15]} />
      <meshPhysicalMaterial />
    </mesh>
  );
};

const Bulb = (props) => {
  return (
    <mesh {...props}>
      <pointLight castShadow />
      <sphereBufferGeometry args={[0.15]} />
      <meshPhongMaterial emissive="yellow" />
    </mesh>
  );
};

const LightsShadows = () => {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Canvas
        style={{ background: "black" }}
        camera={{ position: [5, 5, 5] }}
        shadows
      >
        <ambientLight intensity={0.2} />
        <Bulb position={[0, 3, 0]} />
        <Orbit />
        <axesHelper args={[5]} />
        <Box position={[1, 1.5, 1.5]} />
        <Floor position={[0, -0.5, 0]} />
      </Canvas>
    </div>
  );
};

export default LightsShadows;

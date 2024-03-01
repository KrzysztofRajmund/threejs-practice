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
    ref.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={ref} {...props} castShadow receiveShadow>
      <boxBufferGeometry />
      <meshPhysicalMaterial
        color="white"
        // metalness={1}
        // roughness={0}
        clearcoat={1}
        reflectivity={1}
        // visible={false}
        // wireframe={false}
        transparent
        // opacity={0.65}
        //GLASS LOOK
        transmission={0.8}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
};

const Floor = (props) => {
  return (
    <mesh {...props} receiveShadow>
      <boxBufferGeometry args={[15, 1, 15]} />
      <meshPhysicalMaterial color="darkblue" />
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
//MAIN COMPONENT
const Materials = () => {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Canvas
        style={{ background: "black" }}
        camera={{ position: [1, 5, 1] }}
        shadows
      >
        <fog attach="fog" args={["white", 1, 10]} />
        <ambientLight intensity={0.2} />
        <Bulb position={[0, 3, 0]} />
        <Orbit />
        <axesHelper args={[5]} />
        <Box position={[0, 1.2, 0]} />
        <Floor position={[0, -0.5, 0]} />
      </Canvas>
    </div>
  );
};

export default Materials;

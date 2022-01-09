import React, { useRef, Suspense, useMemo } from "react";
import * as THREE from "three";
import {
  Canvas,
  useFrame,
  useThree,
  useLoader,
  extend,
} from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

extend({ OrbitControls });

const Orbit = () => {
  const { camera, gl } = useThree();
  return <orbitControls args={[camera, gl.domElement]} />;
};

const Box = (props) => {
  const ref = useRef();
  const texture = useLoader(THREE.TextureLoader, "/wood.jpg");
  useFrame((state) => {
    ref.current.rotation.y += 0.01;
    ref.current.rotation.x += 0.01;
  });

  const pointerDown = (e) => {
    ///////////////////////
    console.log("EVENT:", e);

    e.object.active = true;
    if (window.activeMesh) {
      scaleDown(window.activeMesh);
      window.activeMesh.active = false;
    }
    //we should not assign new property to window object, it is better to use library like ZUSTAND!!!
    //We can not use react hooks as it is caused re-render! What is very expensive for Web GL.
    //We need to use state managment that does not cause re-render, like ZUSTAND.
    window.activeMesh = e.object;

    //////////////////////////////
    console.log("WIDNOW:", window);
  };
  const pointerEnter = (e) => {
    e.object.scale.x = 2;
    e.object.scale.y = 2;
    e.object.scale.z = 2;
  };

  const pointerLeave = (e) => {
    if (!e.object.active) {
      scaleDown(e.object);
    }
  };

  const scaleDown = (obj) => {
    obj.scale.x = 1;
    obj.scale.y = 1;
    obj.scale.z = 1;
  };

  return (
    <mesh
      ref={ref}
      {...props}
      castShadow
      onPointerEnter={pointerEnter}
      onPointerLeave={pointerLeave}
      onPointerDown={pointerDown}
    >
      <boxBufferGeometry />
      <meshPhysicalMaterial
        map={texture}
        // color="white"
        // metalness={1}
        // roughness={0}
        // clearcoat={1}
        // reflectivity={1}
        // visible={false}
        // wireframe={false}
        // transparent
        // opacity={0.65}
        //GLASS LOOK
        // transmission={0.8}
        // side={THREE.DoubleSide}
      />
    </mesh>
  );
};

const Background = (props) => {
  const texture = useLoader(THREE.TextureLoader, "/autoshop.jpg");
  const { gl } = useThree();
  //making background 3D not working, we can set texture to object for now, it will be plain picture
  const formatted = useMemo(
    () =>
      new THREE.WebGLCubeRenderTarget(
        texture.image.height
      ).fromEquirectangularTexture(gl, texture),
    [gl, texture]
  );
  return <primitive attach="background" object={formatted} />;
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
//MAIN COMPONENT
const Events = () => {
  const changeColor = (e) => {
    if (!window.activeMesh) return;
    window.activeMesh.material.color = new THREE.Color(
      e.target.style.background
    );
  };

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <div style={{ position: "absolute", zIndex: 1 }}>
        <div
          style={{
            width: 50,
            height: 50,
            border: "1px solid black",
            background: "blue",
          }}
          onClick={changeColor}
        ></div>
        <div
          style={{
            width: 50,
            height: 50,
            border: "1px solid black",
            background: "yellow",
          }}
          onClick={changeColor}
        ></div>
        <div
          style={{
            width: 50,
            height: 50,
            border: "1px solid black",
            background: "white",
          }}
          onClick={changeColor}
        ></div>
      </div>
      <Canvas
        style={{ background: "black" }}
        camera={{ position: [6, 6, 6] }}
        shadows
      >
        {/* <fog attach="fog" args={["white", 1, 20]} /> */}
        <ambientLight intensity={0.2} />
        <Bulb position={[0, 3, 0]} />
        <Orbit />
        <axesHelper args={[5]} />
        <Suspense fallback={null}>
          <Box position={[2, 1.2, -2]} />
        </Suspense>
        <Suspense fallback={null}>
          <Box position={[-2, 1.5, 2]} />
        </Suspense>
        <Suspense fallback={null}>
          <Background />
        </Suspense>
        <Floor position={[0, -0.5, 0]} />
      </Canvas>
    </div>
  );
};

export default Events;

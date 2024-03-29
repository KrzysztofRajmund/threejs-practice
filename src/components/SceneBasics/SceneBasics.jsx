import * as THREE from "three";

const SceneBasics = () => {
  //scene and camera class object
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  //rendering
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.innerHTML = "";
  document.body.appendChild(renderer.domElement);

  //create mesh
  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshBasicMaterial({
    color: "red",
  });
  camera.position.z = 5;
  const cube = new THREE.Mesh(geometry, material);

  //add created object to our app
  scene.add(cube);
  const animate = () => {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
  };
  animate();

  //screen adjustment
  window.addEventListener("resize", () => {
    //resize canvas
    renderer.setSize(window.innerWidth, window.innerHeight);
    //resize cube
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  });

  return null;
};

export default SceneBasics;

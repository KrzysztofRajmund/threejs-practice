import * as THREE from "three"

const state = {
    activeMesh: null,
    cameraPos: new THREE.Vector3(6, 6, 6),
    target: new THREE.Vector3(4, 5, 2),
    shouldUpdate: true,
}
export default state;
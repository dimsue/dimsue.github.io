import * as THREE from "three";
import { TrackballControls } from "three-stdlib";

export function makeScene(elem) {
  const scene = new THREE.Scene();
  const fov = 45;
  const aspect = 2;
  const near = 0.5;
  const far = 5;
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(0, 0, 2);
  camera.lookAt(0, 0, 0);
  scene.add(camera);
  const controls = new TrackballControls(camera, elem);
  controls.minDistance = 2;
  controls.maxDistance = 4;
  controls.noPan = true;

  const pointLight = new THREE.PointLight(0xffffff, 1.7);
  pointLight.position.set(-1, 1, 4);
  scene.add(pointLight);
  const ambientLight = new THREE.AmbientLight(0xfeffc0, 0.5);
  ambientLight.position.set(1, 5, 10);
  scene.add(ambientLight);

  return { scene, camera, controls };
}

export const generateMesh = (
  elem,
  renderer,
  geometry,
  material = new THREE.MeshPhongMaterial({ color: "blue" }),
  scale = new THREE.Vector3(1, 1, 1),
  position = new THREE.Vector3(1, 1, 1)
) => {
  const { scene, camera, controls } = makeScene(elem);
  const mesh = new THREE.Mesh(geometry, material);
  mesh.scale.set(...scale);
  mesh.position.set(...position);
  scene.add(mesh);
  return (time, rect) => {
    mesh.rotation.y = time * 0.1;
    camera.aspect = rect.width / rect.height;
    camera.updateProjectionMatrix();
    controls.handleResize();
    controls.update();
    renderer.render(scene, camera);
  };
};

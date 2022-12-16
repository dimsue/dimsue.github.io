import { useThree } from "@react-three/fiber";
import * as THREE from "three";
import { generateMesh } from "../utils/generateMesh";
import { useGLTF } from "@react-three/drei";

const SetupScene = ({ name }) => {
  const { gl: renderer } = useThree();
  const elem = document.getElementById("item-holder");

  const sceneElements = [];
  function addScene(elem, fn) {
    sceneElements.push({ elem, fn });
  }

  const { nodes: churnNodes, materials: churnMaterials } = useGLTF(
    "/props/Rusty_Milk_Churn.glb"
  );
  const { nodes: crateNodes, materials: crateMaterials } = useGLTF(
    "/props/Wooden_Crate.glb"
  );
  const { nodes: jugNodes, materials: jugMaterials } = useGLTF(
    "/props/Clay_Jug.glb"
  );
  const { nodes: lampNodes, materials: lampMaterials } = useGLTF(
    "/props/Oil_Lamp.glb"
  );

  const sceneInitFunctionsByName = {
    box: () => generateMesh(elem, renderer, new THREE.BoxGeometry(1, 1, 1)),
    sphere: () =>
      generateMesh(elem, renderer, new THREE.SphereGeometry(0.5, 32, 16)),
    churn: () =>
      generateMesh(
        elem,
        renderer,
        churnNodes.Rusty_Metal_Milk_Churn_LOD0_ukoschvbw.geometry,
        churnMaterials.Rusty_Metal_Milk_Churn_ukoschvbw_inst,
        new THREE.Vector3(0.02, 0.02, 0.02),
        new THREE.Vector3(0, -0.5, 0)
      ),
    jug: () =>
      generateMesh(
        elem,
        renderer,
        jugNodes.Large_Clay_Jug_LOD6_udtheeava.geometry,
        jugMaterials.Large_Clay_Jug_udtheeava_01_inst,
        new THREE.Vector3(0.03, 0.03, 0.03),
        new THREE.Vector3(0, 0, 0)
      ),
    lamp: () =>
      generateMesh(
        elem,
        renderer,
        lampNodes.Vintage_Oil_Lamp_LOD6_ubpmajghw.geometry,
        lampMaterials.Vintage_Oil_Lamp_ubpmajghw_00_inst,
        new THREE.Vector3(0.05, 0.05, 0.05),
        new THREE.Vector3(0, 0, 0)
      ),
    crate: () =>
      generateMesh(
        elem,
        renderer,
        crateNodes.Wooden_Crate_LOD1_vijncb3.geometry,
        crateMaterials.Wooden_Crate_vijncb3_inst,
        new THREE.Vector3(0.02, 0.02, 0.02),
        new THREE.Vector3(0, -0.5, 0)
      ),
  };

  if (name) {
    const sceneInitFunction = sceneInitFunctionsByName[name];
    const sceneRenderFunction = sceneInitFunction(elem);
    addScene(elem, sceneRenderFunction);
  }

  function resizeRendererToDisplaySize(renderer) {
    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
      renderer.setSize(width, height, false);
    }
    return needResize;
  }

  function render(time) {
    time *= 0.006;
    resizeRendererToDisplaySize(renderer);
    renderer.clear(true, true);

    const transform = `translateY(${window.scrollY}px)`;
    renderer.domElement.style.transform = transform;

    for (const { elem, fn } of sceneElements) {
      const rect = elem.getBoundingClientRect();
      const { left, right, top, bottom, width, height } = rect;

      const isOffscreen =
        bottom < 0 ||
        top > renderer.domElement.clientHeight ||
        right < 0 ||
        left > renderer.domElement.clientWidth;

      if (!isOffscreen) {
        const positiveYUpBottom = renderer.domElement.clientHeight - bottom;
        renderer.setScissor(left, positiveYUpBottom, width, height);
        renderer.setViewport(left, positiveYUpBottom, width, height);

        fn(time, rect);
      }
    }

    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
};

export default SetupScene;

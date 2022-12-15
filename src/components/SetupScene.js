import { useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { TrackballControls } from "three-stdlib";
import { useStore } from "../store";
import { generateMesh, makeScene } from "../utils/generateMesh";
import { MilkChurn } from "../models/MilkChurn";
import { useGLTF } from "@react-three/drei";

const SetupScene = () => {
  const { gl: renderer } = useThree();
  const elem = document.getElementById("item-holder");
  const { name } = useStore();

  const sceneElements = [];
  function addScene(elem, fn) {
    sceneElements.push({ elem, fn });
  }

  const { nodes: churnNodes, materials: churnMaterials } = useGLTF(
    "/props/Rusty_Milk_Churn.glb"
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

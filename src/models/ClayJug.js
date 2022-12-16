import React from "react";
import { useGLTF } from "@react-three/drei";

export function ClayJug(props) {
  const { nodes, materials } = useGLTF("/props/Clay_Jug.glb");
  return (
    <group {...props} dispose={null}
	scale={0.03}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Large_Clay_Jug_LOD6_udtheeava.geometry}
        material={materials.Large_Clay_Jug_udtheeava_01_inst}
      />
    </group>
  );
}

useGLTF.preload("/props/Clay_Jug.glb");
import React from "react";
import { useGLTF } from "@react-three/drei";

export function WoodenCrate(props) {
  const { nodes, materials } = useGLTF("/props/Wooden_Crate.glb");
  return (
    <group {...props} dispose={null}
	scale={0.02}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wooden_Crate_LOD1_vijncb3.geometry}
        material={materials.Wooden_Crate_vijncb3_inst}
      />
    </group>
  );
}

useGLTF.preload("/props/Wooden_Crate.glb");
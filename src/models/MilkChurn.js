import React from "react";
import { useGLTF } from "@react-three/drei";

export function MilkChurn() {
  const { nodes, materials } = useGLTF("/props/Rusty_Milk_Churn.glb");
  return (
    <group dispose={null}
	scale={0.03}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rusty_Metal_Milk_Churn_LOD0_ukoschvbw.geometry}
        material={materials.Rusty_Metal_Milk_Churn_ukoschvbw_inst}
      />
    </group>
  );
}

useGLTF.preload("/props/Rusty_Milk_Churn.glb");
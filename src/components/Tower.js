import React from "react";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

export function Tower(props) {
  const { nodes, materials } = useGLTF("/tower/Kula1.glb");
  return (
    <RigidBody
      mass={100}
      colliders="cuboid"
      enabledRotations={[false, false, false]}
      type="fixed"
      position={[-32, 30.1, 29]}
      rotation={[0, Math.PI / 2.2, 0]}
    >
      <group {...props} dispose={null}>
		<mesh
		castShadow
		receiveShadow
		geometry={nodes.Kula1.geometry}
		material={materials.MI_CF_01_Wood_01}
		/>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Kula1_1.geometry}
          material={materials.MI_CF_01_Wood_Shingle_01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Kula1_2.geometry}
          material={materials.MI_CF_01_Stone_Floor_01_Kula1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Kula1_3.geometry}
          material={materials.MI_CF_01_FlagStone_01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Kula1_4.geometry}
          material={materials.MI_CF_01_Stone_Wall_01_Kula1}
        />
      </group>
    </RigidBody>
  );
}

useGLTF.preload("/tower/Kula1.glb");

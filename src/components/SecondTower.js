import React from "react";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

export function SecondTower(props) {
  const { nodes, materials } = useGLTF("/tower/Kula2.glb");
  return (
    <group
      {...props}
      dispose={null}
      position={[35, 27.2, 38.5]}
      scale={[1.5, 1.5, 1.5]}
      rotation={[0, Math.PI / 2, 0]}
    >
      <RigidBody
        mass={100}
        colliders="cuboid"
        enabledRotations={[false, false, false]}
        type="fixed"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Kula2.geometry}
          material={materials.MI_CF_01_Wood_01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Kula2_1.geometry}
          material={materials.MI_CF_01_Wood_Shingle_01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Kula2_2.geometry}
          material={materials.MI_CF_01_FlagStone_01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Kula2_3.geometry}
          material={materials.MI_CF_01_Stone_Wall_01_Kula2}
        />
      </RigidBody>
    </group>
  );
}

useGLTF.preload("/tower/Kula2.glb");

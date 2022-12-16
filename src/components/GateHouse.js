import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

export function GateHouse(props) {
  const { nodes, materials } = useGLTF("/tower/Kuca_uz_kapiju.glb");
  return (
    <group
      {...props}
      dispose={null}
      position={[-26, 23.3, 30.5]}
      scale={[1.2, 1.2, 1.2]}
      rotation={[0, Math.PI / 2.3, 0]}
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
          geometry={nodes.Kuca_uz_kapiju.geometry}
          material={materials.MI_CF_01_Wood_01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Kuca_uz_kapiju_1.geometry}
          material={materials.MI_CF_01_Wood_Shingle_01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Kuca_uz_kapiju_2.geometry}
          material={materials.MI_CF_01_Gate_02_Left_01}
        />
      </RigidBody>
    </group>
  );
}

useGLTF.preload("/tower/Kuca_uz_kapiju.glb");

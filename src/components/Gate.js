import React from "react";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

export function Gate(props) {
  const { nodes, materials } = useGLTF("/tower/Kapija.glb");
  return (
    <RigidBody
      mass={100}
	  colliders='cuboid'
      enabledRotations={[false, false, false]}
	  type='fixed'
	  position={[-30, 18.5, 31.5]} rotation={[0,Math.PI/2.2,0]}
    >
      <group {...props} dispose={null} scale={[1, 1, 1]} >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Kapija.geometry}
          material={materials.MI_CF_01_Gate_02_Left_01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Kapija_1.geometry}
          material={materials.MI_CF_01_Gate_02_Right_01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Kapija_2.geometry}
          material={materials.MI_CF_01_Wood_01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Kapija_3.geometry}
          material={materials.MI_CF_01_Wood_Shingle_01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Kapija_4.geometry}
          material={materials.MI_CF_01_Stone_Floor_01_Kapija}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Kapija_5.geometry}
          material={materials.MI_CF_01_Stone_Wall_01_Kapija}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Kapija_6.geometry}
          material={materials.MI_CF_01_FlagStone_01}
        />
      </group>
    </RigidBody>
  );
}

useGLTF.preload("/Kapija.glb");

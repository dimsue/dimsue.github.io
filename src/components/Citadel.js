import React from "react";
import { useGLTF } from "@react-three/drei";
import { CuboidCollider } from "@react-three/rapier";

export function Citadel(props) {
  const { nodes, materials } = useGLTF("/tower/citadel.glb");
  return (
    <group
      {...props}
      dispose={null}
      position={[-10, 42.4, 6]}
      rotation={[0, -Math.PI / 1.3, 0]}
      scale={[1.5, 1.5, 1.5]}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Citradela_i_kula_DZ_1.geometry}
        material={materials.MI_CF_01_Stone_Wall_01_Citradela_i_kula_DZ}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Citradela_i_kula_DZ_2.geometry}
        material={materials.MI_CF_01_Stone_Floor_01_Citradela_i_kula_DZ}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Citradela_i_kula_DZ_3.geometry}
        material={materials.MI_CF_01_FlagStone_01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Citradela_i_kula_DZ_4.geometry}
        material={materials.MI_CF_01_Wood_01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Citradela_i_kula_DZ_5.geometry}
        material={materials.MI_CF_01_Wood_Shingle_01}
      />
      <CuboidCollider args={[5, 2.5, 7]} position={[-2.5, -11, 12]}/>
      <CuboidCollider args={[4.2, 5, 2.5]} position={[-1.5, -6, 17]}/>
      <CuboidCollider args={[1.3, 4, 4.5]} position={[-4.2, -10, 1.5]} rotation={[0,Math.PI/1.2,0]}/>
      <CuboidCollider args={[1.3, 3.5, 4.5]} position={[1.6, -10, 1.3]} rotation={[0,-Math.PI/1.23,0]}/>
      <CuboidCollider args={[1.3, 4, 5.2]} position={[3, -10.5, 7.8]} rotation={[0,-Math.PI/1,0]}/>
      <CuboidCollider args={[1.3, 0.5, 3.5]} position={[1.5, -11.2, 7.5]} rotation={[Math.PI/1.27,-Math.PI/1,0]}/> 
      <CuboidCollider args={[1, 0.5, 1]} position={[1.5, -9.75, 10]} rotation={[0,0,0]}/> 
      <CuboidCollider args={[1.5, 4, 5.2]} position={[-5.2, -10.5, 8.2]} rotation={[0,-Math.PI/1,0]}/>
      <CuboidCollider args={[1, 4, 5.2]} position={[-3.2, -6.7, 14.5]} rotation={[0,-Math.PI/1.01,0]}/>
      <CuboidCollider args={[1.7, 4, 5.2]} position={[0.8, -6.7, 14]} rotation={[0,-Math.PI/1,0]}/>
      <CuboidCollider args={[6, 2, 3]} position={[3.5, -12.5, -3]} rotation={[0,-Math.PI/1,0]}/>
      <CuboidCollider args={[4, 4, 4]} position={[-6.5, -18, -11]} rotation={[0,-Math.PI/1.3,0]}/>
      <CuboidCollider args={[4, 2.5, 2]} position={[4.2, -19, -8.5]} rotation={[0,-Math.PI/3,0]}/>
    </group>
  );
}

useGLTF.preload("/tower/citadel.glb");

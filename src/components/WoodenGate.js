import React from "react";
import { useGLTF } from "@react-three/drei";
import { CuboidCollider, RigidBody } from "@react-three/rapier";

export function WoodenGate(props) {
  const { nodes, materials } = useGLTF("/tower/Palisadna_ograda.glb");
  return (
    <group
      {...props}
      dispose={null}
      position={[8, 12, 41.5]}
      scale={[1, 1, 1.4]}
      rotation={[0, Math.PI / 2.3, 0]}
    >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Palisadna_ograda_1.geometry}
          material={materials.M_palisade}
          scale={[1, 2, 1]}
        />
      <CuboidCollider args={[19, 6, 1.2]} position={[9, 6, -10]} rotation={[0,Math.PI/1.85,0]}/>
    </group>
  );
}

useGLTF.preload("/Palisadna_ograda.glb");

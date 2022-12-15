import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

export function Tower(props) {
  const { nodes, materials } = useGLTF("/tower/Kula1.gltf");
  return (
    <group {...props} dispose={null} 
    position={[0,-1,1]}
    scale={[45, 45, 45]}>
        <mesh
          castShadow
          geometry={nodes.Plane.geometry}
          material={materials["Material.001"]}
          position={[0, -0.02, 0]}
        />
        <meshStandardMaterial color='red' />
    </group>
  );
}

useGLTF.preload("/tower/Kula1.gltf");

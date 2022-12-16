import React, { Fragment, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { CuboidCollider } from "@react-three/rapier";

export function NorthEastWall(props) {
  const { nodes, materials } = useGLTF("/tower/Severoistocni_bedem.glb");
  return (
    <Fragment>
      <group
        {...props}
        dispose={null}
        position={[-23, 43, -17]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[1.5, 1.5, 1.35]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Severoistocni_bedem_1.geometry}
          material={materials.MI_CF_01_Stone_Wall_01_Severoistocni_bedem}
        />
      </group>
      <CuboidCollider args={[1, 14, 17]} position={[-9, 31, -27]} rotation={[0, Math.PI/1.4,0]}/>
    </Fragment>
  );
}

useGLTF.preload("/tower/Severoistocni_bedem.glb");

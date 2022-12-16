import React from "react";
import { useGLTF } from "@react-three/drei";

export function OilLamp(props) {
  const { nodes, materials } = useGLTF("/props/Oil_Lamp.glb");
  return (
    <group {...props} dispose={null}
    scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vintage_Oil_Lamp_LOD6_ubpmajghw.geometry}
        material={materials.Vintage_Oil_Lamp_ubpmajghw_00_inst}
        material-color={'white'}
      />
    </group>
  );
}

useGLTF.preload("/props/Oil_Lamp.glb");
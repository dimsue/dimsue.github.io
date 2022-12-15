import { RigidBody } from "@react-three/rapier";
import React from "react";

const SphereModel = ({ position, hovered }) => {
  return (
      <mesh position={position}>
        <sphereBufferGeometry attach="geometry" args={[1]} />
        <meshStandardMaterial color={hovered ? "pink" : "blue"} />
      </mesh>
  );
};

export default SphereModel;

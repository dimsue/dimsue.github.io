import { CuboidCollider } from "@react-three/rapier";
import React from "react";

const Reset = ({playerRef}) => {
  return (
      <CuboidCollider
		    args={[100, 1, 100]} position={[0, 8.5, 0]}
        onCollisionEnter={({ other}) => {
          if(other?.rigidBodyObject?.name === 'player'){
            playerRef?.current?.setTranslation({x: -25, y:21, z:35})
            playerRef?.current?.setLinvel({x: 0, y:0, z:0})
          }
        }}
      />
  );
};

export default Reset;

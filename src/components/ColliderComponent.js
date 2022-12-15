import { useBox } from "@react-three/cannon";
import React from "react";

const ColliderComponent = (props) => {
	const [ref] = useBox({ position: props?.position, args: [10,10,10] } )
  return <group {...props} ref={ ref }>{props.children}</group>;
};

export default ColliderComponent;

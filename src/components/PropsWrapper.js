import React from "react";
import { props } from "./constants/props";
import Model from "./Model";

const PropsWrapper = () => {
  return props.map((prop, index) => (
    <Model
	  key={`prop-${prop.modelDisplayName+index}`}
      name={prop.name}
      position={prop.position}
      modelDisplayName={prop.modelDisplayName}
    />
  ));
};

export default PropsWrapper;

import { useEffect, useRef, useState } from "react";
import { useCursor } from "@react-three/drei";
import { useStore } from "../store";
import { MilkChurn } from "../models/MilkChurn";
import { RigidBody } from "@react-three/rapier";
import SphereModel from '../models/SphereModel';

const Model = ({
  name,
  position,
  modelDisplayName,
}) => {
  const state = useStore();
  const modelRef = useRef();
  const [hovered, setHovered] = useState(false);
  useCursor(hovered);

  const handlePickUpItem = (e) => {
    e.stopPropagation();
    setHovered(true);
  };

  const renderModel = {
    sphere: <SphereModel hovered={hovered}/>,
    churn: <MilkChurn hovered={hovered}/>,
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "e" && hovered && !state.model) {
        useStore.setState({ model: modelRef, name, modelDisplayName });
        document.exitPointerLock();
      } else if (e.key === "e" && state.model) {
        useStore.setState({ model: null, name: "" });
        setHovered(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [hovered, state.model, modelRef, name, modelDisplayName]);

  return (
    <mesh
      onPointerOut={() => setHovered(false)}
      onPointerOver={(e) => handlePickUpItem(e)}
      dispose={null}
    >
        <RigidBody colliders="cuboid" position={position} ref={modelRef}>
          {renderModel[name]}
        </RigidBody>
    </mesh>
  );
};

export default Model;

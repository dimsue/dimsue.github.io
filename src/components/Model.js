import { useEffect, useMemo, useRef, useState } from "react";
import { useCursor } from "@react-three/drei";
import { MilkChurn } from "../models/MilkChurn";
import { RigidBody } from "@react-three/rapier";
import SphereModel from "../models/SphereModel";
import { WoodenCrate } from "../models/WoodenCrate";
import { OilLamp } from "../models/OilLamp";
import { ClayJug } from "../models/ClayJug";
import { useStore } from "../store";

const Model = ({ name, position, modelDisplayName }) => {
  const modelRef = useRef();
  const store = useStore();
  const [hovered, setHovered] = useState(false);
  useCursor(hovered);

  const handleModelFocused = (e) => {
    e.stopPropagation();
    setHovered(true);
  };

  const handleModelNotFocused = (e) => {
    setHovered(false);
  };

  const renderModel = {
    sphere: <SphereModel hovered={hovered} />,
    churn: <MilkChurn hovered={hovered} />,
    crate: <WoodenCrate hovered={hovered} />,
    lamp: <OilLamp hovered={hovered} />,
    jug: <ClayJug hovered={hovered} />,
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "e" && hovered && !store.model) {
        useStore.setState({ model: modelRef, name, modelDisplayName });
        document.exitPointerLock();
      } else if (e.key === "e" && store.model) {
        useStore.setState({ model: null, name: "", modelDisplayName: "" });
        setHovered(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [hovered, modelRef, name, modelDisplayName]);

  return (
    <mesh
      onPointerOut={(e) => handleModelNotFocused(e)}
      onPointerOver={(e) => handleModelFocused(e)}
      dispose={null}
    >
      <RigidBody
        colliders="cuboid"
        type="fixed"
        position={position}
        ref={modelRef}
      >
        {renderModel[name]}
      </RigidBody>
      {hovered && (
        <spotLight
          position={position}
          intensity={10}
          distance={1}
          angle={Math.PI / 1}
          color="red"
        />
      )}
    </mesh>
  );
};

export default Model;

import { Suspense } from "react";
import { createRoot } from "react-dom/client";
import { KeyboardControls, Loader } from "@react-three/drei";
import "./index.css";
import Game from "./Game";

function Overlay() {
  return (
    <>
    <Suspense>
      <KeyboardControls
        map={[
          { name: "forward", keys: ["ArrowUp", "w", "W"] },
          { name: "backward", keys: ["ArrowDown", "s", "S"] },
          { name: "left", keys: ["ArrowLeft", "a", "A"] },
          { name: "right", keys: ["ArrowRight", "d", "D"] },
          { name: "jump", keys: ["Space"] },
        ]}
      >
        <Game />
      </KeyboardControls>
    </Suspense>
    <Loader />
    </>
  );
}

createRoot(document.getElementById("root")).render(<Overlay />);

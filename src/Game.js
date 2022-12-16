import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Debug, Physics } from "@react-three/rapier";
import { Ground } from "./components/Ground";
import Player from "./components/Player";
import { SGrad } from "./components/SGrad";
import { Fragment, useRef, useState } from "react";
import Reset from "./components/Reset";
import "./App.css";
import { Tower } from "./components/Tower";
import { Gate } from "./components/Gate";
import { GateHouse } from "./components/GateHouse";
import { WoodenGate } from "./components/WoodenGate";
import { SecondTower } from "./components/SecondTower";
import { Citadel } from "./components/Citadel";
import SkyBox from "./components/SkyBox";
import SetupScene from "./components/SetupScene";
import { NorthEastWall } from "./components/NorthEastWall";
import PropsWrapper from "./components/PropsWrapper";
import { useStore } from "./store";

export default function Game() {
  const [playerPosition, setPlayerPosition] = useState([-25, 23, 35]);
  const playerRef = useRef();
  const { modelDisplayName, model, name } = useStore();

  return (
    <Fragment>
      <Canvas shadows>
        <ambientLight intensity={0.25} />
        <pointLight castShadow intensity={0.5} position={[0, 150, 100]} />
        <pointLight
          castShadow
          intensity={0.25}
          position={[0, 100, 80]}
          color="yellow"
        />
        <spotLight
          castShadow
          intensity={3}
          distance={5}
          angle={Math.PI / 1}
          color="orange"
          position={[-33, 45, -17]}
        />
        <spotLight
          castShadow
          intensity={3}
          distance={5}
          angle={Math.PI / 1}
          color="orange"
          position={[30.5, 15, 37]}
        />
        <Physics gravity={[0, -30, 0]}>
          {/* <Debug /> */}
          <Ground />
          <Player
            position={playerPosition}
            playerRef={playerRef}
            setPlayerPosition={setPlayerPosition}
          />
          <SGrad />
          <Reset playerRef={playerRef} />
          <Gate />
          <Citadel />
          <Tower />
          <GateHouse />
          <WoodenGate />
          <SecondTower />
          <NorthEastWall />
          <PropsWrapper />
        </Physics>
        {/* {!model && <OrbitControls />} */}
        <SkyBox />
      </Canvas>
      <Canvas
        id="canvas-item"
        style={{ visibility: model ? "visible" : "hidden" }}
      >
        <SetupScene name={name} />
      </Canvas>
      <div id="mobile-screen-overlay">
        <h1>
          Virtuelna tura je dostupna samo na računarima sa priključenom
          tastaturom i optičkim uređajem.
        </h1>
        <a href="https://stari-grad.uzice.rs/"> Povratak na sajt </a>
      </div>
      <div id="overlay">
        {!model && (
          <div className="game-ui">
            <div className="return-btn">
              <h2 className="highlighted">Pritisni 'Esc' da prikazes kursor</h2>
              <a href="https://stari-grad.uzice.rs/"> Povratak na sajt </a>
            </div>
            <div id="center-menu">
              <div className="dot" />
            </div>
            <div id="main-menu">
              <h1>Kontrole</h1>
              <hr />
              <h3>W - Napred</h3>
              <h3>S - Nazad</h3>
              <h3>A - Levo</h3>
              <h3>D - Desno</h3>
              <h3>E - Interakcija sa predmetom</h3>
            </div>
          </div>
        )}
        <div
          className="item-inspect"
          style={{ visibility: model ? "visible" : "hidden" }}
        >
          <h1>{modelDisplayName}</h1>
          <div id="item-holder" />
          <h2>Pritisni 'E' za povratak</h2>
          <h3>Pritisni 'Esc' da prikazes kursor</h3>
        </div>
      </div>
    </Fragment>
  );
}

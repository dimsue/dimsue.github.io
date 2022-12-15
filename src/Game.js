import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Debug, Physics } from "@react-three/rapier";
import { Ground } from "./components/Ground";
import Player from "./components/Player";
import { SGrad } from "./components/SGrad";
import { Fragment, useRef, useState } from "react";
import Reset from "./components/Reset";
// import Model from "./components/Model";
import './App.css';
import { useStore } from "./store";
// import SetupScene from "./components/SetupScene";
import { Tower } from "./components/Tower";
import { Gate } from "./components/Gate";
import { GateHouse } from "./components/GateHouse";
import { WoodenGate } from "./components/WoodenGate";
import { SecondTower } from "./components/SecondTower";
import { Citadel } from "./components/Citadel";
import SkyBox from "./components/SkyBox";
import Model from "./components/Model";
import SetupScene from "./components/SetupScene";

export default function Game() {
  const [playerPosition, setPlayerPosition] = useState([-25, 21, 35]);
  const playerRef = useRef();
  const { model, modelDisplayName } = useStore();
  
  return (
    <Fragment>
      <Canvas shadows>
          <ambientLight intensity={0.3} />
          <pointLight castShadow intensity={0.5} position={[0, 150, 100]}/>
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
            <Model name='churn' position={[-28, 36.7, -2]} />
          </Physics>
          {/* {!model && <OrbitControls /> } */}
          <SkyBox />
      </Canvas>
      <Canvas id='canvas-item' style={{ visibility: model ? 'visible': 'hidden'}}>
        <SetupScene />
      </Canvas>
      <div id='overlay' >
        {!model && 
          <div className='game-ui'>
            <div className="return-btn"> 
              <h2>Pritisni 'Esc' da prikazes kursor</h2>
              <a href="https://stari-grad.uzice.rs/"> Povratak na sajt </a>
            </div>
            <div className="dot" />
          </div>
        }
        <div className='item-inspect' style={{ visibility: model ? 'visible': 'hidden'}}>
          <h1>{modelDisplayName}</h1>
          <div id='item-holder'/>
          <h2>Pritisni 'E' za povratak</h2>
          <h3>Pritisni 'Esc' da prikazes kursor</h3>
        </div>
      </div>
    </Fragment>
  );
}

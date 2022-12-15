import * as THREE from "three"
import { useThree, useFrame } from "@react-three/fiber"
import { CapsuleCollider, RigidBody } from "@react-three/rapier"
import { usePlayerControls } from "../utils/helpers"
import { useStore } from "../store"
import { PointerLockControls } from "@react-three/drei"
import { useRef } from "react"

const SPEED = 4
const direction = new THREE.Vector3()
const frontVector = new THREE.Vector3()
const sideVector = new THREE.Vector3()

const Player = ({ position, playerRef }) => {
  const { camera } = useThree()
  const storeState = useStore();
  const controls = useRef();
  const { forward, backward, left, right } = usePlayerControls();
  useFrame(() => {
    const velocity = playerRef.current.linvel()
    // update camera
    camera.position.set(playerRef.current.translation().x,playerRef.current.translation().y+0.7,playerRef.current.translation().z)

    // movement
    frontVector.set(0, 0, backward - forward)
    sideVector.set(left - right, 0, 0)

    direction.subVectors(frontVector, sideVector).normalize().multiplyScalar(SPEED).applyEuler(camera.rotation)
    playerRef.current.setLinvel({ x: direction.x, y: velocity.y, z: direction.z })
  })

  return ( 
    <>
      <RigidBody ref={playerRef} colliders={false} mass={0.2} type="dynamic" position={position} enabledRotations={[false, false, false]} name='player'>
        <CapsuleCollider args={[0.5, 0.5]} />
        <meshBasicMaterial color='red' />
      </RigidBody>
      <PointerLockControls ref={controls} enabled={!storeState.model}/>
    </>
  )
}

export default Player;
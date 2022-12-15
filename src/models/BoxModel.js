import { RigidBody } from '@react-three/rapier'
import React from 'react'

const BoxModel = ({ position, mass, colliderType, hovered }) => {
  return (
	<RigidBody type='dynamic' mass={mass} colliders={colliderType}>
		<mesh position={position}>
			<boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
			<meshStandardMaterial color={ hovered ? 'pink' : "red" } />
		</mesh>
	</RigidBody>
  )
}

export default BoxModel
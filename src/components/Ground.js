import { CuboidCollider, RigidBody } from "@react-three/rapier"

export function Ground(props) {
  return (
    <RigidBody {...props} type="fixed" colliders={false}>
      <CuboidCollider args={[500, 1, 500]} position={[0, 5, 0]} />
    </RigidBody>
  )
}
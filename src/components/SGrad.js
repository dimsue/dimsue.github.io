import React from "react";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

export function SGrad(props) {
  const { nodes, materials } = useGLTF("/map/sgrad_textured.glb");
  return (
    <group {...props} dispose={null} position={[0, -1, 1]} scale={[75, 50, 75]}>
      <group
        position={[-0.02, 1.48, -0.04]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.045}
      >
        <group rotation={[Math.PI / 2, 0, 0.12]}>
          <group position={[1035.92, 0, 0]}>
            <group position={[293.87, -61.02, -204.48]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes["LowPoly001_Material_#108_0"].geometry}
                  material={materials.Material_108}
                  position={[-1327.82, 35.06, 206.99]}
                  rotation={[-0.06, 0.08, -1.26]}
                  scale={0.01}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes["LowPoly001_Material_#108_0001"].geometry}
                  material={materials.Material_108}
                  position={[-1327.51, 34.02, 207.7]}
                  rotation={[-0.06, 0.08, -1.26]}
                  scale={0.01}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes["LowPoly001_Material_#108_0002"].geometry}
                  material={materials.Material_108}
                  position={[-1334.88, 34.6, 215.06]}
                  rotation={[-2.77, -1.05, 2.39]}
                  scale={0.01}
                />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["LowPoly001_Material_#108_0003"].geometry}
                material={materials.Material_108}
                position={[-1333.69, 34.54, 211.99]}
                rotation={[-0.06, 0.08, -1.26]}
                scale={0.01}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["LowPoly001_Material_#108_0004"].geometry}
                material={materials.Material_108}
                position={[-1333.76, 35.69, 214.69]}
                rotation={[-2.77, -1.05, 2.39]}
                scale={0.01}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["LowPoly001_Material_#108_0005"].geometry}
                material={materials.Material_108}
                position={[-1333.91, 41.56, 211.72]}
                rotation={[-0.53, -1.04, -0.89]}
                scale={0.01}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["LowPoly001_Material_#108_0006"].geometry}
                material={materials.Material_108}
                position={[-1335.17, 40.02, 209.43]}
                rotation={[-0.65, -0.22, -1.79]}
                scale={0.01}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["LowPoly001_Material_#108_0007"].geometry}
                material={materials.Material_108}
                position={[-1333.25, 42.15, 210.53]}
                rotation={[-0.53, -1.04, -0.89]}
                scale={0.01}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["LowPoly001_Material_#108_0008"].geometry}
                material={materials.Material_108}
                position={[-1339, 40.44, 211.5]}
                rotation={[-1.93, -0.84, 3.04]}
                scale={0.01}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["LowPoly001_Material_#108_0008"].geometry}
                material={materials.Material_108}
                position={[-1342, 42, 202]}
                rotation={[-1.93, -0.84, 3.04]}
                scale={0.01}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["LowPoly001_Material_#108_0008"].geometry}
                material={materials.Material_108}
                position={[-1340, 42.5, 201]}
                rotation={[-1.93, -0.84, 3.04]}
                scale={0.008}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["LowPoly001_Material_#108_0008"].geometry}
                material={materials.Material_108}
                position={[-1340, 42.5, 202]}
                rotation={[-1.93, -0.84, 3.04]}
                scale={0.008}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["LowPoly001_Material_#108_0008"].geometry}
                material={materials.Material_108}
                position={[-1338, 44.3, 205]}
                rotation={[-1.93, -0.84, 3.04]}
                scale={0.003}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["LowPoly001_Material_#108_0008"].geometry}
                material={materials.Material_108}
                position={[-1335.5, 44, 205.5]}
                rotation={[-1.93, -0.84, 3.04]}
                scale={0.003}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["LowPoly001_Material_#108_0009"].geometry}
                material={materials.Material_108}
                position={[-1328.97, 36.89, 207.96]}
                rotation={[-0.06, 0.08, -1.26]}
                scale={0.01}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["LowPoly001_Material_#108_0010"].geometry}
                material={materials.Material_108}
                position={[-1329.75, 36.2, 209.16]}
                rotation={[-0.06, 0.08, -1.26]}
                scale={0.01}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["LowPoly001_Material_#108_0011"].geometry}
                material={materials.Material_108}
                position={[-1327.91, 32.99, 208.09]}
                rotation={[-0.06, 0.08, -1.26]}
                scale={0.01}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["LowPoly001_Material_#108_0012"].geometry}
                material={materials.Material_108}
                position={[-1327.6, 31.96, 208.8]}
                rotation={[-0.06, 0.08, -1.26]}
                scale={0.01}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["LowPoly001_Material_#108_0013"].geometry}
                material={materials.Material_108}
                position={[-1327.84, 33.16, 207.91]}
                rotation={[-0.06, 0.08, -1.26]}
                scale={0.01}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["LowPoly001_Material_#108_0014"].geometry}
                material={materials.Material_108}
                position={[-1327.53, 32.12, 208.63]}
                rotation={[-0.06, 0.08, -1.26]}
                scale={0.01}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["LowPoly001_Material_#108_0015"].geometry}
                material={materials.Material_108}
                position={[-1328.22, 35.18, 209.06]}
                rotation={[-0.2, 0.09, -1.26]}
                scale={0.01}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["LowPoly001_Material_#108_0016"].geometry}
                material={materials.Material_108}
                position={[-1327.89, 34.25, 209.91]}
                rotation={[-0.2, 0.09, -1.26]}
                scale={0.01}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["LowPoly001_Material_#108_0017"].geometry}
                material={materials.Material_108}
                position={[-1333.95, 36.43, 215.05]}
                rotation={[-2.26, -1.32, 2.89]}
                scale={[0, 0, 0.01]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["LowPoly001_Material_#108_0018"].geometry}
                material={materials.Material_108}
                position={[-1334.28, 37.3, 214.74]}
                rotation={[-2.26, -1.32, 2.89]}
                scale={0}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["LowPoly001_Material_#108_0019"].geometry}
                material={materials.Material_108}
                position={[-1336.07, 42.76, 210.33]}
                rotation={[-2.26, -1.32, 2.89]}
                scale={0}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["LowPoly001_Material_#108_0020"].geometry}
                material={materials.Material_108}
                position={[-1328.04, 37.82, 212.08]}
                rotation={[-2.26, -1.32, 2.89]}
                scale={0}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["LowPoly001_Material_#108_0021"].geometry}
                material={materials.Material_108}
                position={[-1326.92, 36.78, 210.3]}
                rotation={[-0.18, -0.62, -1.35]}
                scale={0}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["LowPoly001_Material_#108_0022"].geometry}
                material={materials.Material_108}
                position={[-1334.27, 41.72, 210.94]}
                rotation={[-1.31, -1.21, -2.27]}
                scale={0}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["LowPoly001_Material_#108_0023"].geometry}
                material={materials.Material_108}
                position={[-1328.4, 38.37, 211.91]}
                rotation={[-2.26, -1.32, 2.89]}
                scale={0}
              />
            </group>
          </group>
        </group>
      </group>
      <RigidBody
        mass={100}
        colliders={"trimesh"}
        type="fixed"
        enabledRotations={[false, false, false]}
      >
        <mesh
          receiveShadow
          geometry={nodes.Plane001.geometry}
          material={materials["Material.001"]}
          position={[0, -0.022, 0]}
        />
      </RigidBody>
      <meshStandardMaterial color="red" />
    </group>
  );
}

useGLTF.preload("/tower/sgrad_better.glb");

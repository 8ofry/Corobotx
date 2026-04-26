"use client";

import { useFrame } from "@react-three/fiber";
import { useGLTF, Text, Sparkles } from "@react-three/drei";
import { useMemo, useRef, Suspense } from "react";
import * as THREE from "three";

// Pivot points (millimeters, world space) where each joint rotates.
const J2_PIVOT: [number, number, number] = [140, 0, 345];
const J3_PIVOT: [number, number, number] = [200, 0, 1140];
const J4_PIVOT: [number, number, number] = [400, 0, 1270];
const J5_PIVOT: [number, number, number] = [790, 0, 1225];
const J6_PIVOT: [number, number, number] = [790, 0, 1147];

const neg = (p: [number, number, number]): [number, number, number] =>
  [-p[0], -p[1], -p[2]];

export type JointAngles = {
  j1: number;
  j2: number;
  j3: number;
  j4: number;
  j5: number;
  j6: number;
  baseX?: number;
  baseY?: number;
  baseZ?: number;
  sparksOpacity?: number;
};

type Props = {
  anglesRef: React.MutableRefObject<JointAngles>;
};

/**
 * FD-B6 industrial arm, kinematically rigged.
 * glTF has 9 flat meshes — we manually re-parent them into a joint chain.
 * Mesh index → role: 0 base, 1 shoulder, 2 upper arm, 3 elbow, 4 forearm,
 * 5 wrist, 6 flange, 7 cable cover (elbow), 8 motor cover (shoulder).
 */
export default function Robot3D({ anglesRef }: Props) {
  const { scene } = useGLTF("/FD-B6/FD-B6.gltf");

  const meshes = useMemo(() => {
    const arr: THREE.Mesh[] = [];
    scene.traverse((obj) => {
      if ((obj as THREE.Mesh).isMesh) arr.push(obj as THREE.Mesh);
    });

    // Order by node name suffix (empty_2..empty_10 → 0..8)
    arr.sort((a, b) => {
      const na = parseInt(a.name.replace(/\D/g, ""), 10) || 0;
      const nb = parseInt(b.name.replace(/\D/g, ""), 10) || 0;
      return na - nb;
    });

    // Apply realistic physical material
    arr.forEach((mesh) => {
      const orig = mesh.material as THREE.MeshStandardMaterial;
      const color = orig?.color ? orig.color.clone() : new THREE.Color("#f2d07a");
      mesh.material = new THREE.MeshPhysicalMaterial({ 
        color, 
        metalness: 0.6, 
        roughness: 0.2, 
        clearcoat: 0.5, 
        clearcoatRoughness: 0.2
      });
      mesh.castShadow = true;
      mesh.receiveShadow = true;
    });

    return arr;
  }, [scene]);

  const baseGroup = useRef<THREE.Group>(null!);
  const j1 = useRef<THREE.Group>(null!);
  const j2 = useRef<THREE.Group>(null!);
  const j3 = useRef<THREE.Group>(null!);
  const j4 = useRef<THREE.Group>(null!);
  const j5 = useRef<THREE.Group>(null!);
  const j6 = useRef<THREE.Group>(null!);
  const sparksGroupRef = useRef<THREE.Group>(null!);

  useFrame(() => {
    const a = anglesRef.current;
    if (baseGroup.current) {
      baseGroup.current.position.x = a.baseX ?? 0;
      baseGroup.current.position.y = a.baseY ?? 0;
      baseGroup.current.position.z = a.baseZ ?? 0;
    }
    if (j1.current) j1.current.rotation.z = a.j1;
    if (j2.current) j2.current.rotation.y = a.j2;
    if (j3.current) j3.current.rotation.y = a.j3;
    if (j4.current) j4.current.rotation.x = a.j4;
    if (j5.current) j5.current.rotation.y = a.j5;
    if (j6.current) j6.current.rotation.x = a.j6;
    
    if (sparksGroupRef.current) {
      const opacity = a.sparksOpacity ?? 0;
      sparksGroupRef.current.scale.setScalar(opacity);
      sparksGroupRef.current.visible = opacity > 0.01;
    }
  });

  if (meshes.length < 9) return null;

  const M = ({ i }: { i: number }) => <primitive object={meshes[i]} />;

  return (
    <group ref={baseGroup}>
      <M i={0} />
      <group ref={j1}>
        <M i={1} />
        <group position={J2_PIVOT}>
          <group ref={j2}>
            <group position={neg(J2_PIVOT)}>
              <M i={2} />
              <M i={8} />
              {/* Logo on the right side of the arm */}
              <Suspense fallback={null}>
                <Text 
                  position={[115, -115, 400]} 
                  rotation={[0, Math.PI / 2, -Math.PI / 2]}
                  fontSize={45}
                  color="#0084FF"
                  fontWeight="bold"
                  letterSpacing={0.05}
                >
                  Corobotx
                </Text>
              </Suspense>
              {/* Logo on the left side of the arm */}
              <Suspense fallback={null}>
                <Text 
                  position={[-115, -115, 400]} 
                  rotation={[0, -Math.PI / 2, Math.PI / 2]}
                  fontSize={45}
                  color="#0084FF"
                  fontWeight="bold"
                  letterSpacing={0.05}
                >
                  Corobotx
                </Text>
              </Suspense>
              <group position={J3_PIVOT}>
                <group ref={j3}>
                  <group position={neg(J3_PIVOT)}>
                    <M i={3} />
                    <M i={7} />
                    <group position={J4_PIVOT}>
                      <group ref={j4}>
                        <group position={neg(J4_PIVOT)}>
                          <M i={4} />
                          <group position={J5_PIVOT}>
                            <group ref={j5}>
                              <group position={neg(J5_PIVOT)}>
                                <M i={5} />
                                <group position={J6_PIVOT}>
                                  <group ref={j6}>
                                    <group position={neg(J6_PIVOT)}>
                                      <M i={6} />
                                      {/* Magic / Sparks at the tip */}
                                      <group position={[900, 0, 1147]} ref={sparksGroupRef}>
                                        <Sparkles count={150} scale={150} size={15} speed={0.4} opacity={1} color="#ffaa00" />
                                        <Sparkles count={50} scale={80} size={25} speed={0.8} opacity={1} color="#ffffff" />
                                      </group>
                                    </group>
                                  </group>
                                </group>
                              </group>
                            </group>
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/FD-B6/FD-B6.gltf");

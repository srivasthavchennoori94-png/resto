"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshReflectorMaterial, Sparkles, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

// 3D Floating Signature Ceramic Plate & Gourmet Dish
function SignatureDishPlate({ mouse }: { mouse: React.MutableRefObject<{ x: number; y: number }> }) {
  const groupRef = useRef<THREE.Group>(null);
  const steamRef = useRef<THREE.Points>(null);

  // Steam particle count & positions
  const steamParticles = useMemo(() => {
    const count = 45;
    const positions = new Float32Array(count * 3);
    const opacities = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 0.8;
      positions[i * 3 + 1] = Math.random() * 1.5;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 0.8;
      opacities[i] = Math.random();
    }
    return { positions, opacities };
  }, []);

  useFrame((state, delta) => {
    if (groupRef.current) {
      // Slow continuous rotation
      groupRef.current.rotation.y += delta * 0.15;
      // Gentle responsive tilt toward mouse
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        0.35 + mouse.current.y * 0.2,
        0.05
      );
      groupRef.current.rotation.z = THREE.MathUtils.lerp(
        groupRef.current.rotation.z,
        -mouse.current.x * 0.2,
        0.05
      );
    }

    // Animate steam particles rising
    if (steamRef.current) {
      const positions = steamRef.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < 45; i++) {
        positions[i * 3 + 1] += delta * 0.4;
        if (positions[i * 3 + 1] > 2.0) {
          positions[i * 3 + 1] = 0.1;
          positions[i * 3] = (Math.random() - 0.5) * 0.6;
          positions[i * 3 + 2] = (Math.random() - 0.5) * 0.6;
        }
      }
      steamRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <Float speed={1.8} rotationIntensity={0.2} floatIntensity={0.4}>
      <group ref={groupRef} position={[0, -0.2, 0]}>
        {/* Dark Stoneware Ceramic Plate Body */}
        <mesh position={[0, 0, 0]} castShadow receiveShadow>
          <cylinderGeometry args={[2.2, 1.6, 0.2, 48]} />
          <meshStandardMaterial
            color="#121110"
            roughness={0.45}
            metalness={0.2}
          />
        </mesh>

        {/* Elevated Plate Rim with Gold Accent Line */}
        <mesh position={[0, 0.11, 0]}>
          <torusGeometry args={[2.18, 0.04, 16, 64]} />
          <meshStandardMaterial
            color="#B99A62"
            roughness={0.3}
            metalness={0.85}
          />
        </mesh>

        {/* Plate Inner Dish Center */}
        <mesh position={[0, 0.08, 0]}>
          <cylinderGeometry args={[1.7, 1.4, 0.05, 40]} />
          <meshStandardMaterial
            color="#0D0C0B"
            roughness={0.3}
            metalness={0.1}
          />
        </mesh>

        {/* Gourmet Signature Culinary Creation (Sculpted Dish) */}
        {/* Smoked Glazed Cutlet / Gourmet Medallion */}
        <mesh position={[0, 0.25, 0]} rotation={[0, 0.4, 0]}>
          <cylinderGeometry args={[0.75, 0.85, 0.35, 24]} />
          <meshStandardMaterial
            color="#3a1e12"
            roughness={0.6}
            metalness={0.1}
          />
        </mesh>

        {/* Saffron & Amber Glaze Emulsion Drop */}
        <mesh position={[0.2, 0.44, 0.1]}>
          <sphereGeometry args={[0.25, 16, 16]} />
          <meshStandardMaterial
            color="#C47A3A"
            roughness={0.1}
            metalness={0.2}
            emissive="#A55D35"
            emissiveIntensity={0.25}
          />
        </mesh>

        {/* Micro Herb / Gold Leaf Flakes */}
        <mesh position={[-0.25, 0.42, -0.15]} rotation={[0.2, 0.5, 0]}>
          <boxGeometry args={[0.15, 0.02, 0.15]} />
          <meshStandardMaterial
            color="#DFC99F"
            roughness={0.2}
            metalness={0.9}
          />
        </mesh>

        <mesh position={[0.15, 0.43, -0.25]} rotation={[-0.3, 0.8, 0.2]}>
          <boxGeometry args={[0.12, 0.02, 0.12]} />
          <meshStandardMaterial
            color="#DFC99F"
            roughness={0.2}
            metalness={0.9}
          />
        </mesh>

        {/* Miniature Microgreen sprig */}
        <mesh position={[-0.1, 0.45, 0.2]}>
          <cylinderGeometry args={[0.02, 0.02, 0.25, 8]} />
          <meshStandardMaterial color="#4A6B3A" roughness={0.7} />
        </mesh>

        {/* Elegant Cutlery (Brass & Black Matte Fork / Spoon Beside Plate) */}
        <group position={[2.5, 0.05, 0]} rotation={[0, 0.1, 0]}>
          <mesh>
            <cylinderGeometry args={[0.04, 0.03, 2.2, 12]} />
            <meshStandardMaterial color="#B99A62" metalness={0.8} roughness={0.25} />
          </mesh>
        </group>

        {/* Subtle Steam Rising from the Hot Gourmet Dish */}
        <points ref={steamRef} position={[0, 0.4, 0]}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              args={[steamParticles.positions, 3]}
            />
          </bufferGeometry>
          <pointsMaterial
            size={0.08}
            color="#E8DDC8"
            transparent
            opacity={0.35}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </points>
      </group>
    </Float>
  );
}

// Crystal Cocktail Glass with Amber Liquid
function AmbientCocktailGlass({ mouse }: { mouse: React.MutableRefObject<{ x: number; y: number }> }) {
  const glassRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (glassRef.current) {
      glassRef.current.rotation.y -= delta * 0.12;
      glassRef.current.position.y = -0.5 + Math.sin(Date.now() * 0.001) * 0.08;
    }
  });

  return (
    <group ref={glassRef} position={[-2.8, -0.5, -0.5]}>
      {/* Crystal Coupe Glass Stem & Base */}
      <mesh position={[0, -0.6, 0]}>
        <cylinderGeometry args={[0.7, 0.7, 0.04, 24]} />
        <meshPhysicalMaterial
          color="#ffffff"
          roughness={0.05}
          transmission={0.9}
          thickness={0.5}
          ior={1.5}
        />
      </mesh>
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 1.2, 16]} />
        <meshPhysicalMaterial
          color="#ffffff"
          roughness={0.05}
          transmission={0.9}
          thickness={0.5}
          ior={1.5}
        />
      </mesh>

      {/* Coupe Glass Bowl */}
      <mesh position={[0, 0.7, 0]}>
        <sphereGeometry args={[0.9, 24, 24, 0, Math.PI * 2, 0, Math.PI * 0.5]} />
        <meshPhysicalMaterial
          color="#ffffff"
          roughness={0.05}
          transmission={0.92}
          thickness={0.4}
          ior={1.52}
          transparent
          opacity={0.8}
        />
      </mesh>

      {/* Amber Liquid with Glow */}
      <mesh position={[0, 0.65, 0]}>
        <cylinderGeometry args={[0.82, 0.4, 0.35, 24]} />
        <meshStandardMaterial
          color="#C47A3A"
          roughness={0.1}
          metalness={0.2}
          emissive="#A55D35"
          emissiveIntensity={0.4}
        />
      </mesh>

      {/* Crystal Clear Ice Cube */}
      <mesh position={[0.1, 0.8, 0.1]} rotation={[0.4, 0.6, 0.2]}>
        <boxGeometry args={[0.32, 0.32, 0.32]} />
        <meshPhysicalMaterial
          color="#ffffff"
          roughness={0.05}
          transmission={0.95}
          thickness={0.8}
          ior={1.31}
        />
      </mesh>
    </group>
  );
}

export default function Hero3DCanvas() {
  const mouse = useRef({ x: 0, y: 0 });

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    mouse.current = { x, y };
  };

  return (
    <div
      onPointerMove={handlePointerMove}
      className="absolute inset-0 w-full h-full pointer-events-auto"
      style={{ zIndex: 1 }}
    >
      <Canvas
        shadows
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        dpr={[1, 2]}
      >
        <PerspectiveCamera makeDefault position={[0, 0.6, 5.5]} fov={45} />

        {/* Atmospheric Lighting */}
        <ambientLight intensity={0.6} color="#352618" />

        {/* Warm Golden Pendant Light from above */}
        <pointLight
          position={[0, 4, 1.5]}
          intensity={8}
          color="#DFC99F"
          distance={10}
          decay={2}
          castShadow
        />

        {/* Warm Amber Rim Light */}
        <pointLight
          position={[-3, 2, -1]}
          intensity={6}
          color="#C47A3A"
          distance={8}
          decay={2}
        />

        {/* Deep Charcoal Back Light for silhouette contrast */}
        <directionalLight
          position={[2, -2, -2]}
          intensity={1.2}
          color="#422915"
        />

        {/* Signature Floating 3D Plate */}
        <SignatureDishPlate mouse={mouse} />

        {/* Crystal Cocktail Glass */}
        <AmbientCocktailGlass mouse={mouse} />

        {/* Floating Golden Dust Embers in Dark Air */}
        <Sparkles
          count={50}
          scale={[8, 6, 6]}
          size={1.6}
          speed={0.4}
          color="#DFC99F"
          opacity={0.45}
        />
      </Canvas>
    </div>
  );
}

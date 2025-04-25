import * as THREE from "three";
import { useEffect, useLayoutEffect, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Physics, usePlane, useSphere } from "@react-three/cannon";

const customColors = [
  "#E02C2C", // 赤
  "#2CE02C", // 緑
  "#382CE0", // 青
  "#E02C87", // ピンク
  "#A72CE0", // シアン
  "#E0DA2C", // 黄
  "#E0A12C"
];

const tempColor = new THREE.Color();

const data = Array.from({ length: 200 }, () => ({
  color: customColors[Math.floor(Math.random() * customColors.length)], 
  scale: 0.25 + Math.random(),
}));

export const AboutCanvas: React.FC = () => (
  <Canvas
    orthographic
    camera={{ position: [0, 0, 100], zoom: 100 }}
    style={{ background: "#FFF0F5" }}
    className="about-canvas"
  >
    <ambientLight intensity={1} />
    <directionalLight position={[5, 5, 5]} intensity={2} castShadow={false} />
    <BackgroundPlane />
    <Physics gravity={[0, -50, 0]}>
      <group position={[0, 0, -10]}>
        <Mouse />
        <Borders />
        <InstancedSpheres />
      </group>
    </Physics>
  </Canvas>
);

interface InstancedSpheresProps {
  count?: number;
}

const InstancedSpheres: React.FC<InstancedSpheresProps> = ({ count = 200 }) => {
  const { viewport } = useThree();
  const [ref, api] = useSphere((index) => ({
    mass: data[index].scale * 100,
    position: [4 - Math.random() * 8, viewport.height * 3, 0],
    args: [data[index].scale],
  }));

  const colorArray = useMemo(
    () =>
      Float32Array.from(
        new Array(count)
          .fill(null)
          .flatMap((_, i) => tempColor.set(data[i].color).toArray())
      ),
    [count]
  );

  useLayoutEffect(() => {
    for (let i = 0; i < count; i++) {
      api.at(i).scaleOverride([data[i].scale, data[i].scale, data[i].scale]);
    }
  }, [api, count]);

  return (
    <instancedMesh ref={ref} args={[undefined, undefined, count]}>
      <sphereGeometry args={[1, 64, 64]}>
        <instancedBufferAttribute
          attach="attributes-color"
          args={[colorArray, 3]}
        />
      </sphereGeometry>
      <meshPhysicalMaterial
        vertexColors
        transparent
        transmission={1}
        roughness={0}
        metalness={0}
        ior={1.5}
        thickness={0.5}
        clearcoat={1}
        clearcoatRoughness={0}
      />
    </instancedMesh>
  );
};

const Borders: React.FC = () => {
  const { viewport } = useThree();
  return (
    <>
      <Plane
        position={[0, -viewport.height / 2, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <Plane
        position={[-viewport.width / 2 - 1, 0, 0]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <Plane
        position={[viewport.width / 2 + 1, 0, 0]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <Plane position={[0, 0, -1]} rotation={[0, 0, 0]} />
      <Plane position={[0, 0, 12]} rotation={[0, -Math.PI, 0]} />
    </>
  );
};

interface PlaneProps {
  position?: [number, number, number];
  rotation?: [number, number, number];
}

const Plane: React.FC<PlaneProps> = ({
  position = [0, 0, 0],
  ...props
}) => {
  const [, api] = usePlane(() => ({ ...props }));
  useEffect(() => api.position.set(...position), [api, position]);
  return null; // Plane itself doesn't render anything, just handles the physics.
};

const BackgroundPlane: React.FC = () => {
  return (
    <mesh position={[0, 0, -5]}>
      <planeGeometry args={[30, 30]} />
      <meshStandardMaterial color="#FFE4E9" /> {/* 明るく綺麗なピンク */}
    </mesh>
  );
};

const Mouse: React.FC = () => {
  const { viewport } = useThree();
  const [, api] = useSphere(() => ({ type: "Kinematic", args: [4] }));
  useFrame((state) =>
    api.position.set(
      (state.mouse.x * viewport.width) / 2,
      (state.mouse.y * viewport.height) / 2,
      7
    )
  );
  return (
    <mesh scale={0.2}>
      <sphereGeometry />
      <meshBasicMaterial color={[4, 4, 4]} toneMapped={false} />
      <pointLight intensity={8} distance={10} />
    </mesh>
  );
};

export default AboutCanvas;

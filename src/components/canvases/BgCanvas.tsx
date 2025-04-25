import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Physics, useSphere } from "@react-three/cannon";
import { EffectComposer, N8AO, SMAA, Bloom } from "@react-three/postprocessing";
import { AsciiRenderer } from "@react-three/drei";

const rfs = THREE.MathUtils.randFloatSpread;
const cubeGeometry = new THREE.BoxGeometry(2, 2, 2); // 立方体のジオメトリに変更
const baubleMaterial = new THREE.MeshStandardMaterial({
  color: "white",
  roughness: 0,
  envMapIntensity: 1,
});

const BgCanvas = () => (
  <Canvas
    shadows
    gl={{ antialias: false }}
    dpr={[1, 1.5]}
    camera={{ position: [0, 0, 20], fov: 35, near: 1, far: 40 }}
    style={{ width: "100%", height: "50vh" }}
    className="bgCanvas"
  >
    <ambientLight intensity={0.5} />
    <color attach="background" args={["#dfdfdf"]} />
    <spotLight
      intensity={1}
      angle={0.2}
      penumbra={1}
      position={[30, 30, 30]}
      castShadow
      shadow-mapSize={[512, 512]}
    />
    <Physics gravity={[0, 2, 0]} iterations={10}>
      <Pointer />
      <Clump />
    </Physics>
    <EffectComposer enableNormalPass={false} multisampling={0}>
      <N8AO
        halfRes
        color="black"
        aoRadius={2}
        intensity={1}
        aoSamples={6}
        denoiseSamples={4}
      />
      <Bloom mipmapBlur levels={7} intensity={1} />
      <SMAA />
    </EffectComposer>
    <AsciiRenderer fgColor="#E02C87" bgColor="#F4F1EF" />
  </Canvas>
);

function Clump({
  mat = new THREE.Matrix4(),
  vec = new THREE.Vector3(),
}) {
  const [ref, api] = useSphere(() => ({
    args: [1],
    mass: 1,
    angularDamping: 0.1,
    linearDamping: 0.65,
    position: [rfs(20), rfs(20), rfs(20)],
  }));
  useFrame(() => {
    for (let i = 0; i < 40; i++) {
      // Get current whereabouts of the instanced cube
      (ref.current as THREE.InstancedMesh).getMatrixAt(i, mat);
      // Normalize the position and multiply by a negative force.
      // This is enough to drive it towards the center-point.
      api
        .at(i)
        .applyForce(
          vec
            .setFromMatrixPosition(mat)
            .normalize()
            .multiplyScalar(-40)
            .toArray(),
          [0, 0, 0]
        );
    }
  });
  return (
    <instancedMesh
      ref={ref}
      castShadow
      receiveShadow
      args={[cubeGeometry, baubleMaterial, 40]}
    >
    </instancedMesh>
  );
}

function Pointer() {
  const viewport = useThree((state) => state.viewport);
  const [ref, api] = useSphere(() => ({
    type: "Kinematic",
    args: [3],
    position: [0, 0, 0],
  }));
  useFrame((state) =>
    api.position.set(
      (state.mouse.x * viewport.width) / 2,
      (state.mouse.y * viewport.height) / 2,
      0
    )
  );
  return (
    <mesh ref={ref} scale={0.2}>
      <sphereGeometry />
      <meshBasicMaterial color={[4, 4, 4]} toneMapped={false} />
      <pointLight intensity={8} distance={10} />
    </mesh>
  );
}

export default BgCanvas;

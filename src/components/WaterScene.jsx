import { Canvas } from '@react-three/fiber';
import { Water } from '@react-three/drei';

export default function WaterScene() {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-0">
      <Canvas>
        <ambientLight intensity={0.5} />
        <Water
          args={[
            [100, 100],
            {
              textureWidth: 512,
              textureHeight: 512,
              waterColor: 0x0066cc,
              distortionScale: 3.7,
            }
          ]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </Canvas>
    </div>
  );
}

/** @format */

import { Mask, OrbitControls, Text } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Model } from "./Model/Model";

import s from "./Home.module.scss";
import Bear from "./Bear/Bear";

const Home = () => {
  return (
    <div className={s.root}>
      <Canvas
        shadows
        camera={{
          position: [-50, 2, 0],
        }}
      >
        <ambientLight intensity={3} />
        <pointLight position={[0, 20, 10]} intensity={3} />
        <Suspense fallback={null}>
          <OrbitControls enableZoom={false} />
          <Text
            color="hotpink"
            anchorX="center"
            anchorY="middle"
            fontSize="13"
            position={[0, 20, 0]}
            rotation={[0, -1.5, 0]}
            strokeColor="black"
            strokeWidth={0.2}
          >
            Happy Valentine Day
          </Text>
          <Bear scale={1} position={[0, -30, 0]} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Home;

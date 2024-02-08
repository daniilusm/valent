/** @format */

import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Model } from "./Model/Model";

import s from "./Home.module.scss";

const Home = () => {
  return (
    <div className={s.root}>
      <Canvas
        shadows
        camera={{
          position: [40, 20, 40],
        }}
      >
        <ambientLight intensity={3} />
        <pointLight position={[0, 20, 10]} intensity={3} />
        <Suspense fallback={null}>
          <OrbitControls enableZoom={false} />
          <Model scale={40} position={[0, -20, 0]} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Home;

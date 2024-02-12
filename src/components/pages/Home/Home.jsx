/** @format */

import {
  OrbitControls,
  Text,
  Text3D,
  useMatcapTexture,
} from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";
import { Model } from "./Model/Model";

import s from "./Home.module.scss";
import Bear from "./Bear/Bear";
import cx from "classnames";

const TextModel = () => {
  const [matcapTexture] = useMatcapTexture("CB4E88_F99AD6_F384C3_ED75B9");
  const ref = useRef();

  const { width: w, height: h } = useThree((state) => state.viewport);

  return (
    <Text3D
      position={[20, 20, -50]}
      rotation={[0, 1.57, 0]}
      scale={[-1, 1, 1]}
      ref={ref}
      size={w / 20}
      maxWidth={[-w / 5, -h * 2, 3]}
      font={"fonts/gt.json"}
      curveSegments={24}
      brevelSegments={1}
      bevelEnabled
      bevelSize={0.08}
      bevelThickness={0.03}
      height={1}
      lineHeight={0.9}
      letterSpacing={0.3}
    >
      {`Happy Valentine Day`}
      <meshMatcapMaterial color="white" matcap={matcapTexture} />
    </Text3D>
  );
};

const Home = () => {
  return (
    <div className={s.root}>
      <div className={s.model}>
        <Canvas
          shadows
          camera={{
            position: [-50, 2, 0],
          }}
        >
          <ambientLight intensity={3} />
          <pointLight position={[0, 20, 10]} intensity={3} />
          <Suspense fallback={null}>
            <OrbitControls
              enableZoom={false}
              minAzimuthAngle={-Math.PI / 1.2}
              maxAzimuthAngle={Math.PI / 40}
              minPolarAngle={Math.PI / 4}
              maxPolarAngle={Math.PI - Math.PI / 2.5}
            />
            <TextModel />
            <Bear scale={1} position={[0, -30, 0]} />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};

export default Home;

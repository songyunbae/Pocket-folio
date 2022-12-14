import React, {useState, useRef} from 'react';
import {Canvas} from '@react-three/fiber';
import {
  OrbitControls,
  softShadows,
  GizmoHelper,
  GizmoViewcube,
  GizmoViewport,
} from '@react-three/drei';
import Theme from './Theme';
import Items from './Items';
import Capture from '../room/Capture';

softShadows();

const RoomCanvas = props => {
  const cntRef = useRef();
  const boundaryRef = useRef();
  const [cntEnabled, setCntEnabled] = useState(true);
  const arranges = props.arranges;
  const handleArrange = props.handleArrange;
  const handleDel = props.handleDel;
  const edit = props.edit;
  const theme = props.theme;
  const loadConnect = props.loadConnect;
  const offCaptrue = props.offCaptrue;
  const capture = props.capture;
  const data = props.data;
  const changeNowIdx = props.changeNowIdx;
  const openPortDetail = props.openPortDetail;
  const changeSidebar = props.changeSidebar;
  const nowPort = props.nowPort;

  return (
    <Canvas
      shadows
      raycaster={{params: {Line: {threshold: 0.15}}}}
      camera={{position: [-30, 30, 30], fov: 20}}
    >
      <Capture
        offCaptrue={offCaptrue}
        capture={capture}
        data={data}
        changeSidebar={changeSidebar}
      />
      <ambientLight intensity={0.5} />
      <directionalLight
        castShadow
        position={[1.5, 8, 5]}
        intensity={1.5}
        shadow-mapSize={[1024, 1024]}
      >
        <orthographicCamera
          attach="shadow-camera"
          args={[-5, 5, 5, -5, 1, 50]}
          far={100}
        />
      </directionalLight>
      <OrbitControls
        makeDefault
        screenSpacePanning={true}
        regress={false}
        ref={cntRef}
        enabled={cntEnabled}
      />
      <Theme boundaryRef={boundaryRef} name={theme}>
        <Items
          cntRef={cntRef}
          boundaryRef={boundaryRef}
          edit={edit}
          setCntEnabled={setCntEnabled}
          arranges={arranges}
          handleArrange={handleArrange}
          handleDel={handleDel}
          loadConnect={loadConnect}
          changeNowIdx={changeNowIdx}
          openPortDetail={openPortDetail}
          nowPort={nowPort}
          changeSidebar={changeSidebar}
          roomSeq={data.room.roomSeq}
        />
      </Theme>

      {edit && (
        <GizmoHelper alignment="top-right" margin={[100, 100]}>
          <group scale={0.85}>
            <GizmoViewcube />
          </group>
          <group
            scale={1.75}
            position={[30, -30, -30]}
            rotation={[0, -Math.PI / 2, 0]}
          >
            <GizmoViewport
              labelColor="white"
              axisHeadScale={0.525}
              hideNegativeAxes
            />
          </group>
        </GizmoHelper>
      )}

      <OrbitControls
        makeDefault
        screenSpacePanning={true}
        regress={false}
        ref={cntRef}
        minPolarAngle={0.05}
        maxPolarAngle={Math.PI / 2.2}
      />
    </Canvas>
  );
};

export default RoomCanvas;

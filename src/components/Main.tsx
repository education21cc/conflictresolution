import React, { useState, useRef, useEffect, useMemo } from "react";
import { Viewport as PixiViewport } from "pixi-viewport";
import { ConflictContent } from "../common/constants";
import sound from 'pixi-sound';
import Marker from "./pixi/Marker";
import { Stage, Sprite } from "@inlet/react-pixi";
import ContentModal from "./contentModal";
import Viewport from "./pixi/Viewport";
import * as PIXI from 'pixi.js';
import { PixiPlugin } from 'gsap/all';
import { gsap } from 'gsap'
import Conveyor from "./pixi/Conveyor";
import BigRacks from "./pixi/BigRacks";
import Legenda from "./legenda";

PixiPlugin.registerPIXI(PIXI);
gsap.registerPlugin(PixiPlugin);

// if (process.env.NODE_ENV === "development") {
//   // @ts-ignore
//   window.__PIXI_INSPECTOR_GLOBAL_HOOK__ && window.__PIXI_INSPECTOR_GLOBAL_HOOK__.register({ PIXI: PIXI });
// }

interface Props {
  content: ConflictContent[];
  answers: number[];
  avatar: string;
  setAnswers: (value: number[]) => void;
  setSituationOpen: (value: boolean) => void;
}

const Main = (props: Props) => {
  const { content, avatar, answers, setSituationOpen } = props;
  const viewportRef = useRef<PixiViewport>(null);
  const [selectedSituation, setSelectedSituation] = useState<number | null>(null);

  const worldWidth = 3497;
  const worldHeight = 1419;

  const [canvasWidth, setCanvasWidth] = useState(1200);
  const [canvasHeight, setCanvasHeight] = useState(600);

  useEffect(() => {
    // This will set the dimensions of the canvas to that of the window
    const resize = () => {
      const width = Math.min(window.innerWidth, window.outerWidth);
      const height = Math.min(window.innerHeight, window.outerHeight);
      setCanvasWidth(width);
      setCanvasHeight(height); 
    }
    resize();

    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  useEffect(() => {
    // Center the map
    if (viewportRef.current) {
      const viewport = viewportRef.current;
      viewport.moveCenter(worldWidth / 2, worldHeight / 2);  
      viewport.scale = new PIXI.Point(0.5, 0.5);
    }
  }, [canvasWidth, canvasHeight]);

  useEffect(() => {
    // Blur the map when situation is selected
    if (selectedSituation) {
      gsap.to(viewportRef.current, {duration: .5, pixi: {blur:20}});
    } else {
      gsap.to(viewportRef.current, {duration: .5, pixi: {blur:0}});
    }

    setSituationOpen(selectedSituation !== null)
  }, [selectedSituation, setSituationOpen]);

  useEffect(() => {
    sound.add('plops', {
      url: `${process.env.PUBLIC_URL}/sound/plops.wav`,
      autoPlay: true,
    });    
  }, []);

  const handleMarkerClick = (content: ConflictContent, index: number) => {
    setSelectedSituation(index);
  }

  const handleClose = () => {
    setSelectedSituation(null);
  }

  const handleCorrectAnswer = (answer: number) => {
    // gets called from within modal once the correct answer is selected
    const copy = [...answers];
    copy[selectedSituation!] = answer;

    props.setAnswers(copy);
  }

  const selectedContent = useMemo(() => {
    if (selectedSituation === null) {
      return null;
    }
    return content?.[selectedSituation];
  }, [content, selectedSituation]);
  
  const renderMarker = (contentItem: ConflictContent, index: number) => {
    const delay = index * 0.5;
    const position = new PIXI.Point(contentItem.position[0], contentItem.position[1]);
    const bounce = answers[index] === undefined;

    return (
      <Marker 
        position={position} 
        pointerdown={() => handleMarkerClick(contentItem, index)}
        delay={delay}
        bounce={bounce}
        key={contentItem.position.join('-')}
      />
    ); 
  }

  return (
    <>
      <Stage width={canvasWidth} height={canvasHeight} options={{transparent: true}} >
        <Viewport screenWidth={canvasWidth} screenHeight={canvasHeight} worldWidth={worldWidth} worldHeight={worldHeight} ref={viewportRef} >
          <Sprite image={`${process.env.PUBLIC_URL}/images/map/warehouse-back.png`} >
            <BigRacks x={1153} y={207} />
            <Sprite image={`${process.env.PUBLIC_URL}/images/map/safe.png`} x={2086} y={296} />
            <Sprite image={`${process.env.PUBLIC_URL}/images/map/middle.png`} x={806} y={334} />

            <Conveyor name={"Conveyor"} x={269} y={498} />
            <Sprite image={`${process.env.PUBLIC_URL}/images/map/packing.png`} x={995} y={848} name="packing-table"/>

            <Sprite image={`${process.env.PUBLIC_URL}/images/map/warehouse-front-wall.png`} y={705} name="front-wall"/>
            {content.map((contentItem, index) => renderMarker(contentItem, index))}
          </Sprite>
        </Viewport>
      </Stage>
      <Legenda avatar={props.avatar} content={content} answers={answers} setSituationSelected={setSelectedSituation}/>
      { selectedContent && (
        <ContentModal 
          content={selectedContent} 
          onClose={handleClose}
          avatar={avatar}
          setCorrectAnswer={handleCorrectAnswer}
          selectedAnswer={(answers[selectedSituation!])}
        /> 
      )}
    </>
  )
};

export default Main;
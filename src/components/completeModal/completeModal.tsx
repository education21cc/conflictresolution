import React from 'react';
import ReactModal from 'react-modal';
import { Stage, Sprite } from '@inlet/react-pixi';
import './completeModal.css';

interface Props {
  avatar: string;
  translations: { [key: string]: string}
  restart: () => void;
}

const stageHeight = 720;
const stageWidth = 1280;

const CompleteModal = (props: Props) => {
  const { translations } = props;
  return (
    <ReactModal
      isOpen={true}
      ariaHideApp={false}
      portalClassName="modal-portal"
      overlayClassName="modal-overlay modal-complete-overlay"
      className="modal modal-complete"
    >
      <div className="modal-content">
        <h1 className="header">{translations["complete-header"]}</h1>

        <div className="avatar-selection">
          <Stage width={stageWidth} height={stageHeight} options={{ backgroundColor: 0xffffff}}>
            <Sprite image={`${process.env.PUBLIC_URL}/images/avatars/background.png`} 
              scale={1} 
              anchor={.5}
              y={stageHeight / 2}
              x={stageWidth / 2}
            />
            <Sprite 
              image={`${process.env.PUBLIC_URL}/images/avatars/${props.avatar}-happy.png`} 
              anchor={[0.5, 0.5]}
              scale={0.8}
              y={stageHeight / 2}
              x={stageWidth / 2}
              />
          </Stage>
          <div className="footer">
            <p className="subtext">
              {translations["complete-congrats"]}
            <br/>
            <button onClick={props.restart}>
              {translations["replay-button"]}
            </button>
            </p>
          </div>
        </div>
      </div>
    </ReactModal>  
    )
}

export default CompleteModal;

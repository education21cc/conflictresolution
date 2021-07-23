import React from 'react';
import ReactModal from 'react-modal';
import './style/modal.css';

import ConflictModalContent from './ConflictModalContent';
import { ConflictContent } from '../../common/constants';

interface Props {
  content: ConflictContent;
  avatar: string;
  onClose: () => void;
  setCorrectAnswer: (answer: number) => void;
  selectedAnswer?: number;
}

const ContentModal = (props: Props) => {
  const { content, onClose, setCorrectAnswer, selectedAnswer, avatar } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <ReactModal
      isOpen={true}
      ariaHideApp={false}
      portalClassName="modal-portal"
      overlayClassName="modal-overlay"
      className="modal"
      onRequestClose={handleClose}
    >
      <>
        <div className="header">
          <h1>{content.header} </h1>
          <div className="modal-close" onClick={() => handleClose()}></div>
        </div>
        <ConflictModalContent 
            content={content}
            setCorrectAnswer={setCorrectAnswer}
            selectedAnswer={selectedAnswer}
            avatar={avatar}
          />
      </>
    </ReactModal>  
  )
}

export default ContentModal;


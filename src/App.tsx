import React, { useState, useMemo, useEffect, useCallback } from 'react';
import Main from './components/Main';
import IntroModal from './components/introModal/introModal';
import CompleteModal from './components/completeModal/completeModal';
import PlayerBridge from './components/playerBridge';
import { GameData } from './components/playerBridge/GameData';
import { ConflictContent } from './common/constants';
import './App.css';

function App() {

  const [intro, setIntro] = useState(true);
  const [answers, setAnswers] = useState<number[]>([]);
  const [avatar, setAvatar] = useState<string>("avatar1");
  const [situationIsOpen, setSituationOpen] = useState(false);
  const [translations, setTranslations] = useState<{[key: string]: string}>({});
  const [data, setData] = useState<GameData<ConflictContent[]>>();
  const content = useMemo(() => data?.content, [data]);

  const handleRestart = () => {
    setAnswers([]);
  }

  const handleGameDataReceived = useCallback((data: GameData<ConflictContent[]>) => {

    setData(data);
    
    if (data.translations){
      const t = data.translations.reduce<{[key: string]: string}>((acc, translation) => {
        acc[translation.key] = translation.value;
        return acc;
      }, {});
      setTranslations(t);
    }
  }, []);

  useEffect(() => {
    // @ts-ignore

    // See if we are fed gamedata by 21ccplayer app, if not, go fetch it ourselves
    if (!process.env.REACT_APP_PLAYER_MODE) {
      // @ts-ignore
      if(!content) {
        console.log("no bridge found, fetching fallback")
        // @ts-ignore
        

        fetch(`${process.env.PUBLIC_URL}/config/conflict-resolution-NL.json`)
        // fetch(`${process.env.PUBLIC_URL}/config/conflict-resolution-EN.json`)
        .then((response) => {
          response.json().then((data) => {

            handleGameDataReceived(data);
          })
        })
      }
    };
  }, [content, handleGameDataReceived]);
  
  const completed = useMemo(() => {
    return answers.filter(Boolean).length === content?.length;
  }, [answers, content]);

  const showCompleted = useMemo(() => completed && !situationIsOpen, [completed, situationIsOpen]);



  return (
    <>
      <PlayerBridge gameDataReceived={handleGameDataReceived}/>
      { intro && (
        <IntroModal
          translations={translations}
          selectedAvatar={avatar} 
          onClose={() => {setIntro(false)}} 
          onChangeAvatar={setAvatar}/>
        )}
      { !showCompleted && !intro && avatar && content && (
        <Main 
          content={content} 
          translations={translations}
          avatar={avatar} 
          answers={answers} 
          setAnswers={setAnswers} 
          setSituationOpen={setSituationOpen}
        /> 
      )}
      { showCompleted && avatar && (
        <CompleteModal
          avatar={avatar} 
          restart={handleRestart}
          translations={translations}
        />)}
    </>  
  )
};

export default App;


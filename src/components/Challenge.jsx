import React, { useState, useRef } from 'react'
import ResultModal from './ResultModal';
function Challenge({title, targetTime}) {
    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
    let timer = useRef()
    let dialog = useRef()
    const timeIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;
   
    if(timeRemaining <= 0){
      clearInterval(timer.current)
      dialog.current.open();
    }

    function handleReset(){
      setTimeRemaining(targetTime * 1000);
    }

    function HandleStart(){
      timer.current = setInterval(()=>{
        console.log(timer.current)          
        setTimeRemaining(prevtimeRemaining => prevtimeRemaining - 10)
      }, 10)
    }

    function HandleStop(){
      dialog.current.open();
      clearInterval(timer.current)
    }
  return (
    <>
      <ResultModal ref={dialog} targetSeconds={targetTime} timeRemain={timeRemaining} reset={handleReset}/>
      <div className='challenge'>
        <div>{title}</div>
        <p className='challenge-time'>
          {targetTime} second{targetTime > 1? 's':''}
        </p>
        <button onClick={timeIsActive ? HandleStop : HandleStart}>{timeIsActive ? 'Stop' : 'Start'}Challenge</button>
        <p> {timeIsActive ? 'time is running ...' : 'Time Inactive'} </p>
      </div>
    </>
  )
}

export default Challenge

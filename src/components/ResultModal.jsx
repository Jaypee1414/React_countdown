import {React,forwardRef, useImperativeHandle, useRef} from 'react'
import { createPortal } from "react-dom";
const ResultModal =forwardRef(function ResultModal({ reset , targetSeconds, timeRemain}, ref,) {

    let dialog = useRef();
    let Lost = timeRemain <= 0;
    let timeLeft = (timeRemain/1000).toFixed(2);
    const score = Math.round((1 - timeRemain / (targetSeconds * 1000)) * 100)
    // console.log((3.555).toFixed(2));
    // console.log( Math.round((1 - 80 / (targetSeconds * 1000) * 100)))
    useImperativeHandle(ref, () => {
        return{
            open(){
                dialog.current.showModal();
            }
        }
    })

  return createPortal(
    <dialog ref={dialog} className='result-modal' >
      { Lost && <h2>You Lost</h2>}
      { !Lost && <h2>You Score {score}</h2>}
      <p>The target time was  <strong>{targetSeconds} seconds.</strong></p>
      <p>You Stop the timer with <strong>{timeLeft} seconds left</strong></p>
      <form method='dialog' onSubmit={reset}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById('modal')
  )
})

export default ResultModal

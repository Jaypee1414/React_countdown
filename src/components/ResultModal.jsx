import {React,forwardRef, useImperativeHandle, useRef} from 'react'

const ResultModal =forwardRef(function ResultModal({ Result, targetSeconds}, ref,) {

    let dialog = useRef();

    useImperativeHandle(ref, () => {
        return{
            open(){
                dialog.current.showModal();
            }
        }
    })

  return (
    <dialog ref={dialog} className='result-modal' >
      <h2>You {Result}</h2>
      <p>The target time was  <strong>{targetSeconds} seconds.</strong></p>
      <p>You Stop the timer with <strong>X seconds left</strong></p>
      <form method='dialog'>
        <button>Close</button>
      </form>
    </dialog>
  )
})

export default ResultModal

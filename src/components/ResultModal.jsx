import { forwardRef, useImperativeHandle, useRef } from "react"
import { createPortal } from "react-dom";
const ResultModal = forwardRef(function ResultModal({result,time,remainingTime,onReset},ref){
  const dialog = useRef();
  const userLost = remainingTime<=0;
  const formattedRemainingTime = (remainingTime / 1000 ).toFixed(2);
  useImperativeHandle(ref, ()=>{
    return{
      open(){
        dialog.current.showModal();
      }
    }
  });
  return createPortal(
    <dialog ref={dialog} className="result-modal" >
      <h2>You {userLost && <p>You Lost</p>}</h2>
      <p>
        The target time was <strong>{time} seconds.</strong>
      </p>
      <p>
        You stopped the timer with <strong>{formattedRemainingTime}</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById('modal')
  )
})
export default ResultModal;
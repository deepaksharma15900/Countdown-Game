import { useState, useRef} from "react";
import ResultModal from "./ResultModal";
export default function TimerChallenge({title,time}){
  let timer = useRef();
  let dialog = useRef();
  const [timeRemaining,setTimeRemaining] = useState(time * 1000);
  const timerIsActive = timeRemaining > 0 && timeRemaining < time * 1000;
  if(timeRemaining <= 0){
    clearInterval(timer.current);
    dialog.current.open();
  }
  function handleReset(){
    setTimeRemaining(time * 1000);
  }
  function handlestart(){
    timer.current = setInterval(()=>{
      setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 10);
    }, 10)
  }
  function handlestop(){
    dialog.current.open();
    clearInterval(timer.current);
  }
  return(
    <>
     <ResultModal ref={dialog} time={time} remainingTime={timeRemaining} onReset={handleReset}/>
    <div className="challenge">
      <h2>{title}</h2>
      <p className="challenge-time">{time} second{time > 1 ? 's' : ''}</p>
      <button onClick={timerIsActive?handlestop:handlestart}>{timerIsActive?"Stop Challenge" :"start Challenge"}</button>
      <p className={timerIsActive ?'active': undefined}>
       {timerIsActive  ? 'timer active' :'timer inactive'}
      </p>
    </div>
    </>
  );
}
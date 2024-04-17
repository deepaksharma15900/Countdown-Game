import { useState } from "react";
import { useRef } from "react";
export default function Player() {
  const[currentPlayer,setcurrentplayer] = useState('');
  const playerName = useRef();
  function savename(){
    setcurrentplayer(playerName.current.value)
  }
  return (
    <section id="player">
      <h2>Welcome {currentPlayer ? currentPlayer : "unknown entity"}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={savename}>Set Name</button>
      </p>
    </section>
  );
}

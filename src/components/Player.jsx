import { useState, useRef } from "react";
export default function Player() {
  const [playerName, setPlayerName] = useState()
  const editplayer = useRef();

  function HandleChangeName(){
    setPlayerName(editplayer.current.value)
    editplayer.current.value = ""
  }

  return (
    <section id="player">
      <h2>Welcome {playerName && playerName!=""? playerName: 'unknown entity' }</h2>
      <p>
        <input ref={editplayer} type="text" />
        <button onClick={HandleChangeName}>Set Name</button>
      </p>
    </section>
  );
}

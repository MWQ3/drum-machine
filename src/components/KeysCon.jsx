import { useEffect } from "react";

const KeysCon = ({ playAudio, sound, power }) => {
    const keyDownEvent = (e) => {
      if(e.keyCode === sound.keyCode) {
        playAudio(sound.key, sound.id)
      }
    }
    
    useEffect(() => {
      document.addEventListener("keydown", keyDownEvent)
    }, [keyDownEvent])
    
    return (
          
            <button id={sound.id} onClick={() =>  playAudio(sound.key, sound.id)} className="drum-pad" disabled={power}>
            <audio className="clip" id={sound.key}  src={sound.url} />
              {sound.key}
            </button>
    
    )
  }

  export default KeysCon;
import KeysCon from "./KeysCon";

const DrumCon = ({ playAudio, changeSounds, sounds, soundGroupName, handleVolChange, vol, volChanging, power, handlePower }) => {
  
    return (
    <div id="display">
        <div className="keys-container">
        {sounds.map(sound => (
         <KeysCon power={power} playAudio={playAudio} sound={sound} />
          ))}
          
        </div>
        
        <div className="controls">
          <p>Power {power ? "OFF" : "ON" }</p>
          <div className="ctrl-btn power">
             <input onClick={handlePower} type="checkbox" id="power" class="toggle-power" />
            <label for="power" class="power-label"></label>
          </div>
          <div className="viewer">
            <div>
              <p>
                {power ? "" : volChanging ? `Volume: ${Math.round(vol * 100)} %` : soundGroupName}
                
              </p>
            </div>
          </div>
          <div className="volume">
            <input type="range" step="0.01" min="0" max="1" value={vol} onChange={handleVolChange} class="vol-slider" />
          </div>
          <p>Bank</p>
          <div className="ctrl-btn bank">
             <input type="checkbox" id="bank" class="toggle-bank" />
            <label for="bank" onClick={changeSounds} class="bank-label"></label>
          </div>
        </div>
    </div>
    
    )
  }

  export default DrumCon;
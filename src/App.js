import { useState } from "react";
import DrumCon from "./components/DrumCon";

function App() {
  
  
  const firstSoundsGroup = [
    {
      keyCode: 81,
      key: 'Q',
      id: 'Heater-1',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
    },
    {
      keyCode: 87,
      key: 'W',
      id: 'Heater-2',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
    },
    {
      keyCode: 69,
      key: 'E',
      id: 'Heater-3',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
    },
    {
      keyCode: 65,
      key: 'A',
      id: 'Heater-4',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
    },
    {
      keyCode: 83,
      key: 'S',
      id: 'Clap',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
    },
    {
      keyCode: 68,
      key: 'D',
      id: 'Open-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
    },
    {
      keyCode: 90,
      key: 'Z',
      id: "Kick-n'-Hat",
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
    },
    {
      keyCode: 88,
      key: 'X',
      id: 'Kick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
    },
    {
      keyCode: 67,
      key: 'C',
      id: 'Closed-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
    }
  ];

const secondSoundsGroup = [
    {
      keyCode: 81,
      key: 'Q',
      id: 'Chord-1',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
    },
    {
      keyCode: 87,
      key: 'W',
      id: 'Chord-2',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
    },
    {
      keyCode: 69,
      key: 'E',
      id: 'Chord-3',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
    },
    {
      keyCode: 65,
      key: 'A',
      id: 'Shaker',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
    },
    {
      keyCode: 83,
      key: 'S',
      id: 'Open-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
    },
    {
      keyCode: 68,
      key: 'D',
      id: 'Closed-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
    },
    {
      keyCode: 90,
      key: 'Z',
      id: 'Punchy-Kick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
    },
    {
      keyCode: 88,
      key: 'X',
      id: 'Side-Stick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
    },
    {
      keyCode: 67,
      key: 'C',
      id: 'Snare',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
    }
  ];

const soundsGroup = {
  name: {
  heaterKit: "Heater Kit",
  smoothPianoKit: "Smooth Piano Kit"
  },
  group: {
    heaterKit: firstSoundsGroup,
    smoothPianoKit: secondSoundsGroup
  }
}

const [soundGroup, setSoundGroup] = useState("heaterKit")
  const [sounds, setSounds] = useState(soundsGroup.group.heaterKit)
  const [soundName, setSoundName] = useState("")
  
  const [vol, setVol] = useState(0.5);
  const [volChanging, setVolChanging] = useState(false)
  const [power, setPower] = useState(false);

  const playAudio = (key, sound) => {
    const audio = document.getElementById(key);
    setSoundName(sound)
    setVolChanging(false)
    audio.currentTime = 0
    audio.play()
  };
  
  
  const changeSounds = () => {
    if(soundGroup === "heaterKit") {
      setSoundGroup("smoothPianoKit")
      setSounds(soundsGroup.group.smoothPianoKit)
      setSoundName("")
      setVolChanging(false)
    } else {
      setSoundGroup("heaterKit")
      setSounds(soundsGroup.group.heaterKit)
      setSoundName("")
      setVolChanging(false)
    }
  }
  
  const handleVolChange = (e) => {
    setVol(e.target.value)
    setVolChanging(true)
  }
  
  const changeVol = () => {
    const audios = sounds.map(sound => document.getElementById(sound.key))
    audios.forEach(audio => {
      if(audio) {
        audio.volume = vol;
      }
    })
  }
  
  const handlePower = () => {
    setPower(!power)
  }
  
  return (
  <div>  
    {changeVol()}
    <DrumCon handlePower={handlePower} power={power} volChanging={volChanging} vol={vol} handleVolChange={handleVolChange} soundGroupName={soundName || soundsGroup.name[soundGroup]} sounds={sounds} changeSounds={changeSounds} playAudio={playAudio} />
  </div>
  
  )
}

export default App;

// *********************** STYLES *************************




const appStyles = {textAlign:" center"}
      
const drumContainer = {
    width:" 650px",
    height:" 300px",
    border:" 5px solid orange",
    margin:" 150px auto",
    backgroundColor:" gray",
    display:" flex",
    } 
    
    const tilesContainer = {
    display:" grid",
    gridTemplateColumns:" auto auto auto ",
    margin:" 20px",
    width:" fit-content",
    maxWidth:" 100%",
    maxHeight:"100vh"

    }
    
    const pad = {
    cursor: "pointer",
    width: "100px",
    height: "60px",
    padding:"5px",
    border:" none",
    borderRadius:"5px",
    margin:" 8px",
    backgroundColor: "rgb(80, 80, 49)",
    color: "white"
    }

 
    
    const settingsContainer = {
    display:"grid",
    gridTemplateColumns:" auto auto auto",
    margin:" 20px",
    width:" 50%",
    maxWidth:" 100vh",
    maxHeight:"100vh",
    display:" flex",
    flexDirection:" column",
    justifyContent: "space-evenly",
    alignItems:" center"
    }
    
    const displayDiv = {
    width:" fit-content",
    minWidth:" 90%",
    maxWidth:" 100%",
    height:" 60px",
    border:" 1px solid black",
    textAlign:" center",
    display:" flex",
    alignItems:" center",
    justifyContent:" center",
    color: "orange",
    fontWeight: "bold",
    fontStyle: "sans-serif"
    }


    






// ************************STYLES************************


function App () {

  const [power, setPower] = React.useState(true)
  const [mode, setMode] = React.useState(false)
  const [display, setDisplay] = React.useState('')
  const [audioVolume, setAudioVolume] = React.useState(0.5)
  
  const [music, setMusic] = React.useState([])

  React.useEffect( () => {
    console.log('useEffect called! ' + mode );
    mode === true? setDisplay('Smooth Piano Kit') : setDisplay('Heater Kit')

  }, [mode])

  const switchPower = () => {setPower(!power); setDisplay('')}
  const changeMode = () => {setMode(!mode) }

  const audios = document.getElementsByClassName('clip')

  for (let i = 0; i < audios.length; i++) {
    audios[i].volume = audioVolume
  }

  const volumeHandler = (e) => {
    let newVol = e.target.value/100
    setAudioVolume(newVol)
    for (let i = 0; i < audios.length; i++) {
      audios[i].volume = audioVolume
    }
   
  }

  const heaterKit = {
    Q: ['Heater 1', "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"],
    W: ['Heater 2', "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"], 
    E: ['Heater 3', "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"], 
    A: ['Heater 4', "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"],
    S: ['Clap', "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"], 
    D: ['Open HH', "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"], 
    Z: ["Kick n' Hat", "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"], 
    X: ['Kick', "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"], 
    C:['Closed HH', "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"]
  }
  
  const smoothPianoKit = {
    Q: ['Chord 1',  'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'],
    W: ['Chord 2', 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'], 
    E: ['Chord 3', 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'], 
    A: ['Shaker', 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'], 
    S :['Open HH', 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'], 
    D: ['Closed HH', 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'], 
    Z: ['Punchy Kick', 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'], 
    X: ['Side Stick', 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'], 
    C: ['Snare', 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3']
  }
  
  const handleClick = (e) => { 
    if (power === false) return
    const key = e.target.innerText
    const id = e.target.innerText
    const audio = document.getElementById(id)


    if (mode) { 
      setDisplay(smoothPianoKit[key][0])
      audio.play()
      
    } else {
      setDisplay(heaterKit[key][0])
      audio.play()
      

    }
  }

// keyboard listener
  document.onkeydown = e => {
    if (power === false) return
    const key = e.key.toLocaleUpperCase()
    const id = e.key.toLocaleUpperCase()
    if (!(key in heaterKit)) {return }

    if (mode) { 
      setDisplay(smoothPianoKit[key][0])
      document.getElementById(id).play()
    } else {
      setDisplay(heaterKit[key][0])
      document.getElementById(id).play()
    }
    
  }


    return (
        <div className="App" style={appStyles}>
          <div style={drumContainer} className='drum-machine' id="drum-machine" >

            {/* Pads  */}
            <div style={tilesContainer} className='tiles-container'>
              <button style={pad} onClick={handleClick} id="Q-pad" className='drum-pad'>                              
                    Q<audio volume="0.1" className = "clip" id="Q" src={!mode? "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3": "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"}></audio>
              </button>

              <button style={pad} onClick={handleClick} id="W-pad" className='drum-pad'>
                    W<audio volume="0.1"  className = "clip" id="W" src={!mode? "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3": "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"}></audio>
              </button>

              <button style={pad} onClick={handleClick} id="E-pad" className='drum-pad'>
                    E<audio volume="0.1"  className = "clip" id="E" src={!mode? "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" : "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"}></audio>
              </button>

              <button style={pad} onClick={handleClick} id="A-pad" className='drum-pad'>
                    A<audio volume="0.1"  className = "clip" id="A" src={!mode? "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3": "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"}></audio>
              </button>

              <button style={pad} onClick={handleClick} id="S-pad" className='drum-pad'>
                    S<audio volume="0.1"  className = "clip" id="S" src={!mode? "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3":"https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"}></audio>
              </button>

              <button style={pad} onClick={handleClick} id="D-pad" className='drum-pad'>
                    D<audio volume="0.1"  className = "clip" id="D" src={!mode? "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" : "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"}></audio>
              </button>

              <button style={pad} onClick={handleClick} id="Z-pad" className='drum-pad'>
                    Z<audio volume="0.1"  className = "clip" id="Z" src={!mode? "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" : "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"}></audio>
              </button>

              <button style={pad} onClick={handleClick} id="X-pad" className='drum-pad'>
                    X<audio volume="0.1"  className = "clip" id="X" src={!mode? "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3": "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"}></audio>
              </button>

              <button style={pad} onClick={handleClick} id="C-pad" className='drum-pad'>
                    C<audio volume="0.1"  className = "clip" id="C" src={!mode? "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3": "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"}></audio>
              </button>
            </div>
                
    
         
    
              <div style={settingsContainer} className='settings-container'>
                <span>
                    <span>Power </span>
                    <input onChange={switchPower} type='checkbox' checked={power}></input>
                </span>
      
                <div style={displayDiv} className='display' id="display"> <p id='mode'>{display}</p> </div>
      
                <div> 
                  <input  disabled={!power}  onChange={volumeHandler} id='volume' type='range'  min="0" max="100"></input>
                </div>
      
                <span>
                    <span>Bank </span>
                    <input disabled={!power}  onChange={changeMode} type='checkbox'></input>
                </span>
              
    
            </div>

          </div>
            <h3>by Lawrence</h3>
          <hr style={{margin: "auto"}}/><br/>

        
    
        </div>
  
      );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


import {useState, useEffect} from 'react'

function App() {
  const [state, setState] = useState(0)

  const [timerRunning, setTimerRunning] = useState(false)


  //  useEffect(() => {
    //  Code to run as the effect         similar to ComponentDidMount in class componenent
  
    //  return () => {
    //    // Cleanup code     similar to ComponentUnMount in class componenent
    //  };
  //  }, [/* dependencies */]); optional..but it's best practise to write dependencies to avoid errors in big projects

  useEffect(() => {
    let timerId
    if(timerRunning) {
      timerId = setInterval(() => {
        setState(prevState => prevState+1)
      },1000)
    }

    return () => {
      clearInterval(timerId)
    }

  }, [timerRunning, state] 
  )

 const onStartStopWatch = () => {
  setTimerRunning(true);
 }

 const onPauseStopWatch = () => {
  setTimerRunning(false)
 }

 const onResetStopWatch = () => {
  setState(0)
  setTimerRunning(false)
 }

const formattingTime = (display) => {
  
    const minutes = Math.floor(display/60)
    const seconds = display%60

    //return `${minutes}:${seconds}`
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    // until min or sec reaches two digit value, it'll be accompanied with 01...09
  
}

  return (
    <div>
      <h1>stop watch</h1>
      <h2> {formattingTime(state)}</h2>
      <button onClick={onStartStopWatch}>Start</button> <br/> <br/>
      <button onClick={onPauseStopWatch}>Pause</button> <br/> <br/>
      <button onClick={onResetStopWatch}>Reset</button> 
    </div>
  )
}

export default App;
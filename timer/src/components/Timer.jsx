import { useState, useEffect } from 'react'

export default function Timer(){
    const [seconds, setSeconds] = useState(0)
    const [startTimer, setStartTimer] = useState(false)
    const [timerType, setTimerType] = useState("stopwatch")

    const format = (s) => {
    const h = String(Math.floor(s / 3600)).padStart(2, "0");
    const m = String(Math.floor((s % 3600) / 60)).padStart(2, "0");
    const sec = String(s % 60).padStart(2, "0");
    return `${h}:${m}:${sec}`;
  };

 useEffect(event => {
    let interval;
    if(startTimer && timerType === "pomodoro")
        {
            interval = setInterval(() => setSeconds(seconds => seconds - 1), 1000)
        }
        else if(startTimer && timerType === "stopwatch")
            {
            interval = setInterval(() => setSeconds(seconds => seconds + 1), 1000)
            }

    return () => clearInterval(interval)
 }, [startTimer])

  function handleReset(){
    if(timerType === "pomodoro"){
        setSeconds(1500)
    }
    else{
        setSeconds(0)
    }
    setStartTimer(false)
  }

  function handleChange(event){
    if(event.target.value === "pomodoro"){
         setTimerType(event.target.value)
         setSeconds(1500)
    }
    else{
        setTimerType(event.target.value)
        setSeconds(0)
    }
  }

  return(
    <div>
        {format(seconds)}
        <br></br> <br></br>

        <button onClick={() => setStartTimer(!startTimer)}>{startTimer ? "Stop" : "Start"}</button>
        <button onClick={handleReset}>Reset</button>
         <br></br> <br></br>
        
        <select name="timerOptions" id='timer_dropDown' defaultValue="stopwatch" onChange={handleChange}>
            <option value="" disabled>Choose Timer</option>
            <option value="pomodoro" id="pomodoro" >Pomodoro</option>
            <option value="stopwatch" id="stopwatch">StopWatch</option>
        </select>
     
      
    </div>
  )
}
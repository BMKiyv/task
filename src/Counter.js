import React,{ useState, useRef, useEffect, useCallback } from 'react'
import { initTimer, PauseTimer, stopTimer } from './timer'

const Counter = () => {
    const [sec, setSec] = useState(0);
    const [status, setStatus] = useState("");
    const sub = useRef();

    useEffect(() => {
        if (status === "start") {
          sub.current = initTimer.subscribe({
            next(x) {
              setSec(x => x + 1000);
            }
          });
        }
      
        if (status === "stop") {
          if (sub.current) {
            sub.current = stopTimer.subscribe()
          }
        }

        if (status === "wait") {
            sub.current = PauseTimer.subscribe()
        }
      
        return () => {
          if (sub.current) {
            sub.current.unsubscribe();
          }
        }
      }, [status]);

      const start = useCallback(() => {
        setStatus("start");
      }, []);
      
      const stop = useCallback(() => {
        setStatus("stop");
        setSec(0);
      }, []);

      const wait = useCallback(() => {
          setStatus("wait")
      },[])
      
    return(
        <div>
            <div>
            <span className = 'timer'> {new Date(sec).toISOString().slice(11, 19)}</span>
            </div>
            <button className = 'button start' onClick = {start}>Start</button>
            <button className = 'button stop'  onClick = {stop}>Stop</button>
            <button className = 'button pause' onDoubleClick = {wait}>Pause</button>
        </div>
    )
}
export default Counter
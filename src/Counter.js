import React,{ useState, useRef, useEffect, useCallback } from 'react'
import { initTimer } from './timer'

const Counter = () => {
    const [sec, setSec] = useState(0);
    const [status, setStatus] = useState("wait");
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
            sub.current.unsubscribe();
          }
        }

        if (status === "wait") {
            console.log('wait');
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
            <span> {new Date(sec).toISOString().slice(11, 19)}</span>
            </div>
            <button onClick = {start}>Start</button>
            <button onClick = {stop}>Stop</button>
            <button onDoubleClick = {wait}>Pause</button>
        </div>
    )
}
export default Counter
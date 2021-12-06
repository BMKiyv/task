import React,{useState,useEffect} from 'react'
import { Observable } from './Observable'
import { CounterServices } from './CounterServices'

const Counter = () => {
 const [time,setTime] = useState(new Observable(0,0,0))
 //console.log(time.seconds);
 const startTimer = ()=>{
    time.setTime('start')
 }
 const stopTimer = ()=>{
    time.setTime('stop')
 }
 useEffect(()=>{
    console.log(time)
 },[time])
    return (
        <div>
            <div>
            <span>HH:00</span>
            <span>MM:00</span>
            <span>SS:{time.seconds}</span>
            </div>
            <button onClick = {startTimer}>start</button>
            <button onDoubleClick = {stopTimer}>stop</button>
            <button>pause</button>
        </div>
    )
}
export default Counter
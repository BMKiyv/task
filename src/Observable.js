//import React from 'react'

export class Observable {
    constructor(hours,minutes,seconds){
        this.hours = hours,
        this.minutes = minutes,
        this.seconds = seconds,
        this.interval =()=> setInterval(()=>{
                this.seconds += 1
                if(this.seconds>10){
                    this.seconds = 0
                    this.minutes +=1
                }
                if(this.minutes>59){
                    this.minutes = 0
                    this.hours +=1
                }
    
                console.log(this.hours,this.minutes, this.seconds);
            },1000)
        
    }
    get(){
        return this._val;
    }

    set(val) {
        if (this._val !== val) {
            this._val = val;
            this._listeners.forEach(l => l(val));
        }
    }

     count (){

    }

    setTime(val){

        if(val==='start'){
            this.interval()
           
        }
        if(val==='stop'){
            clearInterval(this.interval)
            console.log('doubleClick');
        }

    }

    subscribe(listener){
        this._listeners.push(listener);
        return () => {
            this._listeners = this._listeners.filter(l => l !== listener);
        };
    }
}
import { Observable } from "./Observable";

export class CounterServices{
    constructor(){
     new Observable(0,0,0)
    }
   this= new Observable(0,0,0)
    setTime(val){
        if(val==='start'){
            setInterval(()=>{
                
                if(this.seconds>59){
                    this.seconds = 0
                    this.minutes +=1
                }
                else{
                    this.seconds += 1
                }
                console.log(this.minutes, this.secondes);
            },1000)
           
        }

    }
    
}
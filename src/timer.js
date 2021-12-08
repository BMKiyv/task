import { Observable, interval } from 'rxjs'
import  {ignoreElements, tap } from 'rxjs/operators'

export const initTimer = new Observable((observer) => {
        interval(1000)
        .subscribe(val=>{
        observer.next(val)})
    })
   
export const PauseTimer = initTimer.pipe(ignoreElements())
 
export const stopTimer = initTimer.pipe(
        //finalize(()=>null)
        tap({complete: null}) 
    )
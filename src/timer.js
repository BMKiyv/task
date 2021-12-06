import { Observable, interval } from 'rxjs'

export const initTimer = new Observable((observer) => {
    interval(1000)
    .subscribe(val=>{
      observer.next(val)})
    })
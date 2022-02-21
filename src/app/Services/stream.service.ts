import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StreamService {
 dataStream : Observable<string>
 dataStream1 : Observable<string>

  constructor() { }
  //send data
  createStream() {
    this.dataStream= new Observable(observer=>{
      setTimeout(() => {
        observer.next("val1")
      },1000 );
      setTimeout(() => {
        observer.next('val2')
      }, 3000);
      setTimeout(() => {
        observer.next("val3")
      }, 5000);
      setTimeout(() => {
        observer.complete()
      }, 6000);
      setTimeout(() => {
        observer.next('val4')
      }, 7000);
    })
    return this.dataStream
  }
  createStream1() {
    this.dataStream1= new Observable(observer=>{
      setTimeout(() => {
        observer.next("val1")
      },1000 );
      setTimeout(() => {
        observer.next('val2')
      }, 3000);
      setTimeout(() => {
        observer.error("sorry")
      }, 5000);
      setTimeout(() => {
        observer.complete()
      }, 6000);

    })
    return this.dataStream1
  }
}

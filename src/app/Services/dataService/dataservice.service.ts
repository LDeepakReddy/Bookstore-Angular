import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

 
  private messageSource = new BehaviorSubject('');
  incomingData = this.messageSource.asObservable();
  constructor() { }

  outgoingData(message: string) {
    console.log(message)
    this.messageSource.next(message)
  }
}

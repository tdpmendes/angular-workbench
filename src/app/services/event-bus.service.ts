import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventBusService {
  constructor() { }
  
  private subject$ = new BehaviorSubject<any>(null);
  public observable$ = this.subject$.asObservable();

  public set(value: any){
    this.subject$.next(value);
  }
}

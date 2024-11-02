import { Component } from '@angular/core';
import { EventBusService } from '../services/event-bus.service';

@Component({
  selector: 'app-some-component',
  templateUrl: './some-component.component.html',
  styleUrl: './some-component.component.css'
})
export class SomeComponentComponent {
  constructor(private eventBus:EventBusService){
    
  }

  sendEvent(){
    this.eventBus.set({
      "name": "event created on some component",
      "data": "50"
    })
  }
}

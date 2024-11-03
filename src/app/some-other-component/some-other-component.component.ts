import { Component } from '@angular/core';
import { EventBusService } from '../services/event-bus.service';

@Component({
  selector: 'app-some-other-component',
  templateUrl: './some-other-component.component.html',
  styleUrl: './some-other-component.component.css'
})
export class SomeOtherComponentComponent {
  constructor(private eventBus:EventBusService){
    eventBus.observable$.subscribe(data => {
      if (data){
        console.log("some other component data received",data);
      }
    })
  }
}
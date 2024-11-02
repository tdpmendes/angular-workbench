import { Component, EventEmitter, Output, output } from '@angular/core';

@Component({
  selector: 'app-something-that-emmits',
  templateUrl: './something-that-emmits.component.html',
  styleUrl: './something-that-emmits.component.css'
})
export class SomethingThatEmmitsComponent {

  @Output()
  buttonEvent = new EventEmitter();

  buttonClick(){
    this.buttonEvent.emit({
      "name":"buttonClick from something that emmits",
      "data": "5"
    });
  }

}

import { Component, EventEmitter, Input, OnInit, Output, output } from '@angular/core';

@Component({
  selector: 'app-something-that-emmits',
  templateUrl: './something-that-emmits.component.html',
  styleUrl: './something-that-emmits.component.css'
})
export class SomethingThatEmmitsComponent implements OnInit{
  
  ngOnInit(): void {
    console.log('ng on init on child',this.dataFromParent);
  }

  @Output()
  buttonEvent = new EventEmitter();

  @Input()
  dataFromParent:any;

  buttonClick(){
    this.buttonEvent.emit({
      "name":"buttonClick from something that emmits",
      "data": "5"
    });
  }

}

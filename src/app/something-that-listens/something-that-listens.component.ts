import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-something-that-listens',
  templateUrl: './something-that-listens.component.html',
  styleUrl: './something-that-listens.component.css'
})
export class SomethingThatListensComponent{
  
  eventDataReceived: any
  dataFromParent: any

  constructor(){
    this.dataFromParent = {
      "name": "data from parent",
      "data": "i was created on the parent"
    };
    console.log('event created on parent',this.dataFromParent);
  }


  handleButtonEvent(event:any){
    this.eventDataReceived = event;
    console.log(event);
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-something-that-listens',
  templateUrl: './something-that-listens.component.html',
  styleUrl: './something-that-listens.component.css'
})
export class SomethingThatListensComponent implements OnInit {
  
  ngOnInit(): void {
    
  }

  eventDataReceived: any

  handleButtonEvent(event:any){
    this.eventDataReceived = event;
    console.log(event);
  }

}

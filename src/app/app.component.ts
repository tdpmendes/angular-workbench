import { Component } from '@angular/core';
import { SelectOption } from './custom-select/select-option';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  getSomeOptions(): SelectOption[] {
    return [
      { label:"first option", value:"1"},
      { label:"second option", value:"2"},
      { label:"third option", value:"3"}
    ]
  }
  title = 'angular-workbench';

  customInputModel = ''
  customSelectModel = ''
  customDatepickerDate: NgbDate | undefined


}

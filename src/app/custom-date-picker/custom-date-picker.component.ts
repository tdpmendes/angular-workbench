import { Component, Input, ChangeDetectionStrategy, forwardRef } from '@angular/core';
import { FormsModule, ReactiveFormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { noop } from 'rxjs';
import { NgbDatepicker, NgbDateStruct, NgbInputDatepicker } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-custom-date-picker',
  standalone: true,
  templateUrl: './custom-date-picker.component.html',
  styleUrl: './custom-date-picker.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule, ReactiveFormsModule, CommonModule,	NgbDatepicker, NgbInputDatepicker],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomDatePickerComponent),
      multi: true,
    },
  ],
})
export class CustomDatePickerComponent {
  onChange: (value: string) => void = noop;
  onTouch: () => void = noop;

  disabled = false;
  value = '';
  @Input() isInvalid: Boolean = false;
  @Input() id: string = "";

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(value: string): void {
    this.value = value;
  }
}

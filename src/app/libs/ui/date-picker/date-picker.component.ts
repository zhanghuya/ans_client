import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatDatepicker } from '@angular/material/datepicker';
import moment from 'moment';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DatePickerComponent),
      multi: true
    }
  ]
})
export class DatePickerComponent implements ControlValueAccessor {
  @Input() label: string = 'Select Date';
  @Input() placeholder: string = 'Choose a date';
  @Input() mode: 'year' | 'month' | 'date' = 'date';;
  @Input() customClass?: string;
  @Input() width: string = '100%'; 

  control = new FormControl();
  value: Date | null = null;
  isDisabled = false;
  startView: 'month' | 'multi-year' = 'month';
  panelClass: string = '';

  
  onChange = (value: Date | null) => {};
  onTouched = () => {};

  ngOnInit() {
    this.control.valueChanges.subscribe((value) => {
      this.onChange(value);
    });
  }

  getStartView(): 'month' | 'year' | 'multi-year' {
    switch (this.mode) {
      case 'year':
        return 'multi-year';
      case 'month':
        return 'year';
      default:
        return 'month';
    }
  }

  // 根据模式来决定格式
  get format(): string {
    switch (this.mode) {
      case 'year':
        return 'YYYY';  // 只显示年份
      case 'month':
        return 'YYYY-MM';  // 显示年月
      case 'date':
      default:
        return 'YYYY-MM-DD';  // 默认显示完整日期
    }
  }

  onYearSelected(event: any, datepicker: MatDatepicker<Date>): void {
    if (event) {
      this.value = moment(event).toDate();
      this.onChange(this.value);
      datepicker.close(); 
    } else {
      console.error('Invalid event object:', event);
    }
  }

  onMonthSelected(event: any, datepicker: MatDatepicker<Date>): void {
    if (this.mode === 'month') {
      if (event) {
        this.value = moment(event).toDate();
        this.onChange(this.value);
        datepicker.close(); 
      } else {
        console.error('Invalid event object:', event);
      }
    }
  }

  writeValue(value: Date | null): void {
    this.value = value;
  }

  registerOnChange(fn: (value: Date | null) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  handleDateChange(event: any) {
    const date = event.value;
    this.value = date;
    this.onChange(date);
    this.onTouched();
  }
}

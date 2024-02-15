import {Component, EventEmitter, forwardRef, Input, Output} from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputFieldComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => InputFieldComponent),
      multi: true
    }
  ]
})
export class InputFieldComponent implements ControlValueAccessor, Validator {
  @Output()
  private readonly blur = new EventEmitter();

  @Input() public label?: string;
  @Input() public type: string = 'text';
  @Input() public placeholder: string = '';

  @Input()
  public set required(value: boolean) {
    if (value) {
      this.field.setValidators([Validators.required]);
    }
  }

  @Input()
  public set email(value: boolean) {
    if (value) {
      this.field.addValidators([Validators.email]);
    }
  }

  @Input()
  public set touched(value: boolean) {
    if (value) {
      this.field.markAsTouched();
    }
  }

  public readonly field: FormControl = new FormControl('', []);

  public writeValue(value: string | undefined): void {
    this.field.setValue(value || '');
  }

  public registerOnChange(fn: (v: string) => void): void {
    this.field.valueChanges.subscribe(fn);
  }

  public registerOnTouched(cb: () => void): void {
    this.blur.subscribe(cb);
  }

  public validate(): ValidationErrors | null {
    return this.field.valid ? null : {invalidForm: {valid: false}};
  }
}


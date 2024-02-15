import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {InputFieldComponent} from './input-field/input-field.component';
import {HeaderComponent} from './layout/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [InputFieldComponent],
  exports: [InputFieldComponent]
})
export class SharedModule {}

import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {InputFieldComponent} from './input-field/input-field.component';
import {HeaderComponent} from './layout/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [InputFieldComponent, HeaderComponent],
  exports: [InputFieldComponent, HeaderComponent]
})
export class SharedModule {}

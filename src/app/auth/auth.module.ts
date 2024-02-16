import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import {AuthRoutingModule} from './auth-routing.module';


@NgModule({
  declarations: [
  ],
  imports: [
    SharedModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
  ],
  bootstrap: []
})
export class AuthModule {
}

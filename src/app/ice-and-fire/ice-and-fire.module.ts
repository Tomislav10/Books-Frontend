import { NgModule } from '@angular/core';
import { IceAndFireRoutingModule } from './ice-and-fire-routing.module';
import { IceAndFireComponent } from './ice-and-fire.component';

@NgModule({
  declarations: [
    IceAndFireComponent
  ],
  imports: [
    IceAndFireRoutingModule
  ],
  providers: [],
  bootstrap: [IceAndFireComponent]
})
export class IceAndFireModule {}

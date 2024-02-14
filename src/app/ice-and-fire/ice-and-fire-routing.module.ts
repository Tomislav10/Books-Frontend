import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IceAndFireComponent} from './ice-and-fire.component';

const routes: Routes = [
  {
    path: '',
    component: IceAndFireComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IceAndFireRoutingModule {
}

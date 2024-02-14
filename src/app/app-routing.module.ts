import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {IceAndFireModule} from './ice-and-fire/ice-and-fire.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./auth/auth.module').then(
        m => m.AuthModule
      )
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./ice-and-fire/ice-and-fire.module').then(
        m => m.IceAndFireModule
      )
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

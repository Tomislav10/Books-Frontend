import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'books',
  },
  {
    path: '',
    loadChildren: () =>
      import('./auth/auth.module').then(
        m => m.AuthModule
      )
  },
  {
    canActivate: [AuthGuard],
    path: 'books',
    loadChildren: () =>
      import('./books/books.module').then(
        m => m.BooksModule
      )
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

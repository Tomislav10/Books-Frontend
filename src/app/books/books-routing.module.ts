import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BooksComponent} from './books.component';
import {BooksListResolverService} from './resolver/books-list-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: BooksComponent,
    resolve: {dataLoaded: BooksListResolverService},
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule {
}

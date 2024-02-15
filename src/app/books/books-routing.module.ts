import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BooksListComponent} from './books-list/books-list.component';
import {BooksComponent} from './books.component';
import {FavoriteBooksListComponent} from './favorite-books-list/favorite-books-list.component';
import {BooksListResolverService} from './resolver/books-list-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: BooksComponent,
    resolve: {dataLoaded: BooksListResolverService},
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'all-books'
      },
      {
        path: 'all-books',
        component: BooksListComponent
      },
      {
        path: 'my-favorites',
        component: FavoriteBooksListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule {
}

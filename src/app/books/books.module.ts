import {NgModule} from '@angular/core';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {BooksRoutingModule} from './books-routing.module';
import {BooksListResolverService} from './resolver/books-list-resolver.service';
import {booksReducer, Effects} from './store';

@NgModule({
  declarations: [],
  imports: [
    BooksRoutingModule,
    StoreModule.forFeature('booksState', booksReducer),
    EffectsModule.forFeature([Effects]),
  ],
  providers: [BooksListResolverService],
  bootstrap: []
})
export class BooksModule {
}

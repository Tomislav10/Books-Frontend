import {AsyncPipe, NgForOf} from '@angular/common';
import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {select, Store} from '@ngrx/store';
import {BehaviorSubject, combineLatest, debounceTime, distinctUntilChanged, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Book} from '../../shared/interface/book';
import {BookItemComponent} from '../book-item/book-item.component';
import {BooksState} from '../store';
import {getFavoritesBooks} from '../store/selector';

@Component({
  selector: 'app-favorite-books-list',
  templateUrl: './favorite-books-list.component.html',
  styleUrls: ['./favorite-books-list.component.scss'],
  standalone: true,
  imports: [
    BookItemComponent,
    NgForOf,
    MatInputModule,
    FormsModule,
    AsyncPipe
  ],
})
export class FavoriteBooksListComponent {
  private store = inject(Store<BooksState>);

  public search?: string;
  public search$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  public allBooks$ = this.store.pipe(select(getFavoritesBooks));
  public filteredContacts$: Observable<Book[]> = combineLatest([
    this.allBooks$,
    this.search$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
    )
  ])
    .pipe(
      map(
        ([items, search]) => (items || []).filter(data =>
          !search ? true : data.name.toLowerCase().includes(search.toLowerCase())
        )
      )
    );
}

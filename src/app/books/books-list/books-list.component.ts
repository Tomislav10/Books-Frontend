import {AsyncPipe, NgForOf} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {select, Store} from '@ngrx/store';
import {BehaviorSubject, combineLatest, debounceTime, distinctUntilChanged, Observable, zip} from 'rxjs';
import {map} from 'rxjs/operators';
import {Book} from '../../shared/interface/book';
import {BookItemComponent} from '../book-item/book-item.component';
import {BooksState} from '../store';
import {getAllBooks, getFavoritesBooks} from '../store/selector';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
  standalone: true,
  imports: [
    BookItemComponent,
    NgForOf,
    AsyncPipe,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule
  ],
})
export class BooksListComponent {
  private store = inject(Store<BooksState>);

  public search?: string;
  public search$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  public allBooks$ = zip([
    this.store.pipe(select(getAllBooks)),
    this.store.pipe(select(getFavoritesBooks))
  ]).pipe(
    map(([books, favorites]) => {
      const map = new Map((favorites || []).map(obj => [obj.url, obj]));

      return (books || []).map(obj => ({
        ...obj,
        favorite: map.get(obj.url)?.favorite || obj.favorite,
      }));
    })
  );

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

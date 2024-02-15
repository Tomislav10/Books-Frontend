import {AsyncPipe, NgForOf} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject, OnInit} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {select, Store} from '@ngrx/store';
import {BehaviorSubject, combineLatest, debounceTime, distinctUntilChanged, Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';
import {Book} from '../../shared/interface/book';
import {BookItemComponent} from '../book-item/book-item.component';
import {BooksState} from '../store';
import {getAllBooks} from '../store/selector';

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

  public allBooks$ = this.store.pipe(select(getAllBooks));
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

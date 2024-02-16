import {DatePipe} from '@angular/common';
import {Component, inject, Input, OnInit} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {Store} from '@ngrx/store';
import {Book} from '../../shared/interface/book';
import {BooksState} from '../store';
import {AddFavorites, RemoveFavorites} from '../store/actions';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatChipsModule, DatePipe],
})
export class BookItemComponent implements OnInit {
  private store = inject(Store<BooksState>);
  public favorite?: boolean;

  @Input() book!: Book;

  ngOnInit() {
    this.favorite = !!this.book.favorite;
  }

  public setItemFavorite(): void {
    this.favorite = !this.favorite;



    const data = {
      userId: localStorage.getItem("userId"),
      url: this.book.url,
      name: this.book.name,
      publisher: this.book.publisher,
      released: this.book.released,
      favorite: !this.book.favorite
    };

    this.store.dispatch(this.favorite ? new AddFavorites(data) : new RemoveFavorites(data));
  }
}

import {DatePipe} from '@angular/common';
import {Component, inject, Input, OnInit} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {Store} from '@ngrx/store';
import {Book} from '../../shared/interface/book';
import {BookDetailsDialog} from '../book-details-dialog/book-details-dialog.component';
import {BooksState} from '../store';
import {AddFavorites, RemoveFavorites} from '../store/actions';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatChipsModule, DatePipe, MatIconModule, MatDialogModule],
})
export class BookItemComponent implements OnInit {
  private store = inject(Store<BooksState>);
  private dialog = inject(MatDialog);

  public favorite?: boolean;

  @Input() book!: Book;

  public ngOnInit(): void {
    this.favorite = !!this.book.favorite;
  }

  public openDialog(): void {
    this.dialog.open(BookDetailsDialog, {
      data: {book: this.book}
    });
  }

  public setItemFavorite(): void {
    this.favorite = !this.favorite;

    const data = {
      userId: localStorage.getItem("userId"),
      url: this.book.url,
      name: this.book.name,
      publisher: this.book.publisher,
      country: this.book.country,
      mediaType: this.book.mediaType,
      numberOfPages: this.book.numberOfPages,
      isbn: this.book.isbn,
      released: this.book.released,
      favorite: !this.book.favorite
    };

    this.store.dispatch(this.favorite ? new AddFavorites(data) : new RemoveFavorites(data));
  }
}

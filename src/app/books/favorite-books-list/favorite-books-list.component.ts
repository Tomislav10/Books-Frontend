import {NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {BookItemComponent} from '../book-item/book-item.component';

@Component({
  selector: 'app-favorite-books-list',
  templateUrl: './favorite-books-list.component.html',
  styleUrls: ['./favorite-books-list.component.scss'],
  standalone: true,
  imports: [
    BookItemComponent,
    NgForOf
  ],
})
export class FavoriteBooksListComponent {}

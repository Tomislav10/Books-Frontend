import {NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {BookItemComponent} from '../book-item/book-item.component';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss'],
  standalone: true,
  imports: [
    BookItemComponent,
    NgForOf
  ],
})
export class BooksListComponent {
  books = [
    {
      "url": "https://www.anapioficeandfire.com/api/books/2",
      "name": "A Clash of Kings",
      "isbn": "978-0553108033",
      "authors": [
        "George R. R. Martin",
        "Ama Haaaaaaooooooooooooo",
        "Ivan Marko",
        "Goran Papa",
        "Darko Baba",
        "Kaat Rat",
        "Goran Doodo Modo Loaad Kad",
      ],
      "numberOfPages": 768,
      "publisher": "Bantam Books",
      "country": "United States",
      "mediaType": "Hardback",
      "released": "1999-02-02T00:00:00",
      "characters": [
        "https://www.anapioficeandfire.com/api/characters/1796",
        "https://www.anapioficeandfire.com/api/characters/1797",
        "https://www.anapioficeandfire.com/api/characters/2126"
      ],
      "povCharacters": [
        "https://www.anapioficeandfire.com/api/characters/148",
        "https://www.anapioficeandfire.com/api/characters/208",
      ]
    },
    {
      "url": "https://www.anapioficeandfire.com/api/books/2",
      "name": "A Clash of Kings",
      "isbn": "978-0553108033",
      "authors": [
        "George R. R. Martin",
        "Ama Haaaaaaooooooooooooo",
        "Ivan Marko",
        "Goran Papa",
        "Darko Baba",
        "Kaat Rat",
        "Goran Doodo Modo Loaad Kad",
      ],
      "numberOfPages": 768,
      "publisher": "Bantam Books",
      "country": "United States",
      "mediaType": "Hardback",
      "released": "1999-02-02T00:00:00",
      "characters": [
        "https://www.anapioficeandfire.com/api/characters/1796",
        "https://www.anapioficeandfire.com/api/characters/1797",
        "https://www.anapioficeandfire.com/api/characters/2126"
      ],
      "povCharacters": [
        "https://www.anapioficeandfire.com/api/characters/148",
        "https://www.anapioficeandfire.com/api/characters/208",
      ]
    }
  ]
}

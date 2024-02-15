import {DatePipe} from '@angular/common';
import {Component, Input} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatChipsModule, DatePipe],
})
export class BookItemComponent {
  @Input() name!: string;
  @Input() released!: string;
  @Input()
  set authors(value: string[]) {
    this._authors = value.join(', ');
  };

  public _authors!: string;
}

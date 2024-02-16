import {DatePipe} from '@angular/common';
import {Component, Inject} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';
import {Book} from '../../shared/interface/book';

class DialogData {
  book: Book | undefined;
}

@Component({
  selector: 'app-book-details-dialog',
  templateUrl: './book-details-dialog.component.html',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule, DatePipe],
})
export class BookDetailsDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}

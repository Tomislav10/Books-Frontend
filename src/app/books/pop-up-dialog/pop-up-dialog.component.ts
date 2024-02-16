import {DatePipe} from '@angular/common';
import {Component, Inject, OnInit} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {Book} from '../../shared/interface/book';

class DialogData {
  book: Book | undefined;
}

@Component({
  selector: 'app-pop-up-dialog',
  templateUrl: './pop-up-dialog.component.html',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule, DatePipe],
})
export class DialogElementsExampleDialog implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  ngOnInit() {
    console.log(this.data);
  }
}

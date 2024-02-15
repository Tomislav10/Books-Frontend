import {Component} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: 'app-ice-and-fire',
  templateUrl: './ice-and-fire.component.html',
  styleUrls: ['./ice-and-fire.component.scss'],
  standalone: true,
  imports: [
    MatTabsModule,
    MatIconModule,
    MatCardModule
  ],
})
export class IceAndFireComponent {
}

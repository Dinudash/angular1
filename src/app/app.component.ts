import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';

  headers = ['NAME', 'AGE', 'STATUS'];

  rows = [
    {
      NAME: 'DINESH',
      AGE: '45',
      STATUS:'Single',
    },
    {
      NAME: 'RAJESH',
      AGE: '25',
      STATUS:'Married',
    },
    {
      NAME: 'VIMAL',
      AGE: '55',
      STATUS:'Married',
    },
    {
      NAME: 'RAM',
      AGE: '55',
      STATUS:'Single',
    },
  ];
}

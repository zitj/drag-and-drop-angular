import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'dragula-app';

  vampires = [
    { name: 'Dracula', favouriteColor: 'red' },
    { name: 'Mrazomor', favouriteColor: 'white' },
    { name: 'Krone', favouriteColor: 'green' },
    { name: 'Tukidid', favouriteColor: 'blue' },
  ];
  zombies = [
    { name: 'Lele', favouriteColor: 'red' },
    { name: 'Majko', favouriteColor: 'white' },
    { name: 'Ima', favouriteColor: 'green' },
    { name: 'QRcode', favouriteColor: 'blue' },
  ];

  constructor() {}
}

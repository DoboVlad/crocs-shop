import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'crocs-shop';

  crocs = [
    {
      img: 'image test',
      name: 'Yellow crocs',
      price: '40$'
    },
    {
      img: 'image test',
      name: 'Blue crocs',
      price: '50$'
    },
    {
      img: 'image test',
      name: 'Red crocs',
      price: '60$'
    }
  ]
}

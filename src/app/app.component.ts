import { Component } from '@angular/core';

enum Currency {USD, CAD}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Stocks';
}

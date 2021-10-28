import { Component } from '@angular/core';

enum Currency {USD, CAD}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'A toy app to keep track of stock bases in two currencies';
}

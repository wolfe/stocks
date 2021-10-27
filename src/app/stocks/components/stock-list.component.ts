import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Stock } from '../stock';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
})
export class StockListComponent {
  @Input() stocks: ReadonlyArray<Stock>;
  @Output() remove = new EventEmitter();
}

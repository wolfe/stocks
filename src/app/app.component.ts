import { StockService } from './stocks/services/stock.service';
import { addStock, listStocks } from './state/stocks.actions';
import { selectStocks } from './state/stocks.selectors';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

enum Currency {USD, CAD}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

export class AppComponent implements OnInit {
  constructor(
    private store: Store,
    private stocksService: StockService
  ) {}

  title = 'A toy app to keep track of stock bases in two currencies';
  stocks$ = this.store.select(selectStocks);

  onAdd(stockId: number) {
    this.store.dispatch(addStock({ stockId}));
  }

  ngOnInit() {
    this.stocksService.getStocks().subscribe((stocks) => (this.store.dispatch(listStocks({ stocks}))));
  }
}

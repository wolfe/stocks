import { StockService } from './stocks/services/stock.service';
import { addStock, listStocks } from './state/stocks.actions';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as stockSelector from './state/stocks.selectors';
import { Observable, Subscription } from 'rxjs';
import { AppState } from './state/app.state';
import { Stock } from './stocks/stock';

enum Currency {
  USD,
  CAD,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'A toy app to keep track of stock bases in two currencies';
  stocks$: Observable<ReadonlyArray<Stock>>;
  subs = new Subscription();

  constructor(
    private store: Store<AppState>,
    private stocksService: StockService
  ) {}

  ngOnInit() {
    // data from the server or event mock data should be bring to the component with using Effects
    // i.e: Server -> service -> Effect's method -> store (reducer) -> selector in component

    this.stocksService
      .getStocks()
      .subscribe((stocks) => this.store.dispatch(listStocks({ stocks })));
    this.stocks$ = this.store.pipe(select(stockSelector.selectStockCollection));
    this.subs.add(
      this.stocks$.subscribe((stocks) => {
        console.log(stocks);
      })
    );
  }

  onAdd(stockId: number) {
    this.store.dispatch(addStock({ stockId }));
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}

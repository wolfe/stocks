import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Stock } from './stock';
import { STOCKS } from './stocks-test';

@Injectable({
  providedIn: 'root',
})
export class StockService {
  constructor() {}

  getStocks(): Observable<Stock[]> {
    const stocks = of(STOCKS);
    return stocks;
  }
}

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Stock } from './stock';
import { STOCKS } from './stocks-test';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class StockService {
  constructor(private messageService: MessageService) {}

  getStocks(): Observable<Stock[]> {
    const stocks = of(STOCKS);
    this.messageService.add("StockService: fetched stocks");
    return stocks;
  }

  getStock(id: number): Observable<Stock> {
    const stock = STOCKS.find(s => s.id === id)!;
    this.messageService.add(`StockService: fetch stock ${stock.ticker}`);
    return of(stock);
  }
}

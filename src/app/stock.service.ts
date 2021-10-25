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
}

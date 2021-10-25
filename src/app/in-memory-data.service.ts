import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Stock, Currency } from './stock';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const stocks = [
      { id: 1, ticker: 'MSFT', shares: 20, costBasis: 23.25, currency: Currency.USD, description: 'Microsoft', datePurchased: "2010-07-05"},
      { id: 2, ticker: 'BMO', shares: 30, costBasis: 234.25, currency: Currency.CAD, description: 'Bank of Montreal', datePurchased: "2015-12-01"},
      { id: 3, ticker: 'AAPL', shares: 2.5, costBasis: 148.25, currency: Currency.USD, description: 'Apple', datePurchased: "2021-10-05"},

    ];
    return {stocks};
  }

  genId(stocks: Stock[]): number {  // Next available ID
    return stocks.length > 0 ? Math.max(...stocks.map(stock => stock.id)) + 1 : 11;
  }
}

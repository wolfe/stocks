import { Component, OnInit } from '@angular/core';
import { Stock } from '../stock';
import { StockService } from '../services/stock.service';
import { MessageService } from 'src/app/message.service';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
})
export class StocksComponent implements OnInit {
  stocks: Stock[] = [];

  constructor(private stockService: StockService,
    private MessageService: MessageService) {}

  ngOnInit(): void {
    this.stockService.getStocks().subscribe((stocks) => (this.stocks = stocks));
  }

  create(ticker: string): void {
    ticker = ticker.trim();
    if (!ticker) {return;}
    this.stockService.createStock({ ticker} as Stock)
    .subscribe(stock => {
      this.stocks.push(stock);
    })
  }

  delete(stock: Stock): void {
    this.stocks = this.stocks.filter(s => s !== stock);
    this.stockService.deleteStock(stock.id).subscribe();
  }
}

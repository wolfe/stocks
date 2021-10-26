import { Component, OnInit } from '@angular/core';
import { Stock } from '../stock';
import { StockService } from '../services/stock.service';
import { MessageService } from 'src/app/message.service';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: [ './stocks.component.scss' ],
})
export class StocksComponent implements OnInit {
  stocks: Stock[] = [];
  displayedColumns: string[] = ['ticker', 'datePurchased', 'shares', 'currency', 'basis', 'delete'];

  constructor(private stockService: StockService,
    private MessageService: MessageService) {}

  ngOnInit(): void {
    this.stockService.getStocks().subscribe((stocks) => (this.stocks = stocks));
  }

  create(ticker: string): void {
    ticker = ticker.trim();
    if (!ticker) {return;}
    this.stockService.createStock({ ticker} as Stock).subscribe(
      stock => this.stocks = [...this.stocks, stock])
  }

  open(id: number): void {

  }

  delete(stock: Stock): void {
    this.stockService.deleteStock(stock.id).subscribe(
      _ => { this.stocks = this.stocks.filter(o => o.id !== stock.id)});
  }
}

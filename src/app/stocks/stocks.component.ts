import { Component, OnInit } from '@angular/core';
import { Stock } from '../stock';
import { StockService } from '../stock.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.scss'],
})
export class StocksComponent implements OnInit {
  stocks: Stock[] = [];
  selectedStock?: Stock;

  constructor(private stockService: StockService,
    private MessageService: MessageService) {}

  onSelect(stock: Stock): void {
    this.selectedStock = stock;
    this.MessageService.add(`StocksComponent: Selected stock ${stock.ticker}`);
  }

  ngOnInit(): void {
    this.stockService.getStocks().subscribe((stocks) => (this.stocks = stocks));
  }
}

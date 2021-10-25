import { Component, OnInit } from '@angular/core';
import { Stock } from '../stock';
import { StockService } from '../stock.service';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.scss']
})
export class StocksComponent implements OnInit {
  stocks: Stock[] = [];
  selectedStock?: Stock;

  constructor(private stockService: StockService) { }

  onSelect(stock: Stock): void {
    this.selectedStock = stock;
  }

  ngOnInit(): void {
    this.stockService.getStocks().subscribe(stocks => this.stocks = stocks);
  }
}

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

  constructor(private stockService: StockService,
    private MessageService: MessageService) {}

  ngOnInit(): void {
    this.stockService.getStocks().subscribe((stocks) => (this.stocks = stocks));
  }
}

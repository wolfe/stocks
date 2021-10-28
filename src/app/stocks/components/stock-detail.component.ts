import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StockService } from '../services/stock.service';
import { Stock, StockObj } from '../stock';
import { Location } from '@angular/common';

@Component({
  selector: 'app-stock-detail',
  template: '<app-stock-form [stock]=stock (stockSaved)="save($event)"></app-stock-form>',
})
export class StockDetailComponent implements OnInit {
  stock?: Stock;

  constructor(
    private route: ActivatedRoute,
    private stockService: StockService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getStock();
  }

  getStock(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.stockService.getStock(id).subscribe((stock) => (this.stock = stock));
  }

  save(stock: Stock): void {
    if (this.stock) {
      this.stockService
        .updateStock(new StockObj({ ...stock, id: this.stock.id }))
        .subscribe(() => this.goBack());
    } else {
      this.stockService
        .createStock(new StockObj(stock))
        .subscribe(() => this.goBack());
    }
  }

  goBack(): void {
    this.location.back();
  }
}

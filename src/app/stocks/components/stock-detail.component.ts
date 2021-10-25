import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Stock } from '../stock';
import { StockService } from '../services/stock.service';

@Component({
  selector: 'app-stock-detail',
  templateUrl: './stock-detail.component.html',
})
export class StockDetailComponent implements OnInit {
  @Input() stock?: Stock;

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
    this.stockService.getStock(id)
      .subscribe(stock => this.stock = stock);

  }

  save(): void {
    if (this.stock) {
      this.stockService.updateStock(this.stock)
        .subscribe(() => this.goBack());
    }
  }

  goBack(): void {
    this.location.back();
  }
}
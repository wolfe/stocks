import { Currency, Stock } from './../stock';
import { Component, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styles: [
    `
      form {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      }
    `,
  ],
})

export class StockFormComponent {
  @Input() stock?: Stock;
  @Output() saved = new EventEmitter<Stock>();
  @Output() canceled = new EventEmitter();

  stockForm = new FormGroup({
    shares: new FormControl(),
    ticker: new FormControl(),
    basis: new FormControl(),
    currency: new FormControl(),
    description: new FormControl(),
    datePurchased: new FormControl(), // TODO: Could not figure out how to properly populate the date (currently does time-zone)
  });

  ngOnChanges(changes: SimpleChanges) {
    if(changes['stock']) {
      this.stockForm.get('shares')?.setValue(this.stock?.shares);
      this.stockForm.get('ticker')?.setValue(this.stock?.ticker);
      this.stockForm.get('basis')?.setValue(this.stock?.basis);
      this.stockForm.get('currency')?.setValue(this.stock?.currency);
      this.stockForm.get('description')?.setValue(this.stock?.description);
      this.stockForm.get('datePurchased')?.setValue(this.stock?.datePurchased);
    }
  }

  public Currency = Currency;
  constructor(
    private formBuilder: FormBuilder,
  ) {}

  public getPurchasedDate() {
    // Unused
    return (this.stock && new Date(this.stock.datePurchased)) || new Date();
  }


  onCancel() {
    this.canceled.emit();
  }

  onSubmit($event: Event) {
    this.saved.emit(this.stockForm.value);
  }
}

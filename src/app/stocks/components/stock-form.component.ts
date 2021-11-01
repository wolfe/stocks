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

  stockForm1: FormGroup;
  Currency = Currency;
  // good practice is to define properties under the constructor, and methods below --
  // -- default component methods in the order when it works in life cycle hooks and custom methods (but that up to you)

  constructor(
    private formBuilder: FormBuilder,
  ) {
    // the same as for stockForm but with using FormBuilder - just to show you another way
    this.stockForm1 = this.formBuilder.group({
      shares: [''],
      ticker: [''],
      basis: [''],
      currency: [''],
      description: [''],
      datePurchased: ['']
    })
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes['stock']) {
      // better  - use .patchValues or .setValues methods for the formGroup instead of set value for each field separatelly
      // note that .patchValues works as patch (set values only for provided controls - more flexible)
      this.stockForm.patchValue({
        shares: this.stock?.shares,
        ticker: this.stock?.ticker,
        basis: this.stock?.basis,
        currency: this.stock?.currency,
        description: this.stock?.description,
        datePurchased: this.stock?.datePurchased
      })
    }
  }

  
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

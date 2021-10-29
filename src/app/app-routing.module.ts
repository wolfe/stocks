import { StockDetailComponent } from './stocks/components/stock-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StocksComponent } from './stocks/components/stocks.component';
import { CrudComponent } from './crud/components/crud.component';

const routes: Routes = [
  { path: '', redirectTo: '/stocks', pathMatch: 'full' },
  { path: 'stocks', component: StocksComponent },
  { path: 'stocks/create', component: StockDetailComponent },
  { path: 'stocks/:id', component: StockDetailComponent },
  { path: 'crud', redirectTo: 'crud/', pathMatch: 'full' },
  { path: 'crud/:id', component: CrudComponent },
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

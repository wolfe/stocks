import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StocksComponent } from './stocks/stocks.component';
import { StockDetailComponent } from './stock-detail/stock-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'stocks', component: StocksComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'stocks/:id', component: StockDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

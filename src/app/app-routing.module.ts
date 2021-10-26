import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StocksComponent } from './stocks/components/stocks.component';
import { StockDetailComponent } from './stocks/components/stock-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StockFormComponent } from './stocks/components/stock-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/stocks', pathMatch: 'full' },
  { path: 'stocks', component: StocksComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'stocks/:id', component: StockFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

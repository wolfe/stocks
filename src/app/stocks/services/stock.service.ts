import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Stock } from '../stock';
import { MessageService } from 'src/app/message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class StockService {

  private stocksUrl = 'api/stocks';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService) {}

  getStocks(): Observable<Stock[]> {
    return this.http.get<Stock[]>(this.stocksUrl)
      .pipe(
        tap(stocks => this.log(`fetched ${stocks.length} stocks`)),
        catchError(this.handleError<Stock[]>('getStocks', []))
      );
  }

  getStock(id: number): Observable<Stock> {
    const url = `${this.stocksUrl}/${id}`;
    return this.http.get<Stock>(url).pipe(
      tap(stock => this.log(`fetched stock ${stock.ticker}`)),
      catchError(this.handleError<Stock>(`getStock id=${id}`))
    );
  }

  updateStock(stock: Stock): Observable<any> {
    return this.http.put(this.stocksUrl, stock, this.httpOptions).pipe(
      tap(_ => this.log(`updated stock ${stock.ticker}`)),
      catchError(this.handleError<any>('updateStock'))
    );
  }

  createStock(stock: Stock): Observable<Stock> {
    return this.http.post<Stock>(this.stocksUrl, stock, this.httpOptions).pipe(
      tap((newStock: Stock) => this.log(`Created stock ${newStock.ticker}`)),
      catchError(this.handleError<any>('createStock'))
    );
  }

  deleteStock(id: number): Observable<Stock> {
    const url = `${this.stocksUrl}/${id}`;
    return this.http.delete<Stock>(url, this.httpOptions).pipe(
      tap(_ => this.log(`Deleted stock id=${id}`)),
      catchError(this.handleError<any>('deleteStock'))
    );
  }

  private log(message:string) {
    this.messageService.add(`StockService: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}

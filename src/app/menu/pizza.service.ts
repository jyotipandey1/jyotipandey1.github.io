import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { IPizza } from './pizza';
import { tap, catchError, filter } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  
  item: IPizza[] = [];
  getPizzaDetail(id: number): Observable<IPizza> {
    if(id===101){
      return this.http.get<IPizza>(this.pizzaUrl1).pipe(
        tap(data => console.log('101',JSON.stringify(data))),
        catchError(this.handleError)
      );
    } else {
      return this.http.get<IPizza>(this.pizzaUrl2).pipe(
        tap(data => console.log('102',JSON.stringify(data))),
        catchError(this.handleError)
      );
    }
  }

  private pizzaUrl = "../assets/api/pizza.json";
  private pizzaUrl1 = "../assets/api/pizza-1.json";
  private pizzaUrl2 = "../assets/api/pizza-2.json";

  constructor(private http: HttpClient) { }
    
    getPizzas(): Observable<IPizza[]> {
      return this.http.get<IPizza[]>(this.pizzaUrl).pipe(
        tap(data => console.log('All',JSON.stringify(data))),
        catchError(this.handleError)
      );
    }
    
   private  handleError(err: HttpErrorResponse)  {
     let msg = '';
     if(err.error instanceof ErrorEvent)
      msg = 'An Error Occurred: '+err.error.message;
     console.log(msg);
     return throwError(err);
   }

  addToCart(pizza: IPizza) {
    this.item.push(pizza);
  }

  getItems() {
    return this.item;
  }

  clearItems() {
    this.item = [];
    return this.item;
  }
}

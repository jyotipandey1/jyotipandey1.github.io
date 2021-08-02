import { Component, OnInit } from '@angular/core';
import { PizzaService } from './pizza.service';
import { IPizza } from './pizza';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  errormsg: any;
  sub: Subscription | undefined;
  constructor(private pizzaService: PizzaService) { }

  ngOnInit(): void {
    this.pizzaService.getPizzas().subscribe({
      next: products => {
        this.pizza = products
      },
      error: err => this.errormsg = err
    });
  }
  
  onDestroy(): void {
    if(this.sub)
    this.sub.unsubscribe();
  }
  
  pizza: IPizza[] = [];

  addToCart(pizza: IPizza) {
    this.pizzaService.addToCart(pizza);
  }
}

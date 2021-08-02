import { Component, OnInit } from '@angular/core';
import { IPizza } from '../menu/pizza';
import { PizzaService } from '../menu/pizza.service';

@Component({
  selector: 'app-special',
  templateUrl: './special.component.html',
  styleUrls: ['./special.component.css']
})
export class SpecialComponent implements OnInit {
  
  special: IPizza = {
    id: 103,
    name: 'Hawaiian Chicken Pizza',
    price: 500,
    path: '../../assets/images/todaysspecial.jpg',
    description: `This a tasty pizza with pineapple that is fun to do with a significant other. The flavors blend well
    together. Tastes great with a glass of white wine.`
  };
  constructor(private pizzaService: PizzaService) { }

  ngOnInit(): void {
  }

  addToCart() {
    this.pizzaService.addToCart(this.special);
  }

}

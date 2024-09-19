import { Component, OnInit } from '@angular/core';
import { IPizza } from '../menu/pizza';
import { PizzaService } from '../menu/pizza.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  item: IPizza[] = [];
  id: number;
  errormsg: string;
  sum = 0;
  constructor(private pizzaService: PizzaService) { }

  ngOnInit(): void {

    this.item = this.pizzaService.getItems();
    this.calculatePrice();
  }

  removeItem(i: number) {
    this.item.splice(i, 1);
    this.calculatePrice();
  }

  calculatePrice(){
    this.sum = 0;
    for(const i of this.item){
      this.sum+=parseInt(`${i.price}`, 10);
    }
  }

  placeOrder(){
    this.pizzaService.clearItems();
    this.ngOnInit();
  }
}

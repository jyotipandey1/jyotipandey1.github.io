import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  errormsg: any;
  sum: number = 0;
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
    for(let i=0; i<this.item.length; i++){
      this.sum+=parseInt(`${this.item[i].price}`, 10);
    }
  }

  placeOrder(){
    this.pizzaService.clearItems();
    this.ngOnInit();
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IPizza } from '../pizza';
import { PizzaService } from '../pizza.service';

@Component({
  selector: 'app-pizza-detail',
  templateUrl: './pizza-detail.component.html',
  styleUrls: ['./pizza-detail.component.css']
})
export class PizzaDetailComponent implements OnInit {

  sub: Subscription | undefined;
  errormsg: string;
  id: number;
  //pizza1: IPizza[] = [];
  constructor(private route: ActivatedRoute, private router: Router, private pizzaService: PizzaService) { }
  ngOnInit(): void {
    
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.pizzaService.getPizzaDetail(this.id).subscribe({
      next: products => {
        this.pizzadetail = products
      },
      error: err => this.errormsg = err
    });
  }

  onDestroy(): void {
    if(this.sub)
    this.sub.unsubscribe();
  }

  pizzadetail: IPizza;
  
  addToCart(pizza: IPizza) {
    this.pizzaService.addToCart(pizza);
  }
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpecialComponent } from './special/special.component';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { CartComponent } from './cart/cart.component';
import { MenuComponent } from './menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { PizzaDetailComponent } from './menu/pizza-detail/pizza-detail.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    SpecialComponent,
    WelcomeComponent,
    CartComponent,
    MenuComponent,
    PizzaDetailComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
    { path: 'aboutUs', component: AboutComponent },
    { path: 'pizzas/:id', component: PizzaDetailComponent },
    { path: 'menu', component: MenuComponent },
    { path: 'cart', component: CartComponent },
    { path: 'todaysspecial', component: SpecialComponent },
    { path: 'welcome', component: WelcomeComponent },
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
], { relativeLinkResolution: 'legacy' }),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

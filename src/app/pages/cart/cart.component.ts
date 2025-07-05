import { Component } from '@angular/core';
import { CartDetailsComponent } from '../../components/cart-details/cart-details.component';

@Component({
  selector: 'app-cart',
  imports: [CartDetailsComponent],
  template: ` <app-cart-details /> `,
  standalone: true,
})
export class CartComponent {}

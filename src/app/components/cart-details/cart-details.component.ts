import { Component } from '@angular/core';
import { AppIconAdd } from '../../icons/app-icon-add';
import { AppIconMinus } from '../../icons/app-icon-minus';
import { AppIconDelete } from '../../icons/app-icon-delete';
import { NgFor } from '@angular/common';
import { AppIconArrowDown } from '../../icons/app-icon-arrowDown';
import { AppIconArrowForward } from '../../icons/app-icon-arrowForward';

@Component({
  selector: 'app-cart-details',
  standalone: true,
  imports: [
    NgFor,
    AppIconAdd,
    AppIconMinus,
    AppIconDelete,
    AppIconArrowForward,
  ],
  templateUrl: './cart-details.component.html',
})
export class CartDetailsComponent {
  handleSubmit() {
    window.alert('Order placed successfully..!!');
  }
}

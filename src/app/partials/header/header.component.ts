import { Component, HostListener } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NotificationIconComponent } from '../../icons/notification-icon';
import { CartIcon } from '../../icons/cart-icon';
import { FavoriteIcon } from '../../icons/favorite-icon';
import { LogoComponent } from '../../shared/logo/logo.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgClass,
    RouterLink,
    CartIcon,
    FavoriteIcon,
    LogoComponent,
    NotificationIconComponent,
  ],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  scrolled = false;

  constructor(private router: Router) {}

  handleClick() {
    this.router.navigate(['cart']);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 100;
  }
}

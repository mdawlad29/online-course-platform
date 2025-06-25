import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NotificationIconComponent } from '../../icons/notification-icon';
import { CartIcon } from '../../icons/cart-icon';
import { FavoriteIcon } from '../../icons/favorite-icon';
import { LogoComponent } from '../../shared/logo/logo.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    CartIcon,
    FavoriteIcon,
    LogoComponent,
    NotificationIconComponent,
  ],
  templateUrl: './header.component.html',
})
export class HeaderComponent {}

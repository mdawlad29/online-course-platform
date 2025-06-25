import { Component } from '@angular/core';
import { GraduationCapIconComponent } from '../../icons/graduate-cap-icon';
import { RouterLink } from '@angular/router';
import { NotificationIconComponent } from '../../icons/notification-icon';
import { CartIcon } from '../../icons/cart-icon';
import { FavoriteIcon } from '../../icons/favorite-icon';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    GraduationCapIconComponent,
    NotificationIconComponent,
    CartIcon,
    FavoriteIcon,
    RouterLink,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}

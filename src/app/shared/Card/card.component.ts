import { Component, Input } from '@angular/core';
import { StarIcon } from '../../icons/app-icon-star';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterLink, StarIcon, NgClass],
  templateUrl: './card.component.html',
})
export class CardComponent {
  @Input() class?: string = '';
  @Input() title?: string = '';
  @Input() price?: number = 0;
  @Input() image?: string = '';
  @Input() rating?: string = '';
  @Input() student?: string = '';
  @Input() link?: string = '';
  @Input() description?: string = '';
  @Input() titleClass?: string = 'bg-primary-50 px-2 py-1 text-primary text-sm';
}

import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heading',
  standalone: true,
  imports: [NgClass],
  templateUrl: './heading.component.html',
})
export class HeadingComponent {
  @Input() title?: string = '';
  @Input() class?: string =
    'text-base capitalize font-semibold text-secondary-100';
}

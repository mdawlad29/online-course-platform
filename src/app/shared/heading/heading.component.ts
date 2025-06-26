import { NgClass, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heading',
  standalone: true,
  imports: [NgClass, NgIf],
  templateUrl: './heading.component.html',
})
export class HeadingComponent {
  @Input() title?: string = '';
  @Input() isBorder?: boolean = false;
  @Input() class?: string =
    'flex justify-center font-semibold text-secondary-100 md:text-3xl text-2xl mb-1';
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgClass],
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input() type?: string = '';
  @Input() title?: string = '';
  @Input() class?: string =
    'bg-primary hover:bg-primary-50 border border-primary hover:text-primary px-10 py-2.5 text-base text-neutral duration-300 ease-in-out transition';

  @Output() onClick = new EventEmitter<void>();
}

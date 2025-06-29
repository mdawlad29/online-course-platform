import { NgClass, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AppIconArrowDown } from '../../icons/app-icon-arrowDown';
import { AppIconArrowUp } from '../../icons/app-icon-arrowUp';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [NgClass, NgIf, AppIconArrowDown, AppIconArrowUp],
  template: `
    <div class="mb-4">
      <!-- Header -->
      <div
        class="flex justify-between items-center cursor-pointer pb-1 border-b border-gray-300"
        (click)="onToggle.emit()"
      >
        <h4 class="font-semibold text-secondary-100 capitalize text-lg">
          {{ title }}
        </h4>

        <div>
          <ng-container *ngIf="activeIndex !== index"
            ><app-icon-arrowDown
          /></ng-container>
          <ng-container *ngIf="activeIndex === index"
            ><app-icon-arrowUp
          /></ng-container>
        </div>
      </div>

      <!-- Content -->
      <div
        class="transition-all duration-500 ease-in-out overflow-hidden mt-1"
        [ngClass]="
          activeIndex === index
            ? 'max-h-[500px] scale-y-110 opacity-100'
            : 'max-h-0 scale-y-0 opacity-0'
        "
      >
        <p class="text-gray-600 text-sm">{{ description }}</p>
      </div>
    </div>
  `,
})
export class AccordionComponent {
  @Input() title!: string;
  @Input() description!: string;
  @Input() activeIndex!: number | null;
  @Input() index!: number;
  @Output() onToggle = new EventEmitter<void>();
}

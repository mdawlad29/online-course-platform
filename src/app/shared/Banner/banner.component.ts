import { NgClass, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [NgClass, NgIf],
  template: `
    <div
      class="2xl:px-40 xl:px-20 md:px-4 px-2 bg-success h-64 py-10 flex flex-col justify-center items-center mb-10"
      [ngClass]="class"
    >
      <h1 class="md:text-3xl text-xl font-bold text-secondary-100 mb-4">
        {{ title }}
      </h1>

      <p
        *ngIf="description"
        class="text-gray-600 md:text-lg text-sm md:w-[550px] w-full"
      >
        {{ description }}
      </p>
    </div>
  `,
})
export class BannerComponent {
  @Input() title?: string = '';
  @Input() description?: string = '';
  @Input() class?: string = '';
}

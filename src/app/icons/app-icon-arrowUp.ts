import { Component } from '@angular/core';

@Component({
  selector: 'app-icon-arrowUp',
  standalone: true,
  template: `<svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="lucide lucide-chevron-up-icon lucide-chevron-up"
  >
    <path d="m18 15-6-6-6 6" />
  </svg>`,
})
export class AppIconArrowUp {}

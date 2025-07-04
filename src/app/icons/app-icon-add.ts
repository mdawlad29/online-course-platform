import { Component } from '@angular/core';

@Component({
  selector: 'app-icon-add',
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
    class="lucide lucide-plus-icon lucide-plus"
  >
    <path d="M5 12h14" />
    <path d="M12 5v14" />
  </svg>`,
})
export class AppIconAdd {}

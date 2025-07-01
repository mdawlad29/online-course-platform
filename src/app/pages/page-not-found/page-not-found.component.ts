import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="text-center p-10">
      <h1 class="md:text-2xl text-xl font-bold text-red-500">
        404 - Page Not Found
      </h1>
      <p class="text-gray-600 mt-4 mb-5">
        Sorry, the page you are looking for does not exist.
      </p>

      <a routerLink="/" class="text-primary hover:underline transition"
        >Go back to home</a
      >
    </div>
  `,
})
export class PageNotFoundComponent {}

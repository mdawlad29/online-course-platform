import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  template: `
    <div class="text-center p-10">
      <h1 class="md:text-2xl text-xl font-bold text-red-500">
        404 - Page Not Found
      </h1>
      <p class="text-gray-600 mt-4">
        Sorry, the page you are looking for does not exist.
      </p>
    </div>
  `,
})
export class PageNotFoundComponent {}

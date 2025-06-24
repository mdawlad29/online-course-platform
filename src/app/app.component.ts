import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './partials/footer/footer.component';
import { HeaderComponent } from './partials/header/header.component';
import { TopHeaderComponent } from './partials/top-header/top-header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, HeaderComponent, TopHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'e-tutor';
}

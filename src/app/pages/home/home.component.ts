import { Component } from '@angular/core';
import { HeroSectionComponent } from '../../components/hero-section/hero-section.component';
import { ButtonComponent } from '../../shared/button/button.component';

@Component({
  selector: 'app-home',
  imports: [HeroSectionComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {}

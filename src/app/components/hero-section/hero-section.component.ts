import { Component } from '@angular/core';
import { LinkTagComponent } from '../../shared/link-tag/link-tag.component';
import { ButtonComponent } from '../../shared/button/button.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './hero-section.component.html',
})
export class HeroSectionComponent {
  constructor(private router: Router) {}

  handleClick() {
    this.router.navigate(['signup']);
  }
}

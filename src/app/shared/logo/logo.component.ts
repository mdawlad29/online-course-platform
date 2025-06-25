import { Component } from '@angular/core';
import { GraduationCapIconComponent } from '../../icons/graduate-cap-icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-logo',
  imports: [GraduationCapIconComponent, RouterLink],
  templateUrl: './logo.component.html',
})
export class LogoComponent {}

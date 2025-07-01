import { Component } from '@angular/core';
import { SignupSectionComponent } from '../../components/signup-signin-section/signup-signin-section.component';

@Component({
  selector: 'app-signup',
  imports: [SignupSectionComponent],
  template: `<app-signup-section />`,
})
export class SignupComponent {}
